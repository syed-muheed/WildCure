import React from "react";
import Contactform from "./contactform";

const Contactus = () => {
  return (
    <div className=" pt-24 w-full flex justify-between px-12 ">
      <div className=" font-monserrat text-[64px] font-bold text-[#CBCBCE] leading-[1]  ">
        Contact
      </div>
      <div className=" flex flex-col w-[458px] gap-4 ">
        <div className=" font-monserrat text-[32px] font-bold text-[#1F1F21] leading-[1.4] w-full    ">
          Get in Touch with Wildcure Pharma
        </div>
        <div className=" font-helvetica w-[420px] text-[18px] text-[#505053] leading-[1.7]    ">
          Thank you for your interest in Wildcure Pharma. We welcome your
          inquiries and are committed to providing you with prompt and
          professional assistance. Our team of experts is ready to answer your
          questions about our products, services, or partnership opportunities.
        </div>
      </div>
      <Contactform />
    </div>
  );
};

export default Contactus;
