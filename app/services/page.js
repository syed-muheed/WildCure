import Textline from '@/components/textline'
import Activesection from '@/sections/services/activesection'
import Pharmaceuticals from '@/sections/services/pharmaceuticals'
import Servicehero from '@/sections/services/servicehero'
import Image from 'next/image'
import React from 'react'


const Page = () => {
    return (
        <div className=' w-full ' >
            <Servicehero />
            <Textline />
            <Activesection />
            <Pharmaceuticals />


        </div>
    )
}

export default Page
