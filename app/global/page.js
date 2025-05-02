import Distribution from '@/sections/global/distribution'
import Expanding from '@/sections/global/expanding'
import Network from '@/sections/global/network'
import Operations from '@/sections/global/operations'
import Regional from '@/sections/global/regional'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Expanding/>
      <Network/>
      <Regional/>
      <Distribution/>
      <Operations/>
    </div>
  )
}

export default Page
