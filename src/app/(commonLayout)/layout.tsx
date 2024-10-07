import React, { ReactNode } from "react";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer/Footer";
import ClientProvider from "@/providers/ClientProvider";
import { Toaster } from 'sonner'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <ClientProvider>{children}</ClientProvider>
      <Footer />
      <Toaster position="top-center" richColors   />
    </div>
  );
};

export default layout;
