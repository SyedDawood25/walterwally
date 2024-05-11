import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.png";

export const UpperHeader = () => {
  return (
    <div className="flex justify-center md:justify-between items-center mx-16">
      <div className="flex md:w-1/2">
        <Image src={Logo} alt="logo" className="w-[150px]" />
      </div>
      <div className="hidden md:flex text-[#7B9D71] text-[28px] xl:text-[32px] leading-snug w-1/2 justify-end">
        <h2 className="flex w-fit">
          Your personal Wallpaper Generator, bringing creativity and
          customization to your Digital Space!
        </h2>
      </div>
    </div>
  );
};
