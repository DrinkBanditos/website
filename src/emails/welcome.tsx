import { Heading, Html } from "@react-email/components";
import * as React from "react";

type Props = {
  firstName: string;
  lastName: string;
}

export default function Welcome({ firstName, lastName }: Props) {
  return (
    <Html>
      <Heading>Welcome to La Familia, {firstName}</Heading>
      <p>This email was sent to {firstName} {lastName}, if you would like to unsubscribe you can do so by clicking here.</p>
    </Html>
  );
}
