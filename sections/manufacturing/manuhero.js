import Image from "next/image";
import React from "react";
import src1 from "@/public/images/manu1.png";
import src2 from "@/public/images/manu2.png";

const Manuhero = () => {
  return (
    <div className=" w-full flex flex-col gap-20 items-center justify-center pt-32 ">
      <div className=" text-figblue font-monserrat font-semibold text-[20px] md:text-[32px] lg:text-[40px] w-[95%] md:w-[600px] lg:w-[800px] text-center    ">
        Cutting-Edge Facilities Delivering Pharmaceutical Excellence Through
        Precision Manufacturing
      </div>

      <div className=" w-full flex flex-col md:flex-row  ">
        <div className=" w-full md:w-[50%] h-[300px] md:h-[400px] xl:h-[600px] ">
          <Image src={src1} alt="" className=" h-full w-full object-cover " />
        </div>
        <div className=" w-full md:w-[50%] h-[300px] md:h-[400px] xl:h-[600px] ">
          <Image src={src2} alt="" className=" h-full w-full object-cover " />
        </div>
      </div>
    </div>
  );
};

export default Manuhero;
