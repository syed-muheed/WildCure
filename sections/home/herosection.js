import Image from 'next/image'
import React from 'react'
import img from "@/public/images/herobg.png"

const Herosection = () => {
    return (
        <div className=' h-[120vh] w-full relative  ' >

            <div className=' h-full w-full absolute top-0 left-0  ' >
                <Image className=' h-full w-full object-cover ' alt='' src={img} />
            </div>

            <div className=' h-screen w-full flex flex-col items-center justify-center relative z-[10] ' >
                <div className=' font-monserrat text-[48px] text-white leading-[1.2] font-semibold text-center w-[700px]   ' >
                    Pioneering Excellence in Pharmaceutical Ingredients
                </div>
                <div className=' pt-5 font-helvetica  text-[22px] text-white  text-center w-[500px]   ' >
                    A trusted global supplier of high-quality Active Pharmaceutical Ingredients since 2024
                </div>

            </div>


        </div>
    )
}

export default Herosection
