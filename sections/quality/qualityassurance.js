import Qualitybox from "@/components/qualitybox";
import Quality1 from "@/public/icons/quality1";
import Quality2 from "@/public/icons/quality2";
import Quality3 from "@/public/icons/quality3";
import Quality4 from "@/public/icons/quality4";
import Quality5 from "@/public/icons/quality5";
import React from "react";

const Qualityassurance = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-center pt-24 md:py-24 gap-2 ">
      <div className=" font-bold font-monserrat text-[32px] md:text-[48px] text-[#1D1D1E] text-center  ">
        Quality Assurance
      </div>
      <div className="  font-helvetica text-[16px] md:text-[18px] text-[#3A3A3E] pb-16 text-center  ">
        Every product undergoes comprehensive testing
      </div>

      <div className=" w-full items-center justify-center flex flex-wrap  gap-x-6 gap-y-6 ">
        <Qualitybox
          number={"01"}
          icon={<Quality1 />}
          text={"Raw material verification"}
        />
        <Qualitybox
          number={"02"}
          icon={<Quality2 />}
          text={"In-process controls"}
        />
        <Qualitybox
          number={"03"}
          icon={<Quality3 />}
          text={"Finished product analysis"}
        />
        <Qualitybox
          number={"04"}
          icon={<Quality4 />}
          text={"Stability studies"}
        />
        <Qualitybox
          number={"05"}
          icon={<Quality5 />}
          text={"Comprehensive documentation"}
        />
      </div>
    </div>
  );
};

export default Qualityassurance;
