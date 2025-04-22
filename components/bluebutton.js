import React from 'react'

const Bluebutton = ({ text }) => {
    return (
        <div className=' w-fit rounded-full px-[24px] py-[14px] leading-[1] bg-[#084BCE] text-white font-helvetica  cursor-pointer hover:scale-105 duration-100    ' >
            {text}
        </div>
    )
}

export default Bluebutton
