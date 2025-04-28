"use client";
import Downarrow from "@/public/icons/downarrow";
import Wcp from "@/public/icons/wcp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
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
      <div
        className=" bg-black/30 px-[22px] py-[10px] gap-8 hidden md:flex items-center rounded-full relative  "
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <Link href={"/"}>
          <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
            Home
          </div>
        </Link>
        <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
          About
        </div>
        <div
          className=" cursor-pointer text-white text-[14px] font-normal font-helvetica flex items-center gap-2  "
          onMouseEnter={() => {
            setHovered(true);
          }}
        >
          <div>More</div>
          <Downarrow color={"white"} />
        </div>

        {hovered && (
          <div
            className=" absolute top-[38px]  w-full left-0 pt-2   "
            onMouseLeave={() => {
              setHovered(false);
            }}
            onMouseEnter={() => {
              setHovered(true);
            }}
            onClick={() => {
              setHovered(false);
            }}
          >
            <div className="  w-full bg-black/30 px-[16px] py-[10px] gap-3 hidden md:flex flex-col rounded-2xl transition-all backdrop-blur-sm ">
              <Link href={"/services"}>
                <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                  Products & Services
                </div>
              </Link>
              <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                Manufacturing
              </div>
              <Link href={"/quality"}>
                <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                  Quality
                </div>
              </Link>
              <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                Global Presence
              </div>
            </div>
          </div>
        )}
      </div>

      <div className=" md:absolute md:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 w-[50px] ">
        <Wcp />
      </div>

      <div
        className={` px-[24px] py-[14px] ${
          pathname == "/quality"
            ? "bg-[#084BCE10]  border-[#084BCE40] text-[#084BCE]"
            : "bg-white/20 backdrop-blur-sm border-white text-white"
        } hidden md:block   border-[1px] rounded-full text-[16px] font-helvetica font-medium leading-[1]   `}
      >
        Contact Us
      </div>
    </div>
  );
};

export default Navbar;
