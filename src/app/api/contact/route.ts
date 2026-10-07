import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      subject,
      interest,
      customerType,
      electricityBill,
      message,
    } = await request.json();

    const escapeHtml = (value: unknown) => {
      return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeSubject = escapeHtml(subject);
    const safeInterest = escapeHtml(interest);
    const safeCustomerType = escapeHtml(customerType);
    const safeElectricityBill = escapeHtml(electricityBill);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: "Amperage Energy <onboarding@resend.dev>",
      to: "brayankibet01@gmail.com",
      replyTo: email,
      subject: `Website Energy Assessment: ${subject}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; color: #1f2937;">

          <div style="background: #14532d; padding: 25px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0;">
              New Energy Assessment Request
            </h2>

            <p style="color: #bbf7d0; margin-bottom: 0;">
              Amperage Energy Website
            </p>
          </div>

          <div style="padding: 25px; background: #ffffff; border: 1px solid #e5e7eb;">

            <h3 style="color: #166534;">
              Customer Information
            </h3>

            <p>
              <strong>Name:</strong><br />
              ${safeName}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${safeEmail}
            </p>

            <p>
              <strong>Phone:</strong><br />
              ${safePhone}
            </p>

            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 25px 0;" />

            <h3 style="color: #166534;">
              Energy Requirements
            </h3>

            <p>
              <strong>Interested In:</strong><br />
              ${safeInterest}
            </p>

            <p>
              <strong>Customer Type:</strong><br />
              ${safeCustomerType}
            </p>

            <p>
              <strong>Average Monthly Electricity Bill:</strong><br />
              ${safeElectricityBill}
            </p>

            <p>
              <strong>Subject:</strong><br />
              ${safeSubject}
            </p>

            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 25px 0;" />

            <h3 style="color: #166534;">
              Customer Message
            </h3>

            <div style="
              background: #f0fdf4;
              padding: 18px;
              border-radius: 8px;
              line-height: 1.6;
            ">
              ${safeMessage}
            </div>

          </div>

          <div style="
            padding: 18px;
            background: #f9fafb;
            border-radius: 0 0 10px 10px;
            color: #6b7280;
            font-size: 13px;
          ">
            This assessment request was submitted through the Amperage Energy
            website.
          </div>

        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Energy assessment request sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}