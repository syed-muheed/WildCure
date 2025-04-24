import React from 'react'
import Image from 'next/image'
import src from "@/public/images/mvision.png"
import Crazymarquee2 from '@/components/crazymarquee2'


const Mvision = () => {
  return (
    <div className=' bg-[#2D6AE1]'>
      <div className='flex'>
        <div className='w-[40%]'>
            <Image className=' w-full h-full object-cover' src={src} alt="mission"/>
        </div>
        <div className='w-[60%] text-white flex flex-col justify-between pt-[10rem] pb-[3rem] font-monserrat'>
            <div className='w-[30rem] mx-auto space-y-3'>
                <div className='text-[2.5rem] font-bold'>Our Mission</div>
                <div className=''>To deliver pharmaceutical ingredients of uncompromising quality, fostering innovation and health advancement through reliable partnerships and sustainable practices.</div>
            </div>
            <Crazymarquee2/>
        </div>
      </div>
      <div className='flex'>
       
        <div className='w-[60%] text-white flex flex-col justify-between pt-[10rem] pb-[3rem] font-monserrat'>
            <div className='w-[29rem] mx-auto space-y-3'>
                <div className='text-[2.5rem] font-bold'>Our Vision</div>
                <div className=''>To be the preferred global partner for pharmaceutical ingredients, known for excellence, integrity, and innovation in every aspect of our operations.</div>
            </div>
            <Crazymarquee2/>
        </div>
        <div className='w-[40%]'>
            <Image className=' w-full h-full object-cover' src={src} alt="vision"/>
        </div>
      </div>
    </div>
  )
}

export default Mvision
