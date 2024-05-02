import Image from "next/image";
import React from "react";
import Background from "../../assets/images/background.svg";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="flex h-screen">
      <div className="flex flex-col w-1/2">
        <div className="flex absolute">
          <Image
            src={Background}
            alt="Background"
            className="h-screen object-cover"
          />
        </div>

        <div className="flex flex-col justify-evenly my-16 h-full relative p-20">
          <h1 className="flex text-7xl leading-tight font-semibold text-[#A8E198]">
            Walter
            <br />
            Wally
          </h1>

          <div className="flex flex-col text-white">
            <h3 className="text-6xl font-bold">Unleash your</h3>
            <h2 className="text-8xl font-bold">Imagination.</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-1/2 bg-[#090F0C]">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
