import Image from 'next/image'
import React from 'react'
import src from "@/public/images/dotmap.png"

const Ourexpertise = () => {
    return (
        <div className=' w-full flex items-center justify-around ' >
            <div className=' flex flex-col gap-10 ' >
                <div className=' text-[#1F1F21] text-[40px] font-monserrat font-bold leading-[1]  ' >
                    Our Expertise
                </div>
                <div className=' text-[#505053] text-[16px] font-helvetica  leading-[1.5] w-[420px]  ' >
                    With specialized knowledge in Active Pharmaceutical Ingredients (APIs), Wildcure Pharma combines scientific excellence with manufacturing precision to deliver products that meet the highest quality standards.
                </div>
                <div className=' text-[#505053] text-[16px] font-helvetica  leading-[1.5] w-[420px]  ' >
                    Our team of experts ensures consistent results with every batch.
                </div>
            </div>

            <div className=' w-[700px] ' >
                <Image alt='' className=' w-full object-cover ' src={src} />
            </div>

        </div>
    )
}

export default Ourexpertise
