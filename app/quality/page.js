import Textline from "@/components/textline";
import Achivements from "@/sections/home/achivements";
import Commitment from "@/sections/home/commitment";
import Discover from "@/sections/home/discover";
import Certification from "@/sections/quality/certification";
import Qualityassurance from "@/sections/quality/qualityassurance";
import Qualityhero from "@/sections/quality/qualityhero";
import React from "react";

const Page = () => {
  return (
    <div className=" w-full ">
      <Qualityhero />
      <Textline />
      <Qualityassurance />
      <Certification />
      <Commitment />
      <Achivements />
      <Discover />
    </div>
  );
};

export default Page;
