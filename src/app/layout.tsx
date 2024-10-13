import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tail Stories",
  description: "Share your stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* bg-[#fcfcfc] */}
      <body className="bg-bg-gradient">
        {children}
      </body>
    </html>
  );
}
