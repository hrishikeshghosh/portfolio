"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Admin = () => {
  
  const [messages, setMessages]=useState([])
  const [loading, setLoading]=useState(false)

  useEffect(()=>{
    (async function(){
      try {
      setLoading(true)
      const data=await axios.get('/api/get-message')
      if(data.status===200){
        setMessages(data.data.data)
        setLoading(false)
      }
      
      } catch (error) {
        toast.error("Something went wrong!")
        console.log(error)
        setMessages([])
      }

    })()
  },[])

  return (
    <main className='mt-[3em] w-full h-auto py-20 px-10 flex flex-col items-center justify-center max-sm:block  box-border' >
      {loading? <h2 className='text-white font-bold Welcome-text'>Loading...</h2>:       
      <table className='w-full bg-white bg-opacity-50 rounded'>
       <thead>
        <tr >
          <th className='p-2'>Sl No</th>
          <th className='p-2'>Name</th>
          <th className='p-2'>Email</th>
          <th className='p-2'>Message</th>
        </tr>
       </thead>
       <tbody>
        {messages.map((eachMessage:any,index:number)=> {
          return (
        <tr key={eachMessage?.id}>
          <td className='text-center border-t-2 border-black p-4 font-semibold'>{index+1}</td>
          <td className='text-center border-t-2 border-black p-4 font-semibold'>{eachMessage?.name}</td>
          <td className='text-center border-t-2 border-black p-4 font-semibold'>{eachMessage?.email}</td>
          <td className='text-center border-t-2 border-black p-4 font-semibold text-wrap'>{eachMessage?.message}</td> 
        </tr>
          )
        })}

       </tbody>


 
      </table>}

    </main>
  )
}

export default Admin