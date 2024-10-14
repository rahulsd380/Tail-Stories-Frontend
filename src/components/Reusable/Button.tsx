import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "bordered";
  classNames?: string;
  onClick?: () => Promise<void>
}

const Button: FC<ButtonProps> = ({ children, variant, classNames, onClick }) => {
  const baseClasses = "rounded-md transition-all duration-300";

  const variantClasses = {
    primary: "px-4 py-3 bg-primary-gradient text-white hover:opacity-90",
    bordered: "px-4 py-[10px] border-2 border-primary-20 bg-white text-primary-20 hover:bg-primary-20 hover:text-white",
  };

  const finalClasses = twMerge(
    baseClasses,
    variantClasses[variant],
    classNames
  );

  return (
    <button onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
};

export default Button;
