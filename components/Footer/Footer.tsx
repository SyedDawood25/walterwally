import React from "react";
import click from "../../assets/images/click.svg";
import download from "../../assets/images/download.svg";
import aspectRatio from "../../assets/images/aspectRatio.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col mt-20">
      <div className="text-[#7B9D71] text-[64px] text-center font-semibold">
        How to Generate a Wallpaper?
      </div>

      <div className="flex flex-col mt-14  gap-y-4 items-center">
        <div className=" flex flex-col gap-y-4 w-/2">
          <div className="flex w-full p-4  gap-x-24">
            <div>
              <Image src={click} alt="" />
            </div>
            <div className="text-[42px] font-light  text-[#7B9D71]">
              Choose your wallpaper styles from the options
            </div>
          </div>
          <div className="flex w-full p-4 gap-x-24">
            <div>
              <Image src={aspectRatio} alt="" />
            </div>
            <div className="text-[42px] font-light text-[#7B9D71]">
              Choose your preferred aspect ratio
            </div>
          </div>
          <div className="flex w-full p-4 gap-x-24">
            <div>
              <Image src={download} alt="" />
            </div>
            <div className="text-[42px] font-light text-[#7B9D71]">
              Preview the results and download
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <Button
          asChild
          className="bg-[#0A100D] hover:bg-[#A8E198] hover:text-[#0A100D] px-12 py-10 text-[32px] border-[#A8E198] border-[4px] text-[#A8E198] -xlrounded"
        >
          <Link href={"/register"}>Generate AI Wallpaper Now</Link>
        </Button>
      </div>
    </div>
  );
};
