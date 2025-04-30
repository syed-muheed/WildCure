import Padding from "@/components/padding";
import React from "react";
import Image from "next/image";
import src from "@/public/images/blur.png";

const Expanding = () => {
  return (
    <Padding className={"pt-[5rem] font-monserrat"}>
      <div
        style={{ backgroundImage: "url('/images/WorldMap.png')" }}
        className="h-screen z-0 text-center text-[1.2rem] lg:text-[2.6rem] font-bold text-[#084bce] flex items-center justify-center  bg-contain bg-no-repeat bg-center"
      >
        <div className="lg:w-[65rem]  relative z-[10] lg:leading-[3.3rem] ">
          <Image src={src} alt="blur" />
          <div className="absolute w-[20rem] lg:w-[52rem] left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 ">
            Expanding Global Footprint Delivering Pharmaceutical Excellence
            Across Continents
          </div>
        </div>
      </div>
    </Padding>
  );
};

export default Expanding;
