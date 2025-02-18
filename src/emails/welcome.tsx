import * as React from "react";
import { 
  Html, 
  Head,
  Body, 
  Container,
  Img, 
  Link,
  Hr,
  Section,
  Text
} from "@react-email/components";


type WelcomeProps = {
  firstName: string;
  lastName: string;
};

export default function Welcome({ }: WelcomeProps) {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header Image with Instagram Link */}
          <Section style={styles.section}>
            <Link href="https://instagram.com/drinkbanditos" style={styles.link}>
              <Img src="https://175dia5tlm.ufs.sh/f/aHkjIq3WKHPsBq4o21paCXWHIDSm3PbhnFp72zwGqQAZv0tT" alt="Banditos Header" style={styles.image} />
            </Link>
          </Section>

          {/* Body Image with Cantina Link */}
          <Section style={styles.section}>
            <Link href="https://www.lonestarcantina.ca/" style={styles.link}>
              <Img src="https://175dia5tlm.ufs.sh/f/aHkjIq3WKHPs1HSKzqnhLqKCAjHtN86G3SmewrXUn1MBJgbQ" alt="Banditos Body" style={styles.image} />
            </Link>
          </Section>

          {/* Footer */}
          <Hr style={styles.hr} />
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              PLEASE DRINK RESPONSIBLY
              <br />
              BANDITOS ADDRESS - 123 CANTINA DRIVE
              <br />
              <Link href="https://drinkbanditos.com/unsubscribe" style={styles.unsubscribe}>
                UNSUBSCRIBE
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#F3F0E7",
    color: "#4B3E2C",
    fontFamily: "Georgia, serif",
    textAlign: "center" as const,
    padding: "20px",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#F3F0E7",
    border: "1px solid #D5C5A1",
    borderRadius: "5px",
    padding: "0px",
  },
  section: {
    margin: "30px 0",
  },
  image: {
    width: "100%",
    height: "auto",
    border: "none",
  },
  link: {
    textDecoration: "none",
  },
  hr: {
    border: "none",
    borderTop: "1px solid #D5C5A1",
    margin: "20px",
  },
  footer: {
    fontSize: "12px",
    color: "#6D5F3A",
  },
  footerText: {
    margin: "0",
    lineHeight: "1.5",
  },
  unsubscribe: {
    color: "#0033cc",
    textDecoration: "underline",
    margin: "20px",
  },
};
