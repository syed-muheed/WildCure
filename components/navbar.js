"use client";
import Cross from "@/public/icons/cross.";
import Downarrow from "@/public/icons/downarrow";
import Wcp from "@/public/icons/wcp";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [click, setClick] = useState(false);
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
    <>
      <div
        className={` fixed px-6 py-4 top-0 left-0 w-full flex items-center justify-between z-[1000] `}
      >
          <div
        className={`
          absolute inset-0
          bg-black/10 backdrop-blur-lg
          transition-opacity duration-150
          ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />
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
          <Link href={"/aboutus"}>
          <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
            About
          </div>
          </Link>
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
              <div className=" backdrop-blur-lg  w-full bg-black/30 px-[16px] py-[10px] gap-3 hidden md:flex flex-col rounded-2xl transition-all ">
                <Link href={"/services"}>
                  <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                    Products & Services
                  </div>
                </Link>
                <Link href={"/manufacturing"}>
                  <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                    Manufacturing
                  </div>
                </Link>
                <Link href={"/quality"}>
                  <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                    Quality
                  </div>
                </Link>
                <Link href={"/global"}>
                <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                  Global Presence
                </div>
                </Link>
                <Link href={"/privacypolicy"}>
                <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                  Privacy Policy
                </div>
                </Link>
                <Link href={"/T&C"}>
                <div className=" cursor-pointer text-white text-[14px] font-normal font-helvetica  ">
                  Terms of Use
                </div>
                </Link>
              </div>
            </div>
          )}
        </div>
        <Link href={"/"}>
          <div className=" relative md:absolute z-[12] md:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 w-[50px] ">
            <Wcp />
          </div>
        </Link>

        <Link href={"/contactus"}>
          <div
            className={` px-[24px] py-[14px] ${
              pathname == "/quality" ||
              pathname == "/manufacturing" ||
              pathname == "/contactus" ||
          pathname == "/global" ||
          pathname == "/privacypolicy"||
          pathname == "/T&C"
                ? "bg-[#084BCE10]  border-[#084BCE40] text-[#084BCE]"
                : "bg-white/20 backdrop-blur-sm border-white text-white"
            } hidden md:block relative z-[12]   border-[1px] rounded-full text-[16px] font-helvetica font-medium leading-[1]   `}
          >
            Contact Us
          </div>
        </Link>

        <div
          className=" flex  relative z-[12] md:hidden flex-col items-end gap-2 cursor-pointer "
          onClick={() => setClick(!click)}
        >
          {click ? (
            <div className=" scale-150 ">
              <Cross />
            </div>
          ) : (
            <>
              <div
                className={` w-[30px] min-h-[3px] ${
                  pathname == "/quality" ||
                  pathname == "/manufacturing" ||
                  pathname == "/contactus" ||
          pathname == "/global"||
          pathname == "/privacypolicy"||
          pathname == "/T&C"
                    ? " bg-[#084BCE] "
                    : "bg-white"
                } rounded-full `}
              ></div>
              <div
                className={` w-[40px] min-h-[3px] ${
                  pathname == "/quality" ||
                  pathname == "/manufacturing" ||
                  pathname == "/contactus" ||
          pathname == "/global"||
          pathname == "/privacypolicy"||
          pathname == "/T&C"
                    ? " bg-[#084BCE] "
                    : "bg-white"
                } rounded-full `}
              ></div>
              <div
                className={` w-[30px] min-h-[3px] ${
                  pathname == "/quality" ||
                  pathname == "/manufacturing" ||
                  pathname == "/contactus" ||
          pathname == "/global"||
          pathname == "/privacypolicy"||
          pathname == "/T&C"
                    ? " bg-[#084BCE] "
                    : "bg-white"
                } rounded-full `}
              ></div>
            </>
          )}
        </div>
      </div>
      {click && (
        <div
          className=" fixed flex md:hidden top-0 left-0 bg-black/50 backdrop-blur-sm h-full w-full z-[100]  flex-col gap-4 items-center justify-center "
          onClick={() => {
            setClick(false);
          }}
        >
          <div className="  w-full px-[16px] py-[10px] gap-3 flex flex-col items-center justify-center rounded-2xl transition-all  ">
            <Link href={"/"}>
              <div className=" cursor-pointer text-white text-[24px] font-medium font-helvetica  ">
                Home
              </div>
            </Link>
            <Link href={"/aboutus"}>
              <div className=" cursor-pointer text-white text-[24px] font-medium font-helvetica  ">
                About Us
              </div>
            </Link>
            <Link href={"/services"}>
              <div className=" cursor-pointer text-white text-[24px] font-medium font-helvetica  ">
                Products & Services
              </div>
            </Link>
            <Link href={"/manufacturing"}>
              <div className=" cursor-pointer text-white text-[24px] font-medium font-helvetica  ">
                Manufacturing
              </div>
            </Link>
            <Link href={"/quality"}>
              <div className=" cursor-pointer text-white text-[24px] font-medium font-helvetica  ">
                Quality
              </div>
            </Link>
            <Link href={"/global"}>
            <div className=" cursor-pointer text-white text-[24px] font-medium font-helvetica  ">
              Global Presence
            </div>
            </Link>
            <Link href={"/contactus"}>
              <div className=" cursor-pointer text-white text-[24px] font-medium font-helvetica  ">
                Contact Us
              </div>
            </Link>
            <Link href={"/privacypolicy"}>
                <div className=" cursor-pointer text-white text-[24px] font-normal font-helvetica  ">
                  Privacy Policy
                </div>
                </Link>
                <Link href={"/T&C"}>
                <div className=" cursor-pointer text-white text-[24px] font-normal font-helvetica  ">
                  Terms of Use
                </div>
                </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
