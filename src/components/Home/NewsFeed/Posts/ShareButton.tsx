import Image from "next/image";
import React from "react";
import { ICONS } from "../../../../../public";

const ShareButton = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm text-primary-10/80 bg-primary-60 px-4 py-3 rounded-xl w-full">
      <Image src={ICONS.share} width={20} height={20} alt="verified-icon" />
      Share
    </div>
  );
};

export default ShareButton;
