import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

// Smooth Scrolling
import Lenis from "~/components/global/Lenis";

import Nav from "~/components/layout/nav";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const BrothersOT = localFont({
  src: "../../public/fonts/BrothersOT-Regular.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Banditos Mexican Lager",
  description: "A Canadian Made, Golden Smooth, Mexican Lager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${BrothersOT.variable} antialiased`}>
        <Nav />
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
