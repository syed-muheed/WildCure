"use client"
import React, { useState } from 'react'

const Underanimatetext = ({text}) => {
    const [hover,setHover]=useState(false)
  return (
    <div 
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}
     className=' w-fit leading-[1] relative text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.5rem] pt-[1rem] font-bold text-[#1F1F21]' >
      {text}
      <div className={` transition-all absolute bottom-[0px] h-[3px] rounded-full ${hover?"w-full":"w-0"} bg-[#1F1F21] `} ></div>
    </div>
  )
}

export default Underanimatetext
