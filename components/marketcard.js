import React from 'react'
import Image from 'next/image'

const Marketcard = ({num,title,desc,src}) => {
  return (
    <div className=' flex flex-col md:flex-row gap-5 md:gap-10 xl:justify-between'>
      <div className='text-[3.5rem] text-[#CBCBCE] font-bold'>{num}</div>
      <div className=' flex flex-col gap-5 md:pt-[1rem] lg:flex-row xl:gap-[4rem] ' >

      <div >
        <div className='text-[1.7rem] text-[#1F1F21] font-bold'>{title}</div>
        <div className='py-[1rem] leading-[1.7rem] max-w-[24.5rem]'>{desc}</div>
      </div>
      <Image className='md:max-w-[35rem] object-cover' src={src} alt="market"/>
      </div>
    </div>
  )
}

export default Marketcard
