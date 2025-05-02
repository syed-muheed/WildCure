import React from 'react'

const Bluebox = ({num,text}) => {
  return (
    <div className='  backdrop-blur-[5px] bg-blend-soft-light font-semibold h-[12rem] bg-[#ffffff19] w-[21rem] p-4 flex flex-col justify-between'>
      <div className=' text-[0.8rem]'>{num}</div>
      <div className=' text-[1.5rem]'>{text}</div>
    </div>
  )
}

export default Bluebox
