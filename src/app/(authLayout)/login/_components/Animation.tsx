'use client';

import Lottie from "lottie-react";
import loginSignupAnimation from "../../../../../public/login-signup.json";
import forgetPasswordAnimation from "../../../../../public/forget-password.json";
import otpAnimation from "../../../../../public/otp.json";
import { usePathname } from 'next/navigation';

const Animation = () => {
  const pathname = usePathname();

  const getAnimation = () => {
    if (pathname === "/login" || pathname === "/signup") {
      return loginSignupAnimation;
    } else if (pathname === "/forget-password") {
      return forgetPasswordAnimation;
    } else if (pathname === "/forget-password-confirmation") {
      return otpAnimation;
    }
    return loginSignupAnimation;
  };

  return (
    <div className="max-w-[400px] mx-auto flex flex-col justify-center items-center h-full">
       <h1 className="font-bold text-[27px] text-white text-center">
              {
                pathname === "/login"
                ?
                "Welcome Back!!"
                :
                pathname === "/signup" ?
                "Join Us Today"
                :
                pathname === "/forget-password" ?
                "Make Sure Your Email Is Valid To Receive Reset Link."
                :
                ""
              }
            </h1>
      <Lottie animationData={getAnimation()} loop={true} />

      {

      }
    </div>
  );
};

export default Animation;
