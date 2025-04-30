import React from 'react'
import Image from 'next/image'

const Countrycard = ({num,src,country}) => {
  return (
    <div className=' bg-[#EDF0F5] w-full min-w-[15rem] max-w-[25rem] md:max-w-[20rem] mx-auto md:mx-0 p-3 font-monserrat'>
      <div className='text-[14px] pb-4 text-[#1f1f21] font-semibold'>{num}</div>
      <Image className='h-[15rem]  md:h-[10rem] md:w-[15rem] mx-auto object-contain' src={src} alt='country'/>
      <div className='text-[#084BCE] pt-4 text-[1.5rem] font-semibold'>{country}</div>
    </div>
  )
}

export default Countrycard
