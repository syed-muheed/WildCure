import Image from 'next/image'
import React from 'react'
import src from "@/public/images/plusbg.png"
import plus1 from "@/public/images/plus1.png"
import plus2 from "@/public/images/plus2.png"

const Incorporated = () => {
    return (
        <div className=' w-full flex flex-col gap-12 md:gap-0 md:flex-row items-center justify-around py-20 md:py-36 ' >
            <div className=' flex px-4 md:px-0 flex-col gap-6 relative md:scale-[0.8] xl:scale-100 ' >
                <div className=' flex flex-col items-start  ' >
                    <div className=' leading-[1] text-[#1F1F21] text-[36px] font-monserrat font-semibold  ' >
                        Incorporated in
                    </div>
                    <div className=' leading-[1] text-figblue text-[116px] font-monserrat font-semibold  ' >
                        2024
                    </div>
                </div>
                <div className=' text-[#505053] text-[17px]  md:text-[18px] w-full md:w-[550px] font-helvetica font-normal  ' >
                    Wildcure Pharma is one of the leading producers and suppliers of high-quality Active Pharmaceutical Ingredients (APIs) and other organic & inorganic chemicals.
                </div>
                <div className=' text-[#505053] text-[17px] md:text-[18px] w-full md:w-[550px] font-helvetica font-normal  ' >
                    We have emerged as a strong and vibrant international company with a cGMP manufacturing site and quality certifications.s

                </div>
            </div>

            <div className=' w-[320px] h-[320px] md:h-[500px] md:w-[500px] relative md:scale-75 xl:scale-100   ' >
                <Image alt='' src={src} className=' h-full w-full object-cover  ' />
                <Image alt='' src={plus1} className=' h-[70%] w-[70%] absolute top-2 right-2    ' />
                <Image alt='' src={plus2} className=' h-[52%] w-[52%] absolute bottom-2 left-2  z-[2]   ' />

            </div>

        </div>
    )
}

export default Incorporated
