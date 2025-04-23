import Textline from '@/components/textline'
import Activesection from '@/sections/services/activesection'
import Servicehero from '@/sections/services/servicehero'
import Image from 'next/image'
import React from 'react'


const Page = () => {
    return (
        <div className=' w-full ' >
            <Servicehero />
            <Textline />
            <Activesection />


        </div>
    )
}

export default Page
