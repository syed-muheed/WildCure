import Image from "next/image";
import React from "react";
import src from "@/public/images/bluebg.png";
const Discover = () => {
  return (
    <div className=" w-full h-screen relative ">
      <Image alt="" src={src} className=" h-full w-full object-cover " />
      <div className=" absolute top-0 left-0 h-full w-full z-[1] flex flex-col gap-6 items-center justify-center  ">
        <div className=" text-[26px] px-4 lg:px-0 lg:text-[40px] font-bold text-white font-monserrat text-center w-full lg:w-[1000px]  ">
          Discover how Wildcure Pharma can support your pharmaceutical needs.
        </div>
        <div className=" w-fit rounded-full px-[24px] py-[14px] leading-[1] bg-[#fff] text-[#084BCE] font-helvetica  cursor-pointer hover:scale-105 duration-100 font-medium    ">
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Discover;
