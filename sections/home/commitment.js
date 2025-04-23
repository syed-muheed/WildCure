import Image from "next/image";
import React from "react";
import img from "@/public/images/commit.png";
import Crazymarquee from "@/components/crazymarquee";

const Commitment = () => {
  return (
    <div className=" w-full flex flex-col lg:flex-row lg:h-[550px]  ">
      <div className=" w-full lg:w-[50%] h-[500px] lg:h-full bg-[#EDF0F5] overflow-hidden relative ">
        <div className=" flex flex-col pt-6 pl-6 gap-6 ">
          <div className=" font-monserrat font-bold text-[32px] md:text-[40px] text-figblue w-full md:w-[500px]  leading-[1.2]   ">
            Our Commitment to Sustainability
          </div>
          <div className=" text-[18px] font-helvetica text-[#3A3A3E] leading-[1.4] w-full md:w-[500px]    ">
            At Wildcure Pharma, we recognize our responsibility toward
            environmental stewardship. We implement sustainable practices
            throughout our operations, from energy-efficient manufacturing
            processes to waste reduction initiatives and responsible sourcing of
            raw materials.
          </div>
        </div>

        <div className=" absolute bottom-10 left-0 w-full ">
          <Crazymarquee />
        </div>
      </div>
      <div className=" w-full lg:w-[50%] h-[500px] lg:h-full  ">
        <Image className=" h-full w-full object-cover " alt="" src={img} />
      </div>
    </div>
  );
};

export default Commitment;
