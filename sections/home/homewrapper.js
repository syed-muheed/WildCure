import React from 'react'
import Herosection from './herosection'
import Textline from '@/components/textline'
import Incorporated from './incorporated'
import Fourgrids from './fourgrids'
import Featured from './featured'

const Homewrapper = () => {
    return (
        <div className=' w-full  ' >
            <Herosection />
            <Textline />
            <Incorporated />
            <Fourgrids />
            <Featured />

        </div>
    )
}

export default Homewrapper
