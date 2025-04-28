import Padding from '@/components/padding'
import React from 'react'
import Image from 'next/image'
import src from "@/public/images/approach.png"
import Gridbox from '@/components/gridbox'

const Approach = () => {
  return (
    <div className='font-monserrat'>
    <Padding>
      <div className='  text-center font-bold text-[2rem] py-[2rem]'>Our Approach</div>
      <div className='  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 py-6  gap-y-10   ' >
            <Gridbox number={"01"} head={"Quality Without Compromise"} des={"Adhering to the highest standards in every batch we produce"} />
            <Gridbox number={"02"} head={"Continuous Innovation"} des={"Investing in research and development to improve processes and products"} />
            <Gridbox number={"03"} head={"Transparent Partnerships"} des={"Building lasting relationships based on trust and mutual growth"} />
            <Gridbox number={"04"} head={"Global Excellence"} des={"Meeting international standards while understanding local market needs"} />
        </div>

    </Padding>
        <Image src={src} alt='approach' className='h-full w-full object-cover'/>
    </div>
  )
}

export default Approach
