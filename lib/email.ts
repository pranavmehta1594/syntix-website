import { format } from "date-fns";

type ScheduleSubmission = {
  name: string;
  email: string;
  date: Date;
  projectType: string;
  projectDescription?: string;
};

type CareersSubmission = {
  fullName: string;
  email: string;
  phone: string;
  positionType: string;
  portfolioLink?: string;
  whyJoinUs: string;
};

const projectTypeLabels: Record<string, string> = {
  web: "Web Development",
  mobile: "Mobile App",
  saas: "SaaS Platform",
  cloud: "Cloud / DevOps",
  uiux: "UI/UX Design",
  other: "Other",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatOptionalValue(value?: string) {
  return value?.trim() ? value.trim() : "Not provided";
}

function formatProjectType(projectType: string) {
  return projectTypeLabels[projectType] ?? projectType;
}

function formatScheduleDate(date: Date) {
  return format(date, "PPP");
}

const positionTypeLabels: Record<string, string> = {
  internship: "Internship",
  "full-time": "Full-time Job",
};

function formatPositionType(positionType: string) {
  return positionTypeLabels[positionType] ?? positionType;
}

export function buildScheduleEmail(submission: ScheduleSubmission) {
  const dateLabel = formatScheduleDate(submission.date);
  const projectTypeLabel = formatProjectType(submission.projectType);
  const notes = submission.projectDescription?.trim();
  const hasNotes = Boolean(notes);

  const subject = `[SCHEDULE APPOINTMENT] New Booking Request - ${submission.name}`;

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; background:#f8fafc; padding:24px; color:#0f172a;">
      <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden;">
        <div style="background:linear-gradient(135deg, #1d4ed8, #2563eb); color:#ffffff; padding:24px 28px;">
          <div style="display:inline-block; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; font-weight:700; background:rgba(255,255,255,0.16); padding:6px 10px; border-radius:999px;">
            Schedule Request
          </div>
          <h1 style="margin:16px 0 0; font-size:28px; line-height:1.2;">New Schedule Appointment Request</h1>
          <p style="margin:8px 0 0; font-size:15px; opacity:0.92;">A new booking request was submitted from the website.</p>
        </div>
        <div style="padding:28px;">
          <table role="presentation" style="width:100%; border-collapse:collapse; margin-bottom:24px;">
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Request Type</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;">Schedule Appointment</td>
            </tr>
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Name</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;">${escapeHtml(submission.name)}</td>
            </tr>
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Email</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;"><a href="mailto:${escapeHtml(submission.email)}" style="color:#2563eb; text-decoration:none;">${escapeHtml(submission.email)}</a></td>
            </tr>
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Preferred Date</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;">${escapeHtml(dateLabel)}</td>
            </tr>
            <tr>
              <td style="padding:0; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Project Type</td>
              <td style="padding:0; font-weight:700; color:#0f172a; text-align:right;">${escapeHtml(projectTypeLabel)}</td>
            </tr>
          </table>

          ${
            hasNotes
              ? `
                <div style="border-top:1px solid #e2e8f0; padding-top:20px;">
                  <div style="font-size:12px; color:#64748b; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; margin-bottom:8px;">Project Notes</div>
                  <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px; line-height:1.6; color:#1e293b;">${escapeHtml(notes ?? "")}</div>
                </div>
              `
              : ""
          }
        </div>
      </div>
    </div>
  `;

  const text = [
    "Schedule Request",
    "New Schedule Appointment Request",
    "",
    `Request Type: Schedule Appointment`,
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Preferred Date: ${dateLabel}`,
    `Project Type: ${projectTypeLabel}`,
    "",
    `Project Notes: ${formatOptionalValue(notes)}`,
  ].join("\n");

  return {
    subject,
    html,
    text,
  };
}

export function buildCareersEmail(submission: CareersSubmission) {
  const positionTypeLabel = formatPositionType(submission.positionType);
  const portfolioLink = submission.portfolioLink?.trim();
  const portfolioLabel = formatOptionalValue(submission.portfolioLink);

  const subject = `[CAREERS APPLICATION] New Submission - ${submission.fullName}`;

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; background:#f8fafc; padding:24px; color:#0f172a;">
      <div style="max-width:640px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden;">
        <div style="background:linear-gradient(135deg, #0f172a, #334155); color:#ffffff; padding:24px 28px;">
          <div style="display:inline-block; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; font-weight:700; background:rgba(255,255,255,0.16); padding:6px 10px; border-radius:999px;">
            Careers Application
          </div>
          <h1 style="margin:16px 0 0; font-size:28px; line-height:1.2;">New Careers Submission</h1>
          <p style="margin:8px 0 0; font-size:15px; opacity:0.92;">A new candidate application was submitted from the website.</p>
        </div>
        <div style="padding:28px;">
          <table role="presentation" style="width:100%; border-collapse:collapse; margin-bottom:24px;">
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Request Type</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;">Careers Application</td>
            </tr>
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Full Name</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;">${escapeHtml(submission.fullName)}</td>
            </tr>
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Email</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;"><a href="mailto:${escapeHtml(submission.email)}" style="color:#2563eb; text-decoration:none;">${escapeHtml(submission.email)}</a></td>
            </tr>
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Phone</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;">${escapeHtml(submission.phone)}</td>
            </tr>
            <tr>
              <td style="padding:0 0 12px; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Position Type</td>
              <td style="padding:0 0 12px; font-weight:700; color:#0f172a; text-align:right;">${escapeHtml(positionTypeLabel)}</td>
            </tr>
            <tr>
              <td style="padding:0; color:#64748b; font-size:12px; text-transform:uppercase; letter-spacing:0.08em;">Portfolio / Resume Link</td>
              <td style="padding:0; font-weight:700; color:#0f172a; text-align:right;">${portfolioLink ? `<a href="${escapeHtml(portfolioLink)}" style="color:#2563eb; text-decoration:none;">${escapeHtml(portfolioLabel)}</a>` : "Not provided"}</td>
            </tr>
          </table>
          <div style="border-top:1px solid #e2e8f0; padding-top:20px;">
            <div style="font-size:12px; color:#64748b; text-transform:uppercase; letter-spacing:0.08em; font-weight:700; margin-bottom:8px;">Why Join Us</div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px; line-height:1.6; color:#1e293b;">${escapeHtml(submission.whyJoinUs)}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const text = [
    "Careers Application",
    "New Careers Submission",
    "",
    `Request Type: Careers Application`,
    `Full Name: ${submission.fullName}`,
    `Email: ${submission.email}`,
    `Phone: ${submission.phone}`,
    `Position Type: ${positionTypeLabel}`,
    `Portfolio / Resume Link: ${portfolioLabel}`,
    "",
    `Why Join Us: ${submission.whyJoinUs}`,
  ].join("\n");

  return {
    subject,
    html,
    text,
  };
}
