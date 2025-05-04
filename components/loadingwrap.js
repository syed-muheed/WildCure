"use client"
import Wcanim from '@/public/icons/wcanim'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Loadingwrap = () => {
    const [view,setView]=useState(true)
    useEffect(()=>{
        setInterval(() => {
            setView(false)
        }, 2400);
    },[])
  return (
    <>
    {view && <motion.div 
    initial={{
        height:"100vh"
    }}
    animate={{
        height:0
    }}
    transition={{
        delay:1.8,
        duration:0.5,
        ease:"easeInOut"
    }}
    className={` overflow-hidden  h-screen w-full fixed top-0 left-0 bg-white flex items-center justify-center z-[1000]  `}>
       <div className=' w-[200px] ' >

        <Wcanim/>
       </div>
      
    </motion.div>}
    </>
  )
}

export default Loadingwrap
