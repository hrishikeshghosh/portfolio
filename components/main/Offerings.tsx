
"use client"

import React from 'react'
import {motion} from 'framer-motion'
import OfferingText from '../sub/OfferingText'
import OfferingDataProvider from '../sub/OfferingDataProvider'
import { offerings } from '@/constants/offeringData'
import magicYoga from  '@/public/lottie-assets/magic-yoga.json'
import Lottie from 'react-lottie'

const Offerings = () => {

  
const lottieAnimDefaultOptions={
        loop: true,
        autoplay: true,
        // muted:true,
        animationData: magicYoga,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
}

  return (
    <div
    id='offerings'
    className='w-full flex flex-col justify-left gap-3 h-full relative overflow-hidden py-10 px-20'
    style={{transform:"scale(0.9)"}}
    >
      <OfferingText/> 
      <div className='w-full h-auto flex flex-row max-sm:flex-col items-center justify-between'>
    <div 
    className='flex flex-col justify-left gap-3 h-full w-[60%] max-sm:w-full'
    >
        
        {offerings.map((offering,index)=> 
        <OfferingDataProvider 
        key={offering.title}  
        title={offering.title}
        desc={offering.desc} 
        index={index}/>)}
    </div>
     
    <Lottie  options={lottieAnimDefaultOptions} />
    
    </div>
    </div>


  )
}

export default Offerings