import Loadingwrap from '@/components/loadingwrap'
import Approach from '@/sections/aboutus/approach'
import Leadership from '@/sections/aboutus/leadership'
import Mvision from '@/sections/aboutus/mvision'
import Ourstory from '@/sections/aboutus/ourstory'
import Pharma from '@/sections/aboutus/pharma'
import React from 'react'

const Page = () => {
  return (
    <>
    <Loadingwrap/>
    <div>
      <Ourstory/>
      <Pharma/>
      <Mvision/>
      <Leadership/>s
      <Approach/>
    </div>
    </>
  )
}

export default Page
