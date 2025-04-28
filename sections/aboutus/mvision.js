import React from 'react'
import Image from 'next/image'
import src from "@/public/images/mvision.png"
import src2 from "@/public/images/mvision2.png"
import Crazymarquee2 from '@/components/crazymarquee2'


const Mvision = () => {
  return (
    <div className=' bg-[#2D6AE1]'>
      <div className='md:flex'>
        <div className='md:w-[40%]'>
            <Image className=' w-full h-full object-cover' src={src} alt="mission"/>
        </div>
        <div className='md:w-[60%] text-white flex flex-col justify-between  pb-[3rem] font-monserrat'>
            <div className='w-full h-full flex items-center py-[5rem] md:py-0 justify-center space-y-3'>
                <div className='w-[20rem] lg:w-[30rem]'>
                <div className=' text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]  font-bold'>Our Mission</div>
                <div className='text-[16px] md:text-[14px] lg:text-[16px]'>To deliver pharmaceutical ingredients of uncompromising quality, fostering innovation and health advancement through reliable partnerships and sustainable practices.</div>
                </div>
            </div>
            <Crazymarquee2/>
        </div>
      </div>
      <div className='md:flex'>
       
        <div className='md:w-[60%] text-white flex flex-col justify-between  pb-[3rem] font-monserrat'>
            <div className='w-full h-full flex items-center py-[5rem] md:py-0 justify-center space-y-3'>
                <div className='w-[20rem] lg:w-[29rem]'>
                <div className='text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] font-bold'>Our Vision</div>
                <div className='text-[16px] md:text-[14px] lg:text-[16px]'>To be the preferred global partner for pharmaceutical ingredients, known for excellence, integrity, and innovation in every aspect of our operations.</div>
                </div>
            </div>
            <Crazymarquee2/>
        </div>
        <div className='md:w-[40%]'>
            <Image className=' w-full h-full object-cover' src={src2} alt="vision"/>
        </div>
      </div>
    </div>
  )
}

export default Mvision
