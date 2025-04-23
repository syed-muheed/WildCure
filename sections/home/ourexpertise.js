import Image from "next/image";
import React from "react";
import src from "@/public/images/dotmap.png";

const Ourexpertise = () => {
  return (
    <div className=" w-full flex flex-col gap-10 md:gap-0 md:flex-row items-center md:justify-around ">
      <div className=" flex flex-col items-center md:items-start gap-10 md:scale-95 xl:scale-100 ">
        <div className=" text-[#1F1F21] text-[40px] font-monserrat font-bold leading-[1]  ">
          Our Expertise
        </div>
        <div className=" text-[#505053] text-[16px] font-helvetica  leading-[1.5] w-[90%] sm:w-[420px]  ">
          With specialized knowledge in Active Pharmaceutical Ingredients
          (APIs), Wildcure Pharma combines scientific excellence with
          manufacturing precision to deliver products that meet the highest
          quality standards.
        </div>
        <div className=" text-[#505053] text-[16px] font-helvetica  leading-[1.5] w-[90%] sm:w-[420px]  ">
          Our team of experts ensures consistent results with every batch.
        </div>
      </div>

      <div className=" w-[90%] sm:w-[500px] xl:w-[700px] ">
        <Image alt="" className=" w-full object-cover " src={src} />
      </div>
    </div>
  );
};

export default Ourexpertise;
