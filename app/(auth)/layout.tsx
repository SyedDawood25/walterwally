import Image from "next/image";
import React from "react";
import Background from "../../assets/images/background.svg";
import Logo from "@/assets/images/logo.png";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex flex-col lg:flex-row h-screen bg-[#0A100D]">
      <div className="flex flex-col lg:w-1/2">
        <div className="hidden lg:flex absolute">
          <Image
            src={Background}
            alt="Background"
            className="h-screen object-cover"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start lg:justify-evenly lg:my-16 gap-y-8 h-full relative p-20">
          <div className="w-[150px] lg:w-[400px]">
            <Image src={Logo} alt="Logo" />
          </div>

          <div className="hidden lg:flex flex-col text-white">
            <h3 className="text-6xl font-semibold">Unleash your</h3>
            <h2 className="text-8xl font-semibold">Imagination.</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center h-full items-center mb-8 lg:w-1/2 bg-[#090F0C]">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
