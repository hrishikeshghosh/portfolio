"use client"
import { myProjects } from '@/constants/ProjectsData'
import React, { useState } from 'react'
import ProjectCard from '../sub/ProjectCard'
import ProjectModal from '../sub/ProjectModal'

const Projects = () => {
  const [openModal, setOpenModal]=useState(false)
  const [modalIndex, setModalIndex]=useState(Number)


  const handleClose=()=>{
    setOpenModal(false) 
  }

  const handleOpenModal=(index:number)=>{
    setOpenModal(true)
    setModalIndex(index)
    
  }
 
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-10'>
      {openModal &&  <ProjectModal 
      src={myProjects[modalIndex].banner}
      title={myProjects[modalIndex].title}
      desc={myProjects[modalIndex].desc}
      url={myProjects[modalIndex].url}
      handleClose={handleClose}
      />}
     

      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>

      <div className='h-full w-full flex flex-col md:flex-row flex-wrap justify-center gap-10 px-10'>
        {myProjects.map((projectData,index)=> 
        <ProjectCard 
        key={projectData.title} 
        title={projectData.title} 
        desc={projectData.desc.substring(0,100)+"..."}
        src={projectData.banner}
        onClick={()=>handleOpenModal(index)}
        />
        )}
      </div>
    </div>
  )
}

export default Projects