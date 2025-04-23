import React from 'react'

import Padding from '@/components/padding'

const Pharma = () => {
  return (
    <Padding className=' flex h-[50rem] py-[5rem]'>
      <div className=' w-[50%] pt-[4rem]'>
        <div className='   font-monserrat'>
            <div className=' text-[4.5rem] font-bold leading-[5rem] '>WILDCURE</div>
            <div className=' tracking-[3.6rem] font-medium text-[1.7rem] text-[#2D6AE1] leading-none'>PHARMA</div>
        </div>
        <div className='w-[30rem] text-[#505053] pt-[3.2rem]'>Wildcure Pharma was established in February 2024 with a clear vision: to become a global leader in the production and supply of high-quality pharmaceutical ingredients.</div>
        <div className='w-[30rem] text-[#505053] pt-[1.5rem]'>Based in the thriving pharmaceutical hub of Hyderabad, India, we have quickly grown from a promising startup to an internationally recognized supplier serving diverse healthcare sectors worldwide.</div>
      </div>
      <div className='w-[50%] '>
        <div className='  grid grid-cols-2 grid-rows-2 h-[40rem] gap-3'>
            <div className=' h-full w-full bg-cover'  style={{ backgroundImage: "url('/images/aboutus1.png')" }}></div>
            <div className='h-full w-full row-span-2 bg-cover' style={{ backgroundImage: "url('/images/aboutus2.png')" }}></div>
            <div className=' h-full w-full bg-cover' style={{ backgroundImage: "url('/images/aboutus3.png')" }}></div>
        </div>
      </div>
    </Padding>
  )
}

export default Pharma
