"use client";
import Pharmacard from "@/components/pharmacard";
import Downarrow from "@/public/icons/downarrow";
import React, { useState } from "react";

const Pharmaceuticals = () => {
  const [select, setSelect] = useState("All Variants");
  const [category,setCategory]=useState("All Categories")
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const products = [
    {
      name: "Ketamine Hydrochloride",
      pharmacopeia: ["BP", "USP", "EP", "IP"],
      category: "Active Pharmaceutical Ingredients",
      catabbr: "API",
      application: "Anesthetic, Analgesic"
    },
    {
      name: "Hydroxylinine Hydrochloride",
      pharmacopeia: ["BP", "USP", "EP", "IP"],
      category: "Active Pharmaceutical Ingredients",
      catabbr: "API",
      application: "Antihistamine, Sedative"
    },
    {
      name: "Esketamine Hydrochloride",
      pharmacopeia: ["EP"],
      category: "Active Pharmaceutical Ingredients",
      catabbr: "API",
      application: "Antidepressant, Anesthetic"
    },
    {
      name: "Quinapyramine Chloride",
      pharmacopeia: ["B Vet C"],
      category: "Active Pharmaceutical Ingredients",
      catabbr: "API",
      application: "Veterinary Antiprotozoal"
    },
    {
      name: "Sodium Alendronate",
      pharmacopeia: ["BP"],
      category: "Active Pharmaceutical Ingredients",
      catabbr: "API",
      application: "Osteoporosis Treatment"
    },
    {
      name: "Bromhexine Hydrochloride",
      pharmacopeia: ["BP", "IP"],
      category: "Active Pharmaceutical Ingredients",
      catabbr: "API",
      application: "Mucolytic Agent"
    },
    {
      name: "Calcium Glycerophosphate",
      pharmacopeia: ["BP", "EP", "BPC 63"],
      additionalInfo: "50% W/W solution",
      category: "Inorganic Chemicals",
      catabbr: "IC",
      application: "Mineral Supplement"
    },
    {
      name: "Magnesium Glycerophosphate",
      pharmacopeia: ["BP", "EP", "BPC 63", "HI"],
      additionalInfo: "50% solution",
      category: "Inorganic Chemicals",
      catabbr: "IC",
      application: "Electrolyte Replenisher"
    },
    {
      name: "Sodium Glycerophosphate",
      pharmacopeia: ["BP (Hydrated)", "BPC 49"],
      additionalInfo: "50% solution",
      category: "Inorganic Chemicals",
      catabbr: "IC",
      application: "Nutritional Supplement"
    }
  ];
  

  return (
    <div className=" w-full flex flex-col items-center justify-center gap-4 min-h-[200vh] ">
      <div className=" text-figblue font-monserrat font-bold text-[32px] md:text-[48px] w-full lg:w-[800px] text-center leading-[1.2]   ">
        High-Quality Pharmaceutical Ingredients
      </div>

      <div className=" font-helvetica text-[16px] flex items-center justify-center text-[#323235] w-[90%] md:py-6  ">
        Manufactured to precision standards to meet the highest quality
        requirements
      </div>
{/* 
      <div className=" hidden md:flex items-center p-[3px] font-helvetica font-medium  rounded-full border-[1px] ">
        {options.map((item, index) => (
          <div
            key={index}
            className={` py-2 px-6 rounded-full ${
              tab == index
                ? " bg-figblue text-white "
                : " bg-transparent text-[#3A3A3E] "
            } transition-all leading-[1] cursor-pointer text-center text:[12px] md:text-[14px]  `}
            onClick={() => {
              setTab(index);
            }}
          >
            {item}
          </div>
        ))}{" "}
      </div> */}

      <div className=" font-helvetica text-[16px] text-[#323235] w-[95%] md:w-[600px] text-center py-6  ">
        Wildcure Pharma specializes in the development and manufacturing of
        high-purity Active Pharmaceutical Ingredients (APIs) that meet stringent
        international pharmacopeia standards. Our APIs are manufactured in our
        state-of-the-art cGMP facility under strict quality control.
      </div>

      <div className=" w-[90%] xl:w-[80%] flex items-center justify-center gap-2 pb-6 ">

<div
          className=" cursor-pointer border-[1px] h-[50px] px-2 flex items-center justify-between rounded-xl  w-[500px] relative   "
          onClick={() => {
            setOpen1(!open1);
          }}
        >
          <div className=" text-[#2B2B31] font-medium text:[10px] md:text-[14px] font-helvetica leading-[1] ">
            {category}
          </div>

          <Downarrow />

          {open1 && (
            <div
              className={` w-full absolute border-[1px] rounded-lg  bg-white - left-0 top-[52px] shadow-lg  transition-all duration-200  `}
            >
              <div
                className=" font-helvetica hover:bg-gray-300 transition-all px-2 rounded-lg py-1 "
                onClick={() => {
                  setCategory("All Categories");
                }}
              >
                All Categories
              </div>
              <div
                className=" font-helvetica hover:bg-gray-300 transition-all px-2 rounded-lg py-1 "
                onClick={() => {
                  setCategory("Active Pharmaceutical Ingredients");
                }}
              >
                Active Pharmaceutical Ingredients
              </div>
             
              <div
                className=" font-helvetica hover:bg-gray-300 transition-all px-2 rounded-lg py-1 "
                onClick={() => {
                  setCategory("Inorganic Chemicals");
                }}
              >
                Inorganic Chemicals
              </div>
             
            </div>
          )}
        </div>

        <div
          className=" cursor-pointer border-[1px] h-[50px] px-2 flex items-center justify-between rounded-xl  w-[500px] relative   "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className=" text-[#2B2B31] font-medium text:[10px] md:text-[14px] font-helvetica leading-[1] ">
            {select}
          </div>

          <Downarrow />

          {open && (
            <div
              className={` w-full absolute border-[1px] rounded-lg  bg-white - left-0 top-[52px] shadow-lg  transition-all duration-200  `}
            >
              <div
                className=" font-helvetica hover:bg-gray-300 transition-all px-2 rounded-lg py-1 "
                onClick={() => {
                  setSelect("All Variants");
                }}
              >
                All Variants
              </div>
              <div
                className=" font-helvetica hover:bg-gray-300 transition-all px-2 rounded-lg py-1 "
                onClick={() => {
                  setSelect("BP");
                }}
              >
                BP
              </div>
              <div
                className=" font-helvetica hover:bg-gray-300 transition-all px-2 rounded-lg py-1 "
                onClick={() => {
                  setSelect("USP");
                }}
              >
                USP
              </div>
              <div
                className=" font-helvetica hover:bg-gray-300 transition-all px-2 rounded-lg py-1 "
                onClick={() => {
                  setSelect("EP");
                }}
              >
                EP
              </div>
              <div
                className=" font-helvetica hover:bg-gray-300 transition-all px-2 rounded-lg py-1 "
                onClick={() => {
                  setSelect("IP");
                }}
              >
                IP
              </div>
            </div>
          )}
        </div>
      </div>


      <div className=" grid grid-cols-3 gap-x-6 gap-y-6 " >
        {
            products.map((item,index)=>(
                <Pharmacard key={index} name={item.name} cat={item.category} pharm={item.pharmacopeia} additional={item?.additionalInfo} abbr={item.catabbr} application={item.application} />
            )) 
        }
      </div>

      {/* <div className=" w-[90%] xl:w-[80%] ">
        <div className=" bg-[#EEF0F3]   flex items-center px-4 w-full border-[1px]  border-[E0E2E7] rounded-t-xl py-3  ">
          <div className=" w-[50%] md:w-[35%] font-helvetica font-bold text-[12px] md:text-[16px]   ">
            Name of Products
          </div>
          <div className=" w-[50%] md:w-[40%] font-helvetica font-bold text-[12px] md:text-[16px]   ">
            Pharmacopeia
          </div>
          <div className=" w-[25%] hidden md:block font-helvetica font-bold text-[16px]   ">
            Specifications{" "}
          </div>
        </div>
        {data1.map((item, index) => (
          <div
            key={index}
            className={` ${
              index % 2 == 0 ? " bg-white " : " bg-[#F7F9FA] "
            }   flex items-center px-4 w-full border-x-[1px]  border-[E0E2E7]  py-4 ${
              index + 1 == data1.length ? " border-b-[1px] rounded-xl " : "  "
            }  `}
          >
            <div className=" w-[55%] md:w-[35%] font-helvetica font-medium text-[12px] md:text-[16px]   ">
              {item.name}
            </div>
            <div className=" w-[45%] md:w-[40%] font-helvetica font-medium text-[12px] md:text-[16px]   ">
              {item.pharmacopeia.map((nam,index)=>{
                return `${nam} ${item.pharmacopeia.length==index+1 ? "":","}`
              })}

              {item.additionalInfo? `,${item.additionalInfo}`:"" }
            </div>
            <div className=" w-[25%] font-helvetica font-medium text-[16px] hidden md:block   ">
             <div className=" bg-[#084BCE10] border-[#084BCE40] text-[#084BCE] text-[16px] font-helvetica font-medium w-fit py-[14px] px-6 border rounded-full cursor-pointer leading-[1]   " >
                View Specs
             </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Pharmaceuticals;
