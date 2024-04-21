import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[#000] bg-opacity-50 rounded-lg px-7 py-20 z-40 flex flex-col items-center justify-center w-[70%] max-sm:w-[100%]'>
      <input className='bg-transparent border-b-2 border-b-white w-[70%] outline-none text-white mb-10 z-40' placeholder='Name' type='text'/>
      <input className='bg-transparent border-b-2 border-b-white w-[70%] outline-none text-white mb-10' placeholder='Email' type='email'/>
      <textarea className='bg-transparent border-2 border-white w-[70%] outline-none text-white mb-10 h-[250px] p-2 overflow-auto resize-none' placeholder='Write me a message'></textarea>
      <button className='button-64' role="button"><span className="text">Send Message</span></button>
      <p className='text-[0.8rem] text-[#eee]'>or email me at: <a className='cursor-pointer underline font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500' href='mailto:hrishikeshghoshofficial@gmail.com'>hrishikeshghoshofficial@gmail.com</a></p>
    </div>
  )
}

export default ContactForm