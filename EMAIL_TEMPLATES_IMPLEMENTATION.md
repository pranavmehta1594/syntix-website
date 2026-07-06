# Distinct Email Templates for Each Form

## Goal

Use one server-side email pipeline, but generate a different subject and body template for each form type so inbox triage is immediate and unambiguous.

## Scope

- `components/ui/schedule-modal.tsx`
- `app/api/schedule/route.ts`
- `components/careers/application-form.tsx`
- `app/api/careers/route.ts`
- Future careers form route or shared route dispatch

## Environment Variables

Store all secrets and provider configuration in `.env` only. Do not hardcode them in source files.

Required values for the schedule flow:

- `RESEND_API_KEY`
- `SCHEDULE_EMAIL_FROM` (optional locally; defaults to `Optimus <onboarding@resend.dev>`)

The route sends all schedule requests to `teamcliniccloud@gmail.com`.

## Payload Contract

Add a `formType` field to the submission payload.

Example values:

- `schedule_appointment`
- `careers_application`

The API should reject requests that omit `formType` or send an unsupported value.

## Schedule Form Changes

Update `components/ui/schedule-modal.tsx` to:

- Submit `formType: "schedule_appointment"` with the existing fields.
- Call the API instead of simulating submission.
- Show success and error states based on the response.
- Reset the form on success.
- Keep the submitter experience focused on booking confirmation.

Recommended request body:

```json
{
  "formType": "schedule_appointment",
  "name": "Jane Doe",
  "email": "jane@company.com",
  "date": "2026-07-01T00:00:00.000Z",
  "projectType": "web",
  "projectDescription": "Need a site redesign"
}
```

## API Route

Implement `app/api/schedule/route.ts` as the shared server-side entry point for form submissions.

Responsibilities:

- Validate the request body with a schema.
- Dispatch to a dedicated template builder based on `formType`.
- Send mail to `teamcliniccloud@gmail.com`.
- Set `Reply-To` to the submitter's email for schedule requests.
- Return clear JSON success and error responses.

## Template Dispatch

Use a dedicated formatter for each form type.

### `schedule_appointment`

Subject:

- `[SCHEDULE APPOINTMENT] New Booking Request - {Name}`

Body:

- Heading: `New Schedule Appointment Request`
- Badge or label: `Schedule Request`
- Summary block:
  - Name
  - Email
  - Preferred Date
  - Project Type
- Optional notes section for `Project Description`
- Plain-text fallback with the same grouped information

### `careers_application`

Subject:

- `[CAREERS APPLICATION] New Submission - {Name}`

Body:

- Heading: `New Careers Submission`
- Candidate details
- Role-specific fields
- Plain-text fallback with the same grouped information

## Careers Payload

The careers form should submit these fields:

- `formType: "careers_application"`
- `fullName`
- `email`
- `phone`
- `positionType`
- `resumeFile` as an uploaded CV attachment
- `portfolioLink` as an optional field
- `whyJoinUs`

Send the careers payload as `multipart/form-data` so the uploaded CV can be forwarded as an email attachment.

## Email Format Requirements

- Send HTML email plus plain-text fallback.
- Keep the schedule email visually and textually distinct from careers submissions.
- Group fields so they are easy to scan in Gmail.
- Make the subject line readable at a glance without opening the message.

## Validation Rules

The schedule route should validate at minimum:

- `formType` is `schedule_appointment`
- `name` is at least 2 characters
- `email` is a valid email
- `date` is present and is a valid date
- `projectType` is present
- `projectDescription` is optional

Reject invalid requests before email sending.

## UI Behavior

On the schedule modal:

- Disable the submit button while sending.
- Render a success message when the API returns `ok`.
- Render an error message when the API fails.
- Close the modal only after a successful submission.

## Suggested Implementation Shape

Keep the route small by splitting email generation into helpers:

- `validateSubmission`
- `buildScheduleEmail`
- `buildCareersEmail`
- `sendMail`

This keeps the transport logic separate from the template formatting logic.

## Test Plan

- Submit a schedule appointment and confirm the email subject clearly shows it is a booking request.
- Confirm the body is easy to scan and the schedule fields are grouped together.
- Confirm careers submissions use a different subject prefix and template.
- Verify a bad payload is rejected before email sending.

## Notes

- Both forms should send to the same inbox.
- The main goal is fast human recognition in Gmail, not a complex CRM workflow.
- The careers form can be wired later using the same template strategy.
