import * as React from "react";
import { 
  Html, 
  Head,
  Body, 
  Container,
  Img, 
  Heading, 
  Text, 
  Hr,
  Link
} from "@react-email/components";

type WelcomeProps = {
  firstName: string;
  lastName: string;
};

export default function Welcome({ firstName, lastName }: WelcomeProps) {
  return (
    <Html lang="en">
      <Head />
      <Body className="bg-gray-100 font-sans flex flex-col items-center justify-center min-h-screen text-gray-800">
        <Container className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto my-8 text-center">
          <Img
            src="https://utfs.io/f/aHkjIq3WKHPsaD4N0ya3WKHPsqpl31062cVhNGwdoDX7ARzS"
            alt="La Familia Logo"
            width={300}
            height={160}
            className="mx-auto mb-12"
          />
          <Heading className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to La Familia, {firstName}!
          </Heading>
          <Text className="text-gray-600 mb-6">
            We're thrilled to have you as part of la familia. Get ready for exclusive updates, special offers, and more from Banditos!
          </Text>
          
          <Hr className="border-t border-gray-300 my-16" />
          <Text className="text-sm text-gray-500">
            This email was sent to {firstName} {lastName}. If you'd like to unsubscribe 
            or update your preferences, you can do so by clicking{" "}
            <Link href="https://lafamilia.com/unsubscribe" className="text-blue-600 hover:underline">
              here
            </Link>.
          </Text>
          <Text className="text-xs text-gray-400 mt-4">
            © {new Date().getFullYear()} Banditos, All rights reserved.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

