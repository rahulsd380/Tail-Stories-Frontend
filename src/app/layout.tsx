import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/providers/ClientProvider";
import { Toaster } from "sonner";

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
      <ClientProvider> {children}</ClientProvider>
      <Toaster position="top-center" richColors/>
       
      </body>
    </html>
  );
}
