import Image from 'next/image'
import React from 'react'


const Photolayer = ({ img, className }) => {
    return (
        <div className={` h-[400px]  bg-white/20 rounded-3xl border-white border-[1px] border-dashed p-[18px]   ${className} `} >
            <Image src={img} alt=' ' className=' rounded-xl h-full w-full object-cover ' />

        </div>
    )
}

export default Photolayer
