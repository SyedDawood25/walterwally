import Image from "next/image";
import React from "react";
import Background from "../../assets/images/background.svg";
import Logo from "@/assets/images/logo.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex justify-center items-center h-screen bg-[#090F0C]  sm:bg-[#090F0C]">
      <div className="flex flex-col justify-center items-center sm:w-1/2">
        <div className="bg-[#090F0C] hidden sm:flex sm:absolute">
          <Image
            src={Background}
            alt="Background"
            className=" sm:h-screen sm:object-cover"
          />
          <div className=""></div>
        </div>

        <div className="hidden sm:flex flex-col justify-evenly my-2 sm:my-16  gap-y-8 sm:h-full sm:relative p-20">
          <div className="w-[150px] sm:w-[300px]">
            <Image src={Logo} alt="Logo" />
          </div>

          <div className="hidden sm:flex sm:flex-col text-white">
            <h3 className="text-6xl md:text-4xl font-semibold">Unleash your</h3>
            <h2 className="text-8xl md:text-6xl font-semibold">Imagination.</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sm:w-1/2 bg-[#090F0C] gap-y-[80px]">
        <div className="sm:hidden w-[150px] sm:w-[300px]">
          <Image src={Logo} alt="Logo" />
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
