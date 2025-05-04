import Loadingwrap from "@/components/loadingwrap";
import Textline from "@/components/textline";
import Achivements from "@/sections/home/achivements";
import Commitment from "@/sections/home/commitment";
import Discover from "@/sections/home/discover";
import Manuhero from "@/sections/manufacturing/manuhero";
import Ourfacilities from "@/sections/manufacturing/ourfacilities";
import Technologia from "@/sections/manufacturing/technologia";
import React from "react";

const Page = () => {
  return (
    <>
    <Loadingwrap/>
    <div className=" w-full ">
      <Manuhero />
      <Textline />
      <div className=" w-full pt-32 md:py-32 ">
        <Ourfacilities />
      </div>
      <Technologia />
    </div>
    </>
  );
};

export default Page;
