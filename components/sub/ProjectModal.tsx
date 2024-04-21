"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Backdrop from './Backdrop'
import StarsCanvas from '../main/StartBackground'
import { slideInFromTop } from '@/utils/motions'
import Image from 'next/image'
import ClickAwayListener from 'react-click-away-listener'

interface Props{
  handleClose:any,
  src:string,
  title:string,
  desc:string,
  url:String
}


const ProjectModal = ({handleClose, src, title, desc, url}:Props) => {


  return (
    <Backdrop>
    <ClickAwayListener onClickAway={handleClose}>
    <motion.div 
      className='w-[700px] max-sm:w-[90%] h-[90%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-auto m-auto rounded-lg flex flex-col items-start bg-[#000]  border-[5px] border-[#fff]'
      variants={slideInFromTop}
      >
        <StarsCanvas/>
        <Image 
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
        />
        <div className='relative p-4'>
            <h2 className='text-2xl font-semibold text-white'>{title}</h2>
            <p className='mt-2 text-gray-300 text-left text-[0.9rem]'>{desc}</p>
        </div>
        <button className="button-64" role="button" onClick={()=>{
          window.open(String(url))
        }}><span className="text">Visit Project</span></button>
      </motion.div>
      </ClickAwayListener>
  
     
    </Backdrop>
  )
}

export default ProjectModal

 
