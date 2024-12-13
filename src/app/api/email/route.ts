import Welcome from '~/emails/welcome';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {email, firstName, lastName} = await request.json();

  await resend.emails.send({
    from: 'Banditos <hola@drinkbanditos.com>',
    to: email,
    subject: 'Welcome To The Familia',
    react: Welcome({firstName, lastName}),
  });
}
