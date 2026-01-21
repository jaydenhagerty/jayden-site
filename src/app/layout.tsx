import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jayden Hagerty",
  description: "Portfolio site for Jayden Hagerty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
