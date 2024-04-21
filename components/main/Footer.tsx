"use client" 


import React from 'react'
import { FaDiscord,FaLinkedin,FaGithubSquare,FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-center gap-8 flex-wrap'>
                
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Community</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer z-40'
                     onClick={()=>{
                        window.open("https://www.linkedin.com/in/hrishikesh-ghosh-45b158233/")
                    }}>
                        <FaLinkedin/>
                        <span className='text-[15px] ml-[6px]'>LinkedIn</span> 
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer z-40'
                    onClick={()=>{
                        window.open("https://discord.com/channels/hrishi3083")
                    }}>
                        <FaDiscord/>
                        <span className='text-[15px] ml-[6px]'>Discord</span> 
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer z-40'
                    onClick={()=>{
                        window.open("https://github.com/hrishikeshghosh")
                    }}>
                    
                        <FaGithubSquare/>
                        <span className='text-[15px] ml-[6px]'>Github</span> 
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer z-40'
                    onClick={()=>{
                        window.open("https://madalgos.slack.com/team/U04EABK1MDM")
                    }}>
                        <FaSlack/>
                        <span className='text-[15px] ml-[6px]'>Slack</span> 
                    </p>
                </div>

                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'>Quick Links</div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer z-40'>
                        <a href='#about-me' className='text-[15px] ml-[6px]'>About Me</a> 
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer z-40'>
                        <a href='#skills' className='text-[15px] ml-[6px]'>Skills</a> 
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer z-40'>
                        <a href='#projects' className='text-[15px] ml-[6px]'>Projects</a> 
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer z-40'>
                        <a href='#contact-me' className='text-[15px] ml-[6px]'>Contact Me</a> 
                    </p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Footer