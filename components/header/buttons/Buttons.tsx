import { Button } from "@/components/ui/button";
import React from "react";

export const Buttons = () => {
  return (
    <div className="flex justify-center items-center gap-32 mt-20">
      <Button
        className="bg-[#0A100D]  px-36 py-10 rounded-sm  text-[32px] border-[#A8E198] border-[4px] text-[#A8E198]"
      >
        Sign up
      </Button>
      <Button
        className="bg-[#A8E198] px-36 py-10 rounded-sm  text-[32px] border-[#A8E198] border-[4px] text-[#0A100D]"
      >
        Login
      </Button>
    </div>
  );
};
