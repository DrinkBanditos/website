import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {email, firstName, lastName} = await request.json();

  await resend.contacts.create({
    email: email,
    firstName: firstName,
    lastName: lastName,
    unsubscribed: false,
    audienceId: '58e7c2c9-3e09-423c-83a6-11c6b429e83c',
  });
}
