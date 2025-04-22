import React from 'react'
import Herosection from './herosection'
import Textline from '@/components/textline'
import Incorporated from './incorporated'
import Fourgrids from './fourgrids'
import Featured from './featured'
import Ourexpertise from './ourexpertise'

const Homewrapper = () => {
    return (
        <div className=' w-full  ' >
            <Herosection />
            <Textline />
            <Incorporated />
            <Fourgrids />
            <Featured />
            <Ourexpertise />

        </div>
    )
}

export default Homewrapper
