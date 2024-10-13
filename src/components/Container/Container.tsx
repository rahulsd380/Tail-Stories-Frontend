import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1366px] mx-auto px-4 md:px-5 2xl:px-0">
      {children}
    </div>
  );
};

export default Container;
