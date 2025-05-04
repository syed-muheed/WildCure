import React from "react";
import Herosection from "./herosection";
import Textline from "@/components/textline";
import Incorporated from "./incorporated";
import Fourgrids from "./fourgrids";
import Featured from "./featured";
import Ourexpertise from "./ourexpertise";
import Testimonials from "./testimonials";
import Commitment from "./commitment";
import Achivements from "./achivements";
import Discover from "./discover";

const Homewrapper = () => {
  return (
    <div className=" w-full  ">
      <Herosection />
      <Textline />
      <Incorporated />
      <Fourgrids />
      <Featured />
      <Ourexpertise />
      <Testimonials />
    </div>
  );
};

export default Homewrapper;
