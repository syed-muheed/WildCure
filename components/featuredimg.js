import Image from 'next/image'
import React from 'react'

const Featuredimg = ({ src, number, text }) => {
    return (
        <div className=' h-[350px] w-[330px] relative cursor-pointer  xl:scale-[0.85] 1xl:scale-100  ' >
            <Image alt='' src={src} className=' h-full w-full object-cover absolute top-0 left-0 ' />
            <div className=' relative z-[1] h-full p-3 flex flex-col justify-between text-[#1F1F21]  ' >
                <div className='font-monserrat text-[18px]   font-semibold text-[#1F1F21]  ' >
                    {number}
                </div>
                <div className=' font-monserrat text-[26px]  font-semibold text-[#fff]   ' >
                    {text}
                </div>
            </div>


        </div>
    )
}

export default Featuredimg
