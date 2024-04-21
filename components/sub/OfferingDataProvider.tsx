"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft } from '@/utils/motions'
import Lottie from 'react-lottie'


interface Props{ 
    title:string,
    desc:string,
    index:number
}



const OfferingDataProvider = ({title,desc, index}:Props) => {

const animationDelay=0.3

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={slideInFromLeft(0.5)}
      className='w-full flex items-center justify-between'
    >
        <div>
       <p className='Welcome-text text-[2rem] mb-4'>{title}</p>
       <p className="text-md text-gray-400 my-5 max-w-[400px]">
        {desc}
       </p>
        </div>
    </motion.div>
  )
}

export default OfferingDataProvider