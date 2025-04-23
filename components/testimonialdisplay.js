import React from "react";

const Testimonialdisplay = ({ des, name }) => {
  return (
    <div className=" flex flex-col w-full px-4 md:px-0 md:w-[600px] gap-8 text-[18px] md:text-[20px]  ">
      <div className=" text-[#6A6A72]  font-helvetica text-center   ">
        {des}
      </div>
      <div className=" w-full flex items-end font-medium text-[#2A2A2D] justify-end font-helvetica ">
        {name}
      </div>
    </div>
  );
};

export default Testimonialdisplay;
