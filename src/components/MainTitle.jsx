import React from 'react'

export default function MainTitle({ title }) {
  return (
   <div data-aos="fade-up">
     <h2  
      className="text-3xl md:text-4xl font-bold text-center   mb-12">
     
      {title}
    </h2>
   </div>
  )
}
