import React from 'react'

const Gridbox = ({ number, head, des }) => {
    return (
        <div className=' flex flex-col w-[330px] xl:w-[300px] 1xl:w-[330px] text-[#1F1F21] '  >
            <div className=' font-monserrat text-[14px]   font-semibold border-b-[1px] border-[#1F1F21] pb-4 ' >{number}</div>

            <div className=' flex flex-col ' >
                <div className=' font-monserrat text-[26px]  font-semibold   ' >
                    {head}
                </div>
                <div className=' font-helvetica text-[16px]  text-[#505053]   ' >
                    {des}
                </div>

            </div>



        </div>
    )
}

export default Gridbox
