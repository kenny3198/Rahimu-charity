"use client"
import React from 'react'
import Bg from "../public/assets/rahim-hero.png"
import Image from 'next/image'
import { motion } from 'framer-motion'
const Hero = () => {
  
  return (
     <div className="w-full h-screen relative overflow-hidden 
     flex items-center justify-center" >
      <Image 
         src={Bg} alt='image-hero' 
         layout='fill' objectFit='cover'
     
         quality={100} priority={true}/>

         <motion.div 
          initial={{opacity:0,scale:0.5}}
                         whileInView={{opacity:1,scale:1}}
                         transition={{duration:1.5, delay:0.5}} 
         className='relative z-10 text-3xl  
          md:text-5xl font-extrabold text-gray-100 mb-2'>
              <div className='flex flex-col gap-3'>
                 <h1 className='md:text-4xl text-3xl text-center mb-3'>Rahimu Association for care and Charity</h1>
                </div> 
                <div>
                  <h2 className='text-2xl text-center'>uplifting the most
                     vulnerable members of society.</h2>
                     </div>            
         </motion.div>

    </div>
  )
}

export default Hero