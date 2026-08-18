import { NextResponse } from "next/server";
import { Resend } from "resend";
import { projectTypes, site } from "@/lib/content";

const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedTypes = new Set<string>(projectTypes);

type Body = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  purpose?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const purpose = body.purpose?.trim() ?? "";

  if (!name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email || !emailOk.test(email)) {
    return NextResponse.json({ error: "That email does not look valid." }, { status: 400 });
  }
  if (!allowedTypes.has(projectType)) {
    return NextResponse.json({ error: "Select a project type." }, { status: 400 });
  }
  if (purpose.length < 20) {
    return NextResponse.json(
      { error: "Tell us which business this is for and why you need it." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please write to us directly." },
      { status: 500 }
    );
  }

  const to = process.env.CONTACT_TO ?? site.email;
  const from = process.env.CONTACT_FROM ?? "VisionBrew <beth.t@example.com>";
  const resend = new Resend(apiKey);

  const rows = [
    ["Name", name],
    ["Company", company || "—"],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Project type", projectType],
  ];

  const html = `
    <h2>New project enquiry</h2>
    <table>
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
    <h3>What this is for</h3>
    <p style="white-space:pre-wrap">${escapeHtml(purpose)}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `VisionBrew enquiry — ${name} (${projectType})`,
    html,
    text: [
      `Name: ${name}`,
      `Company: ${company || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Project type: ${projectType}`,
      "",
      "What this is for:",
      purpose,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Could not send the message. Please try again or email us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
