import Bluebox from '@/components/bluebox'
import Padding from '@/components/padding'
import React from 'react'

const Distribution = () => {
  return (
    <div style={{ backgroundImage: "url('/images/distribution.png"}} className=" bg-cover pt-[8rem] pb-[2rem] text-[#ffffff] font-monserrat">
      <div>
        <div className='text-[#ffffff] text-[2.2rem] md:text-[2.5rem] font-bold text-center'>Our Distribution</div>
        <div className='text-[#E4E8F0] w-[20rem]  md:w-[25rem] text-[14px] md:text-[1rem] py-3 md:py-2 mx-auto text-center'>Our efficient supply chain ensures timely delivery anywhere in the world.</div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5  md:w-fit md:h-[31rem] w-[21rem] mx-auto py-[2.5rem]'>
        <Bluebox num={"01"} text={"Strategic logistics partnerships"}/>
        <Bluebox num={"02"} text={"Temperature-controlled transportation"}/>
        <Bluebox num={"03"} text={"Complete documentation support"}/>
        <Bluebox num={"04"} text={"Customs clearance assistance"}/>
      </div>
    </div>
  )
}

export default Distribution
