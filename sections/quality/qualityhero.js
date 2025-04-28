import React from "react";
import img from "@/public/images/qualityhero.png";
import Image from "next/image";

const Qualityhero = () => {
  return (
    <div className=" bg-white w-full flex flex-col gap-20 ">
      <div className=" flex flex-col px-6 md:px-12 pt-28 md:pt-32 gap-6  ">
        <div className=" font-monserrat text-[28px] md:text-[42px] lg:text-[64px] font-bold text-[#1D1D1E] w-full md:w-[400px] lg:w-[600px] leading-[1.28] text-center md:text-left   ">
          Our Commitment To Quality{" "}
        </div>
        <div className=" font-helvetica text-[15px] md:text-[18px] text-[#3A3A3E] w-full md:w-[400px] lg:w-[500px] leading-[1.8] text-center md:text-left   ">
          At Wildcure Pharma, quality is the cornerstone of our operations. We
          implement rigorous quality management systems throughout our
          manufacturing processes.{" "}
        </div>
      </div>

      <div className=" w-full h-[400px] md:h-[500px] xl:h-[600px] ">
        <Image alt="" src={img} className=" h-full w-full object-cover  " />
      </div>
    </div>
  );
};

export default Qualityhero;
