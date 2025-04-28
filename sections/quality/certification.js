import Image from "next/image";
import React from "react";
import central from "@/public/images/central.png";
import dca from "@/public/images/dca.png";

const Certification = () => {
  return (
    <div className=" w-full px-12 py-44 flex flex-col gap-16  ">
      <div className=" text-figblue font-monserrat font-bold text-[48px] md:text-[64px] w-full flex justify-center  ">
        Certification
      </div>
      <div className=" w-full flex-col items-center gap-12 lg:gap-0 lg:flex-row flex justify-between   ">
        <div className=" flex flex-col md:flex-row gap-12 xl:gap-0 xl:w-[60%] justify-between relative top-6 ">
          <div className=" text-[70px]  font-monserrat text-[#CBCBCE] font-bold ">
            01
          </div>

          <div className=" flex flex-col gap-4 lg:w-[500px] ">
            <div className=" flex-col flex gap-2  ">
              <div className=" text-[24px] md:text-[32px] font-monserrat font-bold text-[#1F1F21] leading-[1.2]">
                Central Bureau of Narcotics
              </div>
              <div className=" text-[20px] md:text-[24px] font-monserrat font-medium text-[#67676A] leading-[1]">
                Government of India
              </div>
            </div>
            <div className="text-[18px] font-helvatica  text-[#505053] w-[300px]">
              We have fully authorised from CBN (Central bureau of narcotics)
              Gwalior, Madhya Pradesh
            </div>
          </div>
        </div>

        <div className="h-[350px] relative right-0 md:right-6 ">
          <Image
            alt=""
            src={central}
            className=" h-full w-full object-cover "
          />
        </div>
      </div>
      <div className="w-full flex-col items-center gap-12 lg:gap-0 lg:flex-row flex justify-between   ">
        <div className=" flex flex-col md:flex-row gap-12 xl:gap-0 xl:w-[60%] justify-between relative top-6 ">
          <div className=" text-[70px]  font-monserrat text-[#CBCBCE] font-bold ">
            02
          </div>

          <div className=" flex flex-col gap-4 lg:w-[500px] ">
            <div className=" flex-col flex gap-2  ">
              <div className=" text-[24px] md:text-[32px] font-monserrat font-bold text-[#1F1F21] leading-[1.2]">
                Telangana Drugs Control Administration
              </div>
              <div className=" text-[20px] md:text-[24px] font-monserrat font-medium text-[#67676A] leading-[1]">
                Government of Telangana
              </div>
            </div>
            <div className="text-[18px] font-helvatica  text-[#505053] w-[300px]">
              We possess official Chemist licenses 20B, 21B, and 20G (Schedule
              X) issued by the Government of Telangana.
            </div>
          </div>
        </div>

        <div className=" w-full md:w-fit md:h-[150px] relative top-10 ">
          <Image alt="" src={dca} className=" h-full w-full object-cover " />
        </div>
      </div>
    </div>
  );
};

export default Certification;
