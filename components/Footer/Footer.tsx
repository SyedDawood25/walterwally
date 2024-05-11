import React from "react";
import click from "../../assets/images/click.svg";
import download from "../../assets/images/download.svg";
import aspectRatio from "../../assets/images/aspectRatio.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col mt-16 md:mt-28 mx-4 md:mx-16">
      <div className="text-[#7B9D71] text-[30px] md:text-[46px] lg:text-[52px] text-center font-semibold">
        How to Generate a Wallpaper?
      </div>

      <div className="flex flex-col justify-center mt-8 md:mt-14 items-center">
        <div className=" flex flex-col justify-center gap-y-2 md:gap-y-4">
          <div className="flex flex-col md:flex-row items-center w-full md:w-fit p-4 gap-x-16 gap-y-3">
            <div>
              <Image src={click} alt="" className="w-[30px] md:w-[50px]" />
            </div>
            <div className="text-[18px] md:text-[28px] text-center md:text-left xl:text-[34px] text-[#7B9D71] w-fit">
              Choose your wallpaper styles from the options
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full md:w-fit p-4 gap-x-16 gap-y-3">
            <div>
              <Image
                src={aspectRatio}
                alt=""
                className="w-[30px] md:w-[50px]"
              />
            </div>
            <div className="text-[18px] md:text-[28px] text-center md:text-left xl:text-[34px] text-[#7B9D71] w-fit">
              Choose your preferred aspect ratio
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center w-full md:w-fit p-4 gap-x-16 gap-y-3">
            <div>
              <Image src={download} alt="" className="w-[30px] md:w-[50px]" />
            </div>
            <div className="text-[18px] md:text-[28px] text-center md:text-left xl:text-[34px] text-[#7B9D71] w-fit">
              Preview the results and download
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button
          asChild
          className="bg-[#0A100D] hover:bg-[#A8E198] hover:text-[#0A100D] w-auto py-8 md:text-[24px] text-[16px] border-[#A8E198] border-[2px] text-[#A8E198] rounded-xl"
        >
          <Link href={"/register"}>Generate AI Wallpaper Now</Link>
        </Button>
      </div>
    </div>
  );
};
