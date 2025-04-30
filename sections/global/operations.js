import Padding from '@/components/padding'
import React from 'react'
import Image from 'next/image'
import src from "@/public/images/approach.png"
import Gridbox from '@/components/gridbox'

const Operations = () => {
  return (
    <div className='font-monserrat pt-[8rem]'>
    <Padding>
    <div className='text-center text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#1F1F21] font-bold leading-[2.5rem]'>Global Operations Excellence</div>
    <div className='text-center text-[#323235] text-[14px]  max-w-[18rem] md:max-w-[30rem]  mx-auto pt-[1.5rem]'>Wildcure Pharma's international capabilities ensure reliable worldwide delivery and support</div>
      <div className='  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 py-6  gap-y-10   ' >
            <Gridbox number={"01"} head={"Supply Chain Mastery"} des={"End-to-end visibility with real-time tracking, quality-controlled shipping conditions, temperature-monitored transportation, and strategic inventory management across regions"} />
            <Gridbox number={"02"} head={"International Trade Support"} des={"Export documentation expertise, regulatory compliance knowledge, multilingual technical assistance, and 24/7 customer service across time zones"} />
            <Gridbox number={"03"} head={"Future Growth Strategy"} des={"Targeted expansion in emerging pharmaceutical markets, strategic distributor partnerships, participation in international exhibitions, and market-specific product development initiatives"} />
            
        </div>

    </Padding>
        
    </div>
  )
}

export default Operations
