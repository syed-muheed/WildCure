import Qualitybox2 from "@/components/qualitybox2";
import Techno1 from "@/public/icons/techno1";
import Techno2 from "@/public/icons/techno2";
import Techno3 from "@/public/icons/techno3";
import Techno4 from "@/public/icons/techno4";
import React from "react";

const Technologia = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center py-24 gap-2 ">
      <div className=" font-bold font-monserrat text-[32px] md:text-[48px] text-[#1D1D1E] text-center  ">
        Our Technologies
      </div>
      <div className="  font-helvetica text-[16px] md:text-[18px] text-[#3A3A3E] pb-16 text-center  ">
        We employ cutting-edge technology for consistent quality
      </div>

      <div className=" w-full items-center justify-center flex flex-wrap  gap-x-6 gap-y-6 ">
        <Qualitybox2
          number={"01"}
          icon={<Techno1 />}
          text={"Automated production systems"}
        />
        <Qualitybox2
          number={"02"}
          icon={<Techno2 />}
          text={"Advanced analytical instruments"}
        />
        <Qualitybox2
          number={"03"}
          icon={<Techno3 />}
          text={"Digital quality management"}
        />
        <Qualitybox2
          number={"04"}
          icon={<Techno4 />}
          text={"Continuous monitoring systems"}
        />
      </div>
    </div>
  );
};

export default Technologia;
