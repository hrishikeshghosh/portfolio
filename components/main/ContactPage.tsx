"use client"

import React from 'react'
import Lottie from 'react-lottie'
import SatelliteJson from '@/public/lottie-assets/satellite.json'
import ContactForm from '../sub/ContactForm'

const lottieAnimDefaultOptions={
        loop: true,
        autoplay: true,
        // muted:true,
        animationData: SatelliteJson,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
}

const ContactPage = () => {
  return (
        <section
     id='contact-me'
     className=' flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-10 z-[40]'
     style={{transform:"scale(0.9)"}}
     >
     <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center py-20'>
       {`Okay, that's me!`} <br/> {`Now it's your turn to say hi.`} 
    </h1> 
    <ContactForm/>
    <div className='w-full h-full absolute'>
          <div className='w-full h-full z[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
            <Lottie options={lottieAnimDefaultOptions} height={1000} width={1000}/>
          </div>
         
    </div>
     </section>
  )
}

export default ContactPage