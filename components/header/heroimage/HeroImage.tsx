import Image from "next/image";
import React from "react";
import HeroImg from "../../../assets/images/image01.png";

export const HeroImage = () => {
  return (
    <div className="mt-10 md:mt-20 flex flex-col items-center mx-4 sm:mx-16">
      <Image
        src={HeroImg}
        alt="Hero Image"
        className="rounded-xl md:rounded-3xl object-cover w-full h-[300px] md:h-[500px]"
      />
    </div>
  );
};
