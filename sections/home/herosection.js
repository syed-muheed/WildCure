import Image from 'next/image'
import React from 'react'
import img from "@/public/images/herobg.png"
import pg1 from "@/public/images/one.jpg"
import pg2 from "@/public/images/two.jpg"
import pg3 from "@/public/images/three.jpg"
import pg4 from "@/public/images/four.jpg"
import pg5 from "@/public/images/five.jpg"
import Bluebutton from '@/components/bluebutton'
import Photolayer from '@/components/photolayer'

const Herosection = () => {
    return (
        <div className=' h-[120vh] w-full relative  ' >

            <div className=' h-full w-full absolute top-0 left-0  ' >
                <Image className=' h-full w-full object-cover ' alt='' src={img} />
            </div>

            <div className=' h-screen w-full flex  flex-col items-center justify-center relative z-[10] pb-20 ' >
                <div className=' font-monserrat text-[24px] md:text-[36px] xl:text-[48px] text-white leading-[1.2] font-semibold text-center  md:w-[550px] xl:w-[700px]   ' >
                    Pioneering Excellence in Pharmaceutical Ingredients
                </div>
                <div className=' py-5 font-helvetica text-[16px]  md:text-[18px] xl:text-[22px] text-white  text-center md:w-[500px]   ' >
                    A trusted global supplier of high-quality Active Pharmaceutical Ingredients since 2024
                </div>

                <Bluebutton text={"Explore Our Products"} />

            </div>

            <div className=' w-full px-6 absolute bottom-0 left-0 flex justify-between overflow-hidden  ' >
                <Photolayer className={'relative w-[23%] hidden md:block xl:w-[19%] top-20 z-[9]'} img={pg1} />
                <Photolayer className={'relative w-[23%] hidden md:block xl:w-[19%] top-14 z-[9]'} img={pg2} />
                <Photolayer className={'relative w-full xl:w-[19%] top-10 md:hidden xl:block  z-[9]'} img={pg3} />
                <Photolayer className={'relative w-[23%] hidden md:block xl:w-[19%] top-14 z-[9]'} img={pg4} />
                <Photolayer className={'relative w-[23%] hidden md:block xl:w-[19%] top-20 z-[9]'} img={pg5} />


            </div>



        </div>
    )
}

export default Herosection
