import Bluebutton from '@/components/bluebutton'
import Featuredimg from '@/components/featuredimg'
import React from 'react'
import f1 from "@/public/images/f1.png"

const Featured = () => {
    return (
        <div className=' w-full flex flex-col items-center justify-center py-24 md:py-36 gap-12  ' >
            <div className=' font-monserrat font-semibold text-[32px] md:text-[40px] text-[#1F1F21]   ' >
                Featured Products
            </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-8 xl:gap-y-0 gap-x-8 xl:gap-x-5' >
                <Featuredimg number={"01"} text={"Active Pharmaceutical Ingredients"} src={f1} />
                <Featuredimg number={"02"} text={"Organic Chemicals"} src={f1} />
                <Featuredimg number={"03"} text={"Inorganic Chemicals"} src={f1} />
                <Featuredimg number={"04"} text={"Custom Synthesis Solutions"} src={f1} />
            </div>

            <Bluebutton text={"Explore Our Products"} />

        </div>
    )
}

export default Featured
