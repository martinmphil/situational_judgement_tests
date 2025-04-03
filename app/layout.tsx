import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Situational Judgement Tests",
  description: "Situational Judgement Tests demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
