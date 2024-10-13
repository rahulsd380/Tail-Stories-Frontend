"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/Reusable/Button";
import Link from "next/link";
import { useSignupMutation } from "@/redux/features/Auth/authApi";
import { useRouter } from "next/navigation";
import { ICONS } from "../../../../../public";

type TSignUpData = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const router = useRouter();
  const [signup, { isLoading: isSigningUp }] = useSignupMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSignUpData>();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (data: TSignUpData) => {
    const formData = new FormData();

    const signupData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(signupData);

    formData.append("data", JSON.stringify(signupData));

    try {
      const response = await signup(formData).unwrap();
      console.log(response);
      if (response.success) {
        console.log("Signup successful");
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit(handleSignup)}
          className="flex flex-col gap-4 w-full"
        >
          <div>
            <h1 className="font-bold text-[27px] dark:text-[#D9D9D9]/80 text-[#364F53] capitalize">
              Create a <span className="text-primary-20">new account</span>
            </h1>
            <p className="max-w-[500px] text-sm text-[#364F53] dark:text-[#D9D9D9]/50">
              Create a new account and explore more pets posts!
            </p>
          </div>

          {/* Name */}
          <div className="flex flex-col gap-1 w-full mt-3">
            <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">
              Your Name
            </p>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              id="name"
              className="bg-primary-70 px-3 py-2 rounded-md border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full pr-10"
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-rose-500 text-start">
                {errors.name.message as string}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 w-full">
            <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">
              Email
            </p>
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              id="email"
              className="bg-primary-70 px-3 py-2 rounded-md border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full pr-10"
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
                  value: 8,
                  message: "Password must be at least 8 characters",
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
            <p className="text-primary-30 font-medium text-end mt-2 cursor-pointer hover:underline">
              Forgot Password?
            </p>
          </div>

          <Button variant="primary">
            {isSigningUp ? "Creating Account..." : "Sign Up"}
          </Button>

          <p className="max-w-[500px] text-sm text-[#364F53] dark:text-[#D9D9D9]/50 text-center">
            Already have account?{" "}
            <Link href={"/login"} className="font-semibold text-primary-30">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
