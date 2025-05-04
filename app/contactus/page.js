import Contactus from "@/components/contactus";
import Loadingwrap from "@/components/loadingwrap";
import React from "react";

const Page = () => {
  return (
    <>
    <Loadingwrap/>
    <div className="pt-[6rem] pb-[8rem]">
      <Contactus />
    </div>
    </>
  );
};

export default Page;
