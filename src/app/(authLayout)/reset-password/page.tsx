
import ResetPasswordPage from "./_components/ResetPasswordPage/ResetPasswordPage";
import { Suspense } from 'react';

const ResetPassword = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
    <div className="w-full">
        <ResetPasswordPage/>
    </div>  
    </Suspense>
  );
};

export default ResetPassword;