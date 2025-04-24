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
      <body>
        <header>
          <p>
            <a href="../">Return to demo page</a>
          </p>
        </header>

        {children}
      </body>
    </html>
  );
}
