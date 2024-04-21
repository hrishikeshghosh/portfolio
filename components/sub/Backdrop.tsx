"use client"

import React from 'react'
import {motion} from 'framer-motion'

interface Props{
    children:any, 
}

const Backdrop = ({children}:Props) => {
  return (
    <motion.div
    
    className='fixed top-0 left-0 h-[100vh] w-full bg-black bg-opacity-70 z-[999] overflow-hidden'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
        {children}
    </motion.div>
  )
}

export default Backdrop