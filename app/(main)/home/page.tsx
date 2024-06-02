"use client";

import { Button } from "@/components/ui/button";
import { replicate } from "@/lib/ReplicateAPI";
import { useEffect, useState } from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoPhoneLandscapeOutline } from "react-icons/io5";

const Home = () => {

  const input = {
    top_p: 1,
    prompt:
      "Can you write a poem about open source machine learning? Let's make it in the style of E. E. Cummings.",
    temperature: 0.5,
    system_prompt:
      "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
    max_new_tokens: 500,
  };

  useEffect(() => {
    replicate
      .run("meta/llama-2-70b-chat", { input })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="flex flex-col gap-y-4">
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
