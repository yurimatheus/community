import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyLnkd Community",
  description: "Your basic community for LinkedIn Leads",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
