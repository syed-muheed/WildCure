"use client";
import Wcp from "@/public/icons/wcp";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(window.scrollY, "scroll");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={` fixed px-6 py-4 top-0 left-0 w-full flex items-center justify-between z-[1000] ${
        isScrolled && "bg-black/10 backdrop-blur-lg"
      }  transition-all duration-150 `}
    >
      <div className=" bg-black/30 px-[22px] py-[10px] gap-8 flex items-center rounded-full  ">
        <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
          Home
        </div>
        <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
          About
        </div>
        <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
          More
        </div>
      </div>

      <div className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[107px] ">
        <Wcp />
      </div>

      <div className=" px-[22px] py-[10px] bg-white/20 backdrop-blur-sm border-white border-[1px] rounded-full text-[16px] font-helvetica text-white   ">
        Contact Us
      </div>
    </div>
  );
};

export default Navbar;
