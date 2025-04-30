import React from "react";

const Qualitybox2 = ({ number, icon, text }) => {
  return (
    <div className=" h-[240px] w-[85%] md:w-[300px] p-4 bg-[#EDF0F5] flex flex-col justify-between ">
      <div>
        <div className=" font-monserrat text-[14px] pb-5  leading-[1]  font-semibold w-full flex justify-start  ">
          {number}
        </div>
        <div className=" w-full flex justify-center  ">{icon}</div>
      </div>
      <div className=" leading-[1.2]  text-figblue font-monserrat font-semibold text-[24px] pt-5   ">
        {text}
      </div>
    </div>
  );
};

export default Qualitybox2;
