import Image from "next/image";
import React from "react";

const Achivebox = ({ number, img, head, text }) => {
  return (
    <div className=" h-[320px] w-[300px] bg-[#EDF0F5] p-2 flex flex-col items-center  justify-center ">
      <div className=" font-monserrat text-[14px]   font-semibold w-full flex justify-start  ">
        {number}
      </div>
      <div className="  flex items-center justify-center text-[60px] h-[40%] text-figblue font-monserrat  font-medium ">
        {head}
      </div>

      <Image alt="" src={img} className=" h-[30%] " />

      <div className=" font-monserrat text-[#A8B2C7] text-[24px]  font-semibold h-[20%] flex w-full items-end justify-start ">
        {text}
      </div>
    </div>
  );
};

export default Achivebox;
