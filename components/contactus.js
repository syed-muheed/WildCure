"use client"
import React from "react";
import Contactform from "./contactform";
import { Suspense } from "react";

const Contactus = () => {
  return (
    <div className=" pt-24 w-full flex flex-col lg:flex-row justify-between px-4 md:px-6 xl:px-12 ">
      <div className=" flex flex-col justify-start gap-16 1xl:justify-between 1xl:flex-row 1xl:gap-24 ">
        <div className=" font-monserrat text-[64px] font-bold text-[#CBCBCE] leading-[1]  ">
          Contact
        </div>
        <div className=" flex flex-col lg:w-[458px] gap-4 ">
          <div className=" font-monserrat text-[32px] font-bold text-[#1F1F21] leading-[1.4] w-full    ">
            Get in Touch with Wildcure Pharma
          </div>
          <div className=" font-helvetica  pb-8 lg:pb-0 lg:w-[420px] text-[18px] text-[#505053] leading-[1.7]    ">
            Thank you for your interest in Wildcure Pharma. We welcome your
            inquiries and are committed to providing you with prompt and
            professional assistance. Our team of experts is ready to answer your
            questions about our products, services, or partnership
            opportunities.
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading..</div>} >

      <Contactform />
      </Suspense>
    </div>

    
  );
};

export default Contactus;
