import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Buttons = () => {
  return (
    <div className="flex justify-center items-center gap-32 mt-20">
      <Button
        asChild
        className="bg-[#0A100D] hover:bg-[#A8E198] hover:text-[#0A100D] px-36 py-10 rounded-xl  text-[32px] border-[#A8E198] border-[4px] text-[#A8E198]"
      >
        <Link href={"/register"}>Sign up</Link>
      </Button>
      <Button
        asChild
        className="bg-[#A8E198]  hover:text-[#A8E198] hover:bg-[#0A100D] px-36 py-10 rounded-xl  text-[32px] border-[#A8E198] border-[4px] text-[#0A100D]"
      >
        <Link href={"/login"}>Login</Link>
      </Button>
    </div>
  );
};
