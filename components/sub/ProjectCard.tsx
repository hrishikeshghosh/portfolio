"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  title: string,
  type: string,
  desc: string,
  src: string
  onClick: any
}


const ProjectCard = ({ title, desc, src, onClick, type }: Props) => {
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
        <h2 className='text-2xl font-semibold text-white text-center'>{title}</h2>
        <p className='text-xs font-regular text-white text-center'>{type}</p>
        {/* <div dangerouslySetInnerHTML={{ __html: desc }} style={{ color: "white", width: '100%' }}></div> */}
      </div>
    </div>
  )
}

export default ProjectCard