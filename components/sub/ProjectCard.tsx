"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

interface Props{
    title:string,
    desc:string,
    src:string
    onClick:any
}
 

const ProjectCard = ({title, desc, src,onClick}:Props) => {
  return (
    <div className='w-[300px] z-40 relative overflow-hidden rounded-lg shadow-lg border border-[#2A0e61] cursor-pointer'
    onClick={onClick}
    >
        <Image 
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className='w-full object-contain'
        />
        
        <div className='relative p-4'>
            <h2 className='text-2xl font-semibold text-white'>{title}</h2>
            <p className='mt-2 text-gray-300'>{desc}</p> 
        </div> 
    </div>
  )
}

export default ProjectCard