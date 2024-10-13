import React, { ReactNode } from "react";
import Navbar from "../../components/Home/Navbar/Navbar";
import ClientProvider from "@/providers/ClientProvider";
import { Toaster } from 'sonner'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ClientProvider>
      <Navbar />
      {children}
      </ClientProvider>
      <Toaster position="top-center" richColors/>
    </div>
  );
};

export default layout;
