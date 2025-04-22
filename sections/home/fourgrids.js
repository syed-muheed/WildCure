import Gridbox from '@/components/gridbox'
import React from 'react'

const Fourgrids = () => {
    return (
        <div className='  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-4 py-6 place-items-center gap-y-10   ' >
            <Gridbox number={"01"} head={"cGMP Manufacturing"} des={"State-of-the-art facilities with certified quality management"} />
            <Gridbox number={"02"} head={"Global Reach"} des={"Exporting premium products to over 15 countries"} />
            <Gridbox number={"03"} head={"Quality Assurance"} des={"Rigorous testing and compliance with international standards"} />
            <Gridbox number={"04"} head={"Customer-Centric"} des={"Tailored solutions to meet specific industry requirements"} />
        </div>
    )
}

export default Fourgrids
