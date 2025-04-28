import Achivebox from "@/components/achivebox";
import achive1 from "@/public/images/achive1.png";
import achive2 from "@/public/images/achive2.png";
import achive3 from "@/public/images/achive3.png";
import achive4 from "@/public/images/achive4.png";
import React from "react";

const Achivements = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center py-28 px-6 gap-8 ">
      <div className=" text-[#1F1F21] font-monserrat font-bold text-[38px] text-center   ">
        Statistics & Achievements
      </div>

      <div className=" grid grid-cols-1  md:grid-cols-2 gap-y-6   xl:grid-cols-4 gap-x-6 ">
        <Achivebox
          img={achive1}
          number={"01"}
          head={"150+"}
          text={"Countries Served"}
        />
        <Achivebox
          img={achive2}
          number={"02"}
          head={"100%"}
          text={"Quality Compliance"}
        />
        <Achivebox
          img={achive3}
          number={"03"}
          head={"24/7"}
          text={"Production Capability"}
        />
        <Achivebox
          img={achive4}
          number={"04"}
          head={"100+"}
          text={"Product Varieties"}
        />
      </div>
    </div>
  );
};

export default Achivements;
