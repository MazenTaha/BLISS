import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BLISS - Unique Design and Materials",
  description: "International specifications. VIP experience.",
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
