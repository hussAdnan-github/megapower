'use client'
import React from 'react'
import { motion } from "framer-motion";
import { fadIn } from '@/lib/frameMotion';
 
export default function MainTitle({ title }) {
  return (
   <div  >
     <motion.h2  
    variants={fadIn('up',0.1)}
    initial='hidden'
    whileInView={'show'}
    viewport={{once:false , amount:0.1}}
      className="text-3xl md:text-4xl font-bold text-center   mb-12">
      {title}
    </motion.h2 >
   </div>
  )
}
