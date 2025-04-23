import Testimonialdisplay from "@/components/testimonialdisplay";
import React from "react";

const Testimonials = () => {
  return (
    <div className=" flex flex-col items-center justify-center w-full py-36 gap-12 md:gap-20 xl:gap-12 ">
      <div className=" text-[#1F1F21] font-monserrat font-bold text-[38px]   ">
        Client Testimonials
      </div>
      <div className=" flex flex-col xl:flex-row w-full items-center gap-16 xl:gap-0 xl:items-start justify-around  ">
        <Testimonialdisplay
          name={"— Pharmaceutical Manufacturing Client"}
          des={
            "Wildcure Pharma has been an exceptional partner, delivering high-quality APIs consistently and on time. Their commitment to excellence has helped us maintain our own quality standards."
          }
        />
        <Testimonialdisplay
          name={"— International Healthcare Company"}
          des={
            "The team at Wildcure understands our specific requirements and consistently delivers products that meet our exacting specifications."
          }
        />
      </div>
    </div>
  );
};

export default Testimonials;
