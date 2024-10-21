'use client'
import Button from "@/components/Reusable/Button";
import { useResetPasswordMutation } from "@/redux/features/Auth/authApi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from "sonner";
import { Suspense } from 'react';

type TResetPasswordData = {
  email: string;
  newPassword: string;
};

const ResetPasswordPage = () => {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TResetPasswordData>();

  const token = searchParams.get('token');
if (!token) {
  return <p>Error: Token is missing</p>;
}

  const handleResetPassword = async (data: TResetPasswordData) => {
    const resetPasswordData = {
      email: data.email,
      newPassword: data.newPassword,
    };
    console.log(resetPasswordData)

    try {
      const response = await resetPassword({ token, resetPasswordData }).unwrap();
      console.log(response);
      router.push("/login");
      toast.success("Password reset successfully.");
    } catch (err) {
      console.log(err);
      toast.error("Error resetting password.");
    }
  };


    return (
      <Suspense fallback={<p>Loading...</p>}>
  <div className="w-full">
        <form
          onSubmit={handleSubmit(handleResetPassword)}
          className="flex flex-col gap-4 w-full"
        >
          <div>
            <h1 className="font-bold text-[27px] dark:text-[#D9D9D9]/80 text-[#364F53]">
              <span className="text-primary-20">Reset</span> Password
            </h1>
            <p className="max-w-[500px] text-sm text-[#364F53] dark:text-[#D9D9D9]/50">
              Enter your registered valid email address to receive reset link.
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

          {/* New Password */}
          <div className="flex flex-col gap-1 w-full mt-3">
            <p className="text-body-text font-medium text-sm text-[#364F53] dark:text-[#D9D9D9]/70">
            New Password
            </p>
            <input
              {...register("newPassword", { required: "New Password is required" })}
              type="text"
              id="newPassword"
              className="bg-primary-70 px-3 py-2 rounded-md border focus:outline-none focus:border-primary-20 transition duration-300 focus:shadow flex-1 w-full "
              placeholder="Enter your new password"
            />
            {errors.newPassword && (
              <span className="text-rose-500 text-start">
                {errors.newPassword.message as string}
              </span>
            )}
          </div>

          

          <Button variant="primary">
            {isLoading ? "Loading..." : "Proceed"}
          </Button>

          <p className="max-w-[500px] text-sm text-[#364F53] dark:text-[#D9D9D9]/50 text-center">
            <Link href={"/login"} className="font-semibold text-primary-30">
                Back to login
            </Link>
          </p>
        </form>
      </div>
</Suspense>
    );
  };
  
  export default ResetPasswordPage;