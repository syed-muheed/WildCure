import Loadingwrap from "@/components/loadingwrap";
import Homewrapper from "@/sections/home/homewrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Loadingwrap/>
     
    <div className=" w-full ">
      <Homewrapper />
    </div>
    </>
   
  );
}
