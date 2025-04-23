import Image from 'next/image'
import React from 'react'

const Activecard = ({ number, img, title, subtitle, list = [], reverse = false }) => {
    return (
        <div className={` w-full px-6  flex items-center justify-between ${reverse ? " flex-col lg:flex-row-reverse" : " flex-col lg:flex-row"}    `} >

            <div className=' h-[400px] md:h-[550px] w-[90%] md:w-[450px] scale-90 xl:scale-100  ' >
                <Image alt='' src={img} className=' h-full w-full object-cover ' />
            </div>

            <div className={`  flex items-start justify-center gap-4  xl:justify-between ${reverse ? " flex-row md:flex-row-reverse" : "flex-row"} w-[100%] xl:w-[50%] scale-90 xl:scale-100  `} >
                <div className=' flex flex-col w-[450px] gap-5 ' >
                    <div className=' font-monserrat text-[24px] md:text-[36px] font-semibold text-[#1F1F21]   ' >
                        {title}
                    </div>
                    <div className=' text-[#505053] font-helvetica text-[16px]   ' >
                        {subtitle}
                    </div>
                    <ul className=' flex flex-col gap-2 list-[square] ' >
                        {
                            list.map((item, index) => (
                                <li key={index} className=' text-[16px] font-helvetica text-[#2C2C30]  ' >
                                    {item}
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className=' font-monserrat text-[60px] text-[#CBCBCE] font-bold  ' >
                    {number}
                </div>
            </div>

        </div>
    )
}

export default Activecard
