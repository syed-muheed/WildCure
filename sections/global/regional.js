import Marketcard from '@/components/marketcard'
import React from 'react'
import src1 from "@/public/images/market1.png"
import src2 from "@/public/images/market2.png"
import src3 from "@/public/images/market3.png"
import src4 from "@/public/images/market4.png"
import Padding from '@/components/padding'

const Regional = () => {
  return (
    <Padding className='font-monserrat pt-[8rem]'>
      <div className='text-center text-[2.3rem] md:text-[2.5rem] lg:text-[3rem] text-[#084BCE] font-bold leading-[3rem]'>Regional Market Strategy</div>
      <div className='text-center text-[#323235] text-[14px]  max-w-[23rem] md:max-w-[40rem] lg:max-w-[50rem] mx-auto pt-[1.5rem]'>Our global operations maintain rigorous compliance with international standards and regulations, including country-specific pharmaceutical requirements, comprehensive documentation support, and regular audits by international regulatory bodies. Our regulatory affairs team provides complete support for global market access, ensuring smooth registration processes across diverse markets.</div>
      <div className='pt-[3rem] space-y-10'>
        <Marketcard num={"01"} title={"Asia Pacific"} desc={"Strong partnerships in India, China, Japan, South Korea, and Southeast Asian countries, leveraging our proximity to major pharmaceutical manufacturing hubs for efficient service delivery"} src={src1}/>
        <Marketcard num={"02"} title={"Europe"} desc={"Established relationships with pharmaceutical companies in the UK, Germany, France, Italy, and emerging Eastern European markets, meeting their stringent quality requirements"} src={src2}/>
        <Marketcard num={"03"} title={"North America"} desc={"FDA-compliant products serving pharmaceutical manufacturers across the United States and Canada"} src={src3}/>
        <Marketcard num={"04"} title={"Middle East and Africa"} desc={"Growing presence supporting healthcare advancement in UAE, Saudi Arabia, Egypt, and South Africa"} src={src4}/>
      </div>
    </Padding>
  )
}

export default Regional
