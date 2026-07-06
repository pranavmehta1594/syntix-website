import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

import { buildScheduleEmail } from "@/lib/email";

export const runtime = "nodejs";

const scheduleSchema = z.object({
  formType: z.literal("schedule_appointment"),
  name: z.string().min(2),
  email: z.string().email(),
  date: z.preprocess((value) => {
    if (value instanceof Date) {
      return value;
    }

    if (typeof value === "string" || typeof value === "number") {
      return new Date(value);
    }

    return value;
  }, z.date()),
  projectType: z.string().min(1),
  projectDescription: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value ? value : undefined)),
});

function jsonError(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const senderEmail = process.env.SCHEDULE_EMAIL_FROM || "Optimus <onboarding@resend.dev>";

  if (!resendApiKey) {
    return jsonError("Missing RESEND_API_KEY environment variable.", 500);
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonError("Request body must be valid JSON.");
  }

  const parsed = scheduleSchema.safeParse(payload);

  if (!parsed.success) {
    return jsonError("Invalid schedule submission.");
  }

  const resend = new Resend(resendApiKey);
  const email = buildScheduleEmail(parsed.data);

  try {
    await resend.emails.send({
      from: senderEmail,
      to: ["teamcliniccloud@gmail.com"],
      subject: email.subject,
      html: email.html,
      text: email.text,
      replyTo: parsed.data.email,
    });

    return NextResponse.json({
      message: "Schedule request sent successfully.",
    });
  } catch (error) {
    console.error("Failed to send schedule email:", error);
    return jsonError("Unable to send schedule request right now.", 500);
  }
}
