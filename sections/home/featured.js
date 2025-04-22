import Bluebutton from '@/components/bluebutton'
import React from 'react'

const Featured = () => {
    return (
        <div className=' w-full flex flex-col items-center justify-center py-24  ' >
            <div className=' font-monserrat font-semibold text-[40px] text-[#1F1F21]   ' >
                Featured Products
            </div>

            <div className=' grid grid-cols-4 ' >

            </div>

            <Bluebutton text={"Explore Our Products"} />

        </div>
    )
}

export default Featured
