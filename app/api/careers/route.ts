import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

import { buildCareersEmail } from "@/lib/email";

export const runtime = "nodejs";

const careersSchema = z.object({
  formType: z.literal("careers_application"),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  positionType: z.string().min(1),
  portfolioLink: z
    .string()
    .url()
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  whyJoinUs: z.string().min(10),
});

function jsonError(message: string, status = 400) {
  return NextResponse.json({ message }, { status });
}

async function parseCareersRequest(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();

    const payload = {
      formType: formData.get("formType"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      positionType: formData.get("positionType"),
      portfolioLink: formData.get("portfolioLink") ?? "",
      whyJoinUs: formData.get("whyJoinUs"),
    };

    const resumeFile = formData.get("resumeFile");

    return {
      payload,
      resumeFile: resumeFile instanceof File ? resumeFile : null,
    };
  }

  const payload = await request.json();

  return {
    payload,
    resumeFile: null,
  };
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const senderEmail = process.env.SCHEDULE_EMAIL_FROM || "Optimus <onboarding@resend.dev>";

  if (!resendApiKey) {
    return jsonError("Missing RESEND_API_KEY environment variable.", 500);
  }

  try {
    const { payload, resumeFile } = await parseCareersRequest(request);

    const parsed = careersSchema.safeParse(payload);

    if (!parsed.success) {
      return jsonError("Invalid careers submission.");
    }

    if (!resumeFile || resumeFile.size === 0) {
      return jsonError("Resume upload is required.");
    }

    const allowedTypes = new Set([
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]);

    if (!allowedTypes.has(resumeFile.type)) {
      return jsonError("Please upload a PDF, DOC, or DOCX file.");
    }

    if (resumeFile.size > 10 * 1024 * 1024) {
      return jsonError("Resume file must be 10MB or smaller.");
    }

    const resend = new Resend(resendApiKey);
    const email = buildCareersEmail(parsed.data);
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());

    await resend.emails.send({
      from: senderEmail,
      to: ["teamcliniccloud@gmail.com"],
      subject: email.subject,
      html: email.html,
      text: email.text,
      replyTo: parsed.data.email,
      attachments: [
        {
          filename: resumeFile.name || "resume",
          content: resumeBuffer,
          contentType: resumeFile.type || "application/octet-stream",
        },
      ],
    });

    return NextResponse.json({
      message: "Careers application sent successfully.",
    });
  } catch {
    return jsonError("Unable to send careers application right now.", 500);
  }
}
