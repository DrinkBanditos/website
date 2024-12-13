import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "~/components/email/email-template";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName } = body;

  if (!firstName || !lastName) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'Banditos <hello@drinkbanditos.com>',
      to: "me@troyhancock.com", 
      subject: "Message from Portfolio",
      react: EmailTemplate({ firstName: "Imam", lastName: "Porfolio" }),
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}