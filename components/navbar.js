import Wcp from '@/public/icons/wcp'
import React from 'react'

const Navbar = () => {
    return (
        <div className=' fixed p-6 top-0 left-0 w-full flex items-center justify-between z-[1000] ' >

            <div className=' bg-black/30 px-[22px] py-[10px] gap-8 flex items-center rounded-full  ' >
                <div className=' cursor-pointer text-white font-[14px] font-normal font-helvetica  '>Home</div>
                <div className=' cursor-pointer text-white font-[14px] font-normal font-helvetica  '>About</div>
                <div className=' cursor-pointer text-white font-[14px] font-normal font-helvetica  '>More</div>
            </div>

            <div className=' absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[107px] ' >
                <Wcp />
            </div>

            <div className=' px-[22px] py-[10px] bg-white/20 backdrop-blur-sm border-white border-[1px] rounded-full text-[16px] font-helvetica text-white   ' >
                Contact Us
            </div>

        </div>
    )
}

export default Navbar
