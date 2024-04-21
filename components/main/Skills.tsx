"use client"

import { Backend_skill, Frontend_skill, Other_skill } from '../../constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider' 
import SkillText from '../sub/SkillText'
import Lottie from 'react-lottie'
import astrounautJson from '../../public/lottie-assets/floating-astronaut.json'

const lottieAnimDefaultOptions={
        loop: true,
        autoplay: true,
        // muted:true,
        animationData: astrounautJson,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
}


const Skills = () => {
  return (
    <section
     id='skills'
     className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'
     style={{transform:"scale(0.9)"}}
     >
      <SkillText/>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
          {Frontend_skill.map((skill,index)=> 
          <SkillDataProvider 
          key={index} 
          height={skill.height} 
          width={skill.width} 
          src={skill.Image}  
          index={index} />)}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
          {Backend_skill.map((skill,index)=> 
          <SkillDataProvider 
          key={index} 
          height={skill.height} 
          width={skill.width} 
          src={skill.Image} 
          
          index={index} />)}
        </div>
                <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
          {Other_skill.map((skill,index)=> 
          <SkillDataProvider 
          key={index} 
          height={skill.height} 
          width={skill.width} 
          src={skill.Image} 
          
          index={index} />)}
        </div>
       
        <div className='w-full h-full absolute'>
          <div className='w-full h-full z[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
            <Lottie options={{
              animationData:astrounautJson
            }}/>
          </div>
         
        </div>
     </section>
  )
}


export default Skills