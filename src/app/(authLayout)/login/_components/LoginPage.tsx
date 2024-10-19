/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";
// postcard
// commentcard
// commentbtn


"use client"
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Reusable/Button";
import Link from "next/link";
import { useLoginMutation } from "@/redux/features/Auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { setUser } from "@/redux/features/Auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { toast } from "sonner";
import { ICONS } from "../../../../../public";

type TLoginData = {
  email: string;
  password: string;
};

// type TAuthResponse ={
//   success: boolean;
//   message: string;
//   data: {
//     accessToken: string;
//     refreshToken: string;
//     user: {
//       _id: string;
//       name: string;
//       email: string;
//       role: string;
//     };
//   };
// }

// interface ErrorResponse {
//   error: {
//     data: {
//       errorSourse: {
//         message: string;
//         stack: string;
//         success: boolean;
//       };
//       status: number;
//     };
//   };
//   meta: {
//     request: Request;
//     response: Response;
//   };
// }


const LoginPage = () => {
  const [login, { isLoading: isLoginIn }] = useLoginMutation();
  const router = useRouter();

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginData>();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (data: TLoginData) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await login(loginData).unwrap();
      const user = verifyToken(response.data?.accessToken);
      console.log(response)

      dispatch(setUser({ user, token: response.data.accessToken }));
      toast.success("Logged in successfully.");
      router.push("/");
    } catch (err:any) {
      toast.error(err?.data?.message);
    }
  };


  

  return (
    <div className="w-full">
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-4 w-full"
        >
          <div>
            <h1 className="font-bold text-[27px] dark:text-[#D9D9D9]/80 text-[#364F53]">
              <span className="text-primary-20">Login</span> Your Account
            </h1>
            <p className="max-w-[500px] text-sm text-[#364F53] dark:text-[#D9D9D9]/50">
              Login your account and explore more pets posts!
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 w-full mt-3">
            <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">
              Email
            </p>
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              id="email"
              className="bg-primary-70 px-3 py-2 rounded-md border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full "
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-rose-500 text-start">
                {errors.email.message as string}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1 w-full relative">
            <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">
              Password
            </p>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              type={`${showPassword ? "text" : "password"}`}
              id="password"
              className="bg-primary-70 px-3 py-2 rounded-md border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full pr-10"
              placeholder="Password must be at least 8 characters"
            />
            {errors.password && (
              <span className="text-rose-500 text-start">
                {errors.password.message as string}
              </span>
            )}
            {showPassword ? (
              <Image
                onClick={() => setShowPassword(false)}
                src={ICONS.eyeClosed}
                alt="Hide password"
                className="w-[18px] absolute top-9 bottom-0 right-4 cursor-pointer"
              />
            ) : (
              <Image
                onClick={() => setShowPassword(true)}
                src={ICONS.eyeOpen}
                alt="Show password"
                className="w-[18px] absolute top-9 bottom-0 right-4 cursor-pointer"
              />
            )}
          </div>

          {/* Remember me & Forgot password */}
          <div className="flex items-center justify-between">
            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                // {...register("rememberMe")}
                type="checkbox"
                id="rememberMe"
                className="accent-primary-30 size-4"
              />
              <label
                htmlFor="rememberMe"
                className="text-body-text font-medium text-primary-10 dark:text-[#D9D9D9]/70"
              >
                Remember Me
              </label>
            </div>

            {/* Forgot password */}
            <Link href={"/forget-password"} className="text-primary-30 font-medium text-end mt-2 cursor-pointer hover:underline">
              Forgot Password?
            </Link>
          </div>

          <Button variant="primary">
            {isLoginIn ? "Login In..." : "Login"}
          </Button>

          <p className="max-w-[500px] text-sm text-[#364F53] dark:text-[#D9D9D9]/50 text-center">
            Don't have an account?{" "}
            <Link href={"/signup"} className="font-semibold text-primary-30">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
