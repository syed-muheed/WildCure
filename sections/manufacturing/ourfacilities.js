import Image from "next/image";
import React from "react";
import img from "@/public/images/commit.png";
import Crazymarquee from "@/components/crazymarquee";

const Ourfacilities = () => {
  const arr = [
    "cGMP compliant production areas",
    "Controlled environment systems",
    "Advanced analytical laboratory",
    "Environmentally responsible waste management",
    "Energy-efficient operations",
  ];
  return (
    <div className=" w-full flex flex-col lg:flex-row-reverse lg:h-[600px]  ">
      <div className=" w-full lg:w-[50%] h-[500px] lg:h-full bg-[#EDF0F5] overflow-hidden relative ">
        <div className=" flex flex-col pt-12 pl-12 gap-6 ">
          <div className=" font-monserrat font-bold text-[32px] md:text-[40px] text-figblue w-full md:w-[500px]  leading-[1.2]   ">
            Our Facilities
          </div>
          <div className=" text-[18px] font-helvetica text-[#3A3A3E] leading-[1.7] w-full md:w-[500px]    ">
            Our state-of-the-art manufacturing facility in Hyderabad is designed
            to meet international quality standards.
          </div>
          <div className=" flex flex-col gap-2 ">
            {arr.map((item) => (
              <div key={item} className=" flex items-center gap-2 ">
                <div className=" h-[4px] w-[4px] bg-[#2D2D32]  "></div>
                <div className=" text-[#2D2D32] text-[18px] font-helvetica  ">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className=" absolute bottom-4 md:bottom-14 left-0 w-full ">
          <Crazymarquee />
        </div>
      </div>
      <div className=" w-full lg:w-[50%] h-[500px] lg:h-full  ">
        <Image className=" h-full w-full object-cover " alt="" src={img} />
      </div>
    </div>
  );
};

export default Ourfacilities;
