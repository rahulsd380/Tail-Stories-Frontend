/* eslint-disable react/no-unescaped-entities */
"use client"

import Button from "@/components/Reusable/Button";
import Link from "next/link";


const ForgetPasswordConfirmationPage = () => {
    return (
      <div className="w-full">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <h1 className="font-bold text-[27px] dark:text-[#D9D9D9]/80 text-[#364F53]">
            Please check your <span className="text-primary-20">Email</span> to get the reset link.
            </h1>
            <p className="max-w-[500px] text-sm text-[#364F53] dark:text-[#D9D9D9]/50 mt-3">
              Check your email to get the reset link. If you don't get the link, please ensure that your email is valid.
            </p>
          </div>

          
          <Link href={"/login"} className="w-full mt-5">
          <Button variant="primary" classNames="w-full">
            Back To Login
          </Button>
          </Link>
        </div>
      </div>  
    );
  };
  
  export default ForgetPasswordConfirmationPage;