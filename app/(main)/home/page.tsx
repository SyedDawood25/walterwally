import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoPhoneLandscapeOutline } from "react-icons/io5";

const Home = () => {
  return (
    <main className="flex flex-col p-20 bg-[#0A100D] h-full gap-y-12">
      <div className="flex justify-between items-center">
        <div className="w-[150px]">
          <Image src={Logo} alt="Logo" />
        </div>
        <div>
          <MdOutlineAccountCircle className="text-[#A8E198]" size={70} />
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <h1 className="text-xl font-bold text-[#A8E198]">Orientation</h1>
        <div className="flex gap-x-10">
          <Button
            size={"lg"}
            className="hover:bg-[#A8E198] hover:text-[#0A100D] px-10 py-6 rounded-sm text-lg bg-transparent border border-[#A8E198] text-[#A8E198]"
          >
            Portrait{" "}
            <span className="ml-4">
              <IoPhonePortraitOutline size={20} />
            </span>
          </Button>
          <Button
            size={"lg"}
            className="hover:bg-[#A8E198] hover:text-[#0A100D] px-10 py-6 rounded-sm text-lg bg-transparent border border-[#A8E198] text-[#A8E198]"
          >
            Landscape{" "}
            <span className="ml-4">
              <IoPhoneLandscapeOutline size={20} />
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        <h1 className="text-xl font-bold text-[#A8E198]">Categories</h1>
        <div className="grid grid-cols-5 grid-rows-4 gap-3 text-center font-bold text-lg">
          <div className="col-span-3 border border-[#A8E198] py-8 text-[#A8E198]">
            Geometric
          </div>
          <div className="border border-[#A8E198] py-8 text-[#A8E198]">
            Fluid
          </div>
          <div className="border border-[#A8E198] py-8 text-[#A8E198]">
            Textured
          </div>
          <div className="col-span-3 border border-[#A8E198] py-8 text-[#A8E198]">
            Colourful
          </div>
          <div className="col-span-2 border border-[#A8E198] py-8 text-[#A8E198]">
            Minimalist
          </div>
          <div className="border border-[#A8E198] py-8 text-[#A8E198]">
            Patterns
          </div>
          <div className="col-span-4 border border-[#A8E198] py-8 text-[#A8E198]">
            Abstract
          </div>
          <div className="border border-[#A8E198] py-8 text-[#A8E198]">
            Retro
          </div>
          <div className="col-span-2 border border-[#A8E198] py-8 text-[#A8E198]">
            Nature
          </div>
          <div className="col-span-2 border border-[#A8E198] py-8 text-[#A8E198]">
            Sci-Fi
          </div>
        </div>
        <div className="flex justify-center items-center mt-12">
          <Button
            size={"lg"}
            className="hover:bg-[#A8E198] hover:text-[#0A100D] px-20 py-6 rounded-sm text-lg bg-transparent border border-[#A8E198] text-[#A8E198]"
          >
            Generate
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
