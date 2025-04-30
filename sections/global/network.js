import Countrycard from '@/components/countrycard'
import Padding from '@/components/padding'
import React from 'react'
import src1 from "@/public/images/country1.png"
import src2 from "@/public/images/country2.png"
import src3 from "@/public/images/country3.png"
import src4 from "@/public/images/country4.png"
import src5 from "@/public/images/country5.png"

const Network = () => {
  return (
    <Padding>
      <div>
        <div className='text-[#1F1F21] text-[2.2rem] md:text-[2.5rem] font-bold text-center'>Our Export Network</div>
        <div className='text-[#505053] w-[20rem]  md:w-[25rem] text-[14px] md:text-[1rem] py-3 md:py-2 mx-auto text-center'>Since our inception, we've established a strong international presence, currently exporting to over 15 countries across.</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 pt-6 space-y-3'>
        <Countrycard num={"01"} src={src1} country={"North America"}/>
        <Countrycard num={"02"} src={src2} country={"Europe"}/>
        <Countrycard num={"03"} src={src3} country={"Asia-Pacific"}/>
        <Countrycard num={"04"} src={src4} country={"Middle East"}/>
        <Countrycard num={"05"} src={src5} country={"South America"}/>
      </div>
    </Padding>
  )
}

export default Network
