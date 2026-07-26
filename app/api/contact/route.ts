import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_YOUR_API_KEY_HERE") {
      console.error("Missing or placeholder RESEND_API_KEY in environment.");
      return Response.json(
        { error: "Email service is not configured yet. Please check server settings." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "thakurshaurya2007@gmail.com",
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #0d1117; color: #e6edf3; border-radius: 16px;">
          <h2 style="color: #22d3ee; margin-top: 0;">New Contact Form Message</h2>
          <hr style="border: none; border-top: 1px solid #21262d; margin: 16px 0;" />

          <p style="margin: 8px 0 4px; color: #8b949e; font-size: 13px;">Name</p>
          <p style="margin: 0; font-size: 16px;">${name}</p>

          <p style="margin: 16px 0 4px; color: #8b949e; font-size: 13px;">Email</p>
          <p style="margin: 0; font-size: 16px;">
            <a href="mailto:${email}" style="color: #22d3ee; text-decoration: none;">${email}</a>
          </p>

          <p style="margin: 16px 0 4px; color: #8b949e; font-size: 13px;">Message</p>
          <div style="background: #161b22; padding: 16px; border-radius: 8px; margin-top: 4px; white-space: pre-wrap; line-height: 1.6;">
            ${message}
          </div>

          <hr style="border: none; border-top: 1px solid #21262d; margin: 24px 0 12px;" />
          <p style="margin: 0; font-size: 12px; color: #484f58;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
