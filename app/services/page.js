import Loadingwrap from "@/components/loadingwrap";
import Textline from "@/components/textline";
import Achivements from "@/sections/home/achivements";
import Commitment from "@/sections/home/commitment";
import Discover from "@/sections/home/discover";
import Activesection from "@/sections/services/activesection";
import Pharmaceuticals from "@/sections/services/pharmaceuticals";
import Servicehero from "@/sections/services/servicehero";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
    <Loadingwrap/>
    <div className=" w-full ">
      <Servicehero />
      <Textline />
      <Activesection />
      <Pharmaceuticals />
    </div>
    </>
  );
};

export default Page;
