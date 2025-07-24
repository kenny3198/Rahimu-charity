"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Image1 from "../public/assets/rahim-car.png"
import Image2 from "../public/assets/rahim-car2.png"
import Image3 from "../public/assets/rahim-car3.png"
import Image4 from "../public/assets/rahim-car.png"
import Image5 from "../public/assets/carousel1.png"
import Image6 from "../public/assets/carousel2.png"

const About = () => {
  return (
    <div id='about' className='flex flex-col px-4'> 
    <h1 className='text-3xl text-center font-extrabold  md:text-5xl mb-4 mt-4 text-amber-900'>About Us</h1>
      <motion.div 
                     initial={{opacity:0,scale:0.5}}
                     whileInView={{opacity:1,scale:1}}
                     transition={{duration:1.5, delay:0.5}} 
       className='md:grid md:grid-cols-3 grid grid-cols-2 gap-3'>
        <Image className='rounded-full' src={Image1} alt='image1'/>
        <Image className='rounded-full' src={Image2} alt='image1'/>
        <Image className='rounded-full' src={Image3} alt='image1'/>
        <Image className='rounded-full' src={Image4} alt='image1'/>
         <Image className='rounded-full' src={Image5} alt='image1'/>
          <Image className='rounded-full' src={Image6} alt='image1'/>
           
     </motion.div>
     <div className='text-xl text-center font-cursive2 px-2 mt-3 text-amber-900'>
        
         <motion.h4 
               initial={{opacity:0,scale:0.5}}
                     whileInView={{opacity:1,scale:1}}
                     transition={{duration:1.5, delay:0.5}} 
               className='mt-4 text-sm md:text-xl'>
Rahimu Association for Care and Charity was founded
 by Mr. Rahim in honor of his late father, with a vision
  of uplifting the most vulnerable members of society.
   Established to provide comprehensive care and support 
   to orphans, widows, the needy, and women in difficult 
   circumstances, Rahimu Association has become a beacon 
   of hope for thousands. The association focuses on addressing 
   critical needs such as orphan sponsorship, 
medical assistance, educational support, 
and empowerment programs that help transform lives and create
 sustainable development in the communities it serves.

From its inception, Rahimu Association 
has been guided by principles of compassion,
 dignity, and social justice. With a mission deeply
  rooted in serving humanity, the association has impacted 
  countless lives, offering a brighter future to those who
   have been overlooked or marginalized.
    Whether it is providing daily essentials, 
    ensuring access to education, or offering life-changing medical 
    interventions, Rahimu Association works tirelessly to ensure 
    that no one is left behind.</motion.h4>
     </div>
    </div>
  )
}

export default About
