import { BodyText } from "@/components/body/bodyText/BodyText";
import { BodyGrid } from "@/components/body/bodygrid/BodyGrid";
import { Footer } from "@/components/Footer/Footer";
import { Buttons } from "@/components/header/buttons/Buttons";
import { HeroImage } from "@/components/header/heroimage/HeroImage";
import { UpperHeader } from "@/components/header/upperheader/UpperHeader";
import React from "react";

const Home = () => {
  return (
    <main className="p-16 bg-[#090F0C] flex flex-col items-center w-full min-h-screen">
      <div className="max-w-[2000px]">
        <UpperHeader />
        <HeroImage />
        <Buttons />
        <BodyText />
        <BodyGrid />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
