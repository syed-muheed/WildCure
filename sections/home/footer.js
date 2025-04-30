import Padding from "@/components/padding";
import React from "react";
import src from "@/public/images/footer.png";
import Image from "next/image";

const Footer = () => {
  return (
    <Padding
      className={
        "pt-[4rem] pb-[2rem] min-h-[34rem] xl:min-h-[47rem] 2xl:min-h-[52rem] flex flex-col font-monserrat justify-between"
      }
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-[30%] 2xl:w-[35%]">
          <Image className=" w-full md:w-[13.2rem] object-cover xl:w-[22rem]" alt="footer" src={src} />
          <div className="   font-monserrat">
            <div className="text-[3.5rem] text-center md:text-left md:text-[2.3rem] xl:text-[3.8rem] leading-[4rem] font-bold xl:leading-[5rem] ">
              WILDCURE
            </div>
            <div className="text-[1rem] w-[18rem] md:w-[20rem] mx-auto xl:mx-0 md:pl-0 tracking-[2.7rem] md:tracking-[1.6rem] xl:tracking-[3.1rem] text-center md:text-left font-medium md:text-[1.1rem] xl:text-[1.3rem] text-[#2D6AE1] leading-none">
              PHARMA
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-[4rem] md:pt-0 md:flex-row w-[70%] 2xl:w-[65%] md:pl-[3rem] xl:pl-[8rem] 2xl:pl-0 gap-[3rem] xl:gap-[5.3rem] 2xl:gap-[8rem]">
          <div>
            <div className="font-semibold text-[#919196]">Navigation</div>
            <div className="text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] pt-[1rem] font-bold text-[#1F1F21] space-y-2">
              <div>Home</div>
              <div>About Us</div>
              <div>Products</div>
              <div>Manufacturing</div>
              <div>Quality</div>
              <div>Global Presence</div>
              <div>Contact Us</div>
            </div>
          </div>
          <div className="lg:flex gap-[3rem] pt-[4rem] md:pt-0 xl:gap-[5.3rem] 2xl:gap-[8rem]">
          <div>
            <div className="font-semibold text-[#919196]">Legal</div>
            <div className="space-y-1.5 pt-[1rem] font-semibold">
              <div className="min-w-[7.2rem]">Privacy Policy</div>
              <div>Terms of Use</div>
            </div>
          </div>
          <div className="pt-[4rem] md:pt-[2rem] lg:pt-0">
            <div className="font-semibold text-[#919196]">Info</div>
            <div className="w-[15.5rem] pt-[1rem]  font-semibold space-y-3">
              <div>6-26, plot no 78, road no 1, sai aishwarya layout, peerzadiguda, medchal-malkajgiri, Telangana 500039</div>
              <div>sai baba nagar, katedan, Hyderabad 500077</div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className=" text-[14px] md:text-[16px] flex pt-[4rem] md:pt-0 justify-between font-helvetica">
        <div>© 2024 Wildcure Pharma.</div>
        <div>All Rights Reserved.</div>
      </div>
    </Padding>
  );
};

export default Footer;
