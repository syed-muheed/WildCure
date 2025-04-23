import React from 'react'
import src from "@/public/images/servicehero.png"
import Image from 'next/image'

const Servicehero = () => {
    return (
        <div className=' w-full h-screen relative ' >

            <Image alt='' src={src} className=' h-full w-full object-cover ' />

            <div className=' h-full w-full absolute top-0 left-0 z-[1] flex items-center justify-center ' >
                <div className=' font-monserrat font-semibold text-[24px] md:text-[32px] px-4 lg:px-0 lg:text-[36px] text-[white] text-center w-full lg:w-[950px] leading-[1.3]    ' >Wildcure Pharma specializes in the development, manufacturing, and supply of high-quality pharmaceutical ingredients that meet stringent international standards.</div>
            </div>


        </div>
    )
}

export default Servicehero
