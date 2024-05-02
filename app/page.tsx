import { BodyText } from "@/components/body/bodyText/BodyText";
import { BodyGrid } from "@/components/body/bodygrid/BodyGrid";
import { Footer } from "@/components/Footer/Footer";
import { Buttons } from "@/components/header/buttons/Buttons";
import { HeroImage } from "@/components/header/heroimage/HeroImage";
import { UpperHeader } from "@/components/header/upperheader/UpperHeader";
import React from "react";

const Home = () => {
  return (
    <main className="px-24 py-24 bg-[#0A100D] flex flex-col">
      <UpperHeader />
      <HeroImage />
      <Buttons />
      <BodyText />
      <BodyGrid />
      <Footer />
    </main>
  );
};

export default Home;
