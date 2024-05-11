import Image from "next/image";
import React from "react";
import Image01 from "../../../assets/images/image02.png";
import Image02 from "../../../assets/images/image03.png";
import Image03 from "../../../assets/images/image04.png";
import Image04 from "../../../assets/images/image05.png";

export const BodyGrid = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-rows-2  mt-14 gap-y-4 md:gap-6 mx-4 md:mx-16">
      <div className="flex justify-center items-center">
        <Image
          src={Image01}
          alt="Image01"
          className="rounded-xl md:rounded-3xl"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Image02}
          alt="Image02"
          className="rounded-xl md:rounded-3xl"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Image03}
          alt="Image03"
          className="rounded-xl md:rounded-3xl"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={Image04}
          alt="Image04 "
          className="rounded-xl md:rounded-3xl"
        />
      </div>
    </div>
  );
};
