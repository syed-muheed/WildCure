import Padding from '@/components/padding'
import React from 'react'
import Image from 'next/image'
import src from "@/public/images/leadership.png"

const Leadership = () => {
  return (
    <Padding className={" font-monserrat"}>
        <div className='text-center text-[2.5rem] text-[#084BCE] py-[2rem] md:py-[5rem] font-bold'>Leadership</div>
<div className='md:flex justify-between'>
<div className='lg:flex gap-[4rem] xl:gap-[10rem] justify-between'>

      <div className='text-[3rem] text-[#CBCBCE] font-bold pb-[2.5rem] md:pb-0'>Meet</div>
      <div>
        <div className='text-[1.7rem] text-[#1F1F21] font-bold'>Mr. Shaik Ameer  
        </div>
        <div className='text-[1.3rem] text-[#67676A] font-medium'>Founder & Proprietor</div>
        <div className=' font-helvetica pt-[1.8rem] text-[#505053] md:w-[23rem] lg:w-[25rem]'>With extensive experience in pharmaceutical manufacturing and international trade, Mr. Ameer established Wildcure Pharma with a commitment to quality and customer satisfaction.</div>
        <div className=' font-helvetica text-[#505053] pt-[1.3rem]  md:w-[21rem] lg:w-[25rem]'>His leadership has been instrumental in the company's rapid growth and expanding global footprint.</div>
      </div>
</div>
      <Image className=' w-full md:w-[20rem] xl:w-[28rem] pt-[5.5rem] md:pt-0' src={src} alt='founder'/>
</div>
    </Padding>
  )
}

export default Leadership




