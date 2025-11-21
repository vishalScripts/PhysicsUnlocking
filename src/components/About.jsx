import React from 'react'
import modelImg from "../assets/model2.png";

function About() {
  return (
    <div className='w-full bg-[#CDEFFF]  py-4'>
      
      <div className='container flex gap-2 m-auto'> 
        <div className=' h-full cursor-pointer w-65 aspect-square bg-[#00B5FF] rounded-2xl'>
          <img className='w-full h-full object-center object-contain' src={modelImg} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default About