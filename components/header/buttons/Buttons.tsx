import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Buttons = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-32 md:mt-20 mt-10 md:mx-16 mx-8">
      <Button
        asChild
        className="bg-[#0A100D] hover:bg-[#A8E198] hover:text-[#0A100D] w-64 py-8 rounded-xl md:text-[24px] text-[18px] border-[#A8E198] border-[2px] text-[#A8E198]"
      >
        <Link href={"/register"}>Sign up</Link>
      </Button>
      <Button
        asChild
        className="bg-[#A8E198]  hover:text-[#A8E198] hover:bg-[#0A100D] w-64 py-8 rounded-xl  md:text-[24px] text-[18px] border-[#A8E198] border-[2px] text-[#0A100D]"
      >
        <Link href={"/login"}>Login</Link>
      </Button>
    </div>
  );
};
