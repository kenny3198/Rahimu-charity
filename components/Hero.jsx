// "use client"
// import React from 'react'
// import Bg from "../public/assets/rahim-hero.png"
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// const Hero = () => {
 
//   return (
//      <div className="w-full h-screen relative overflow-hidden 
//      flex items-center justify-center" >
//       <Image 
//          src={Bg} alt='image-hero' 
//          layout='fill' objectFit='cover'
          
//          quality={100} priority={true} className='object-cover object-top'/>

//          <motion.div 
//           initial={{opacity:0,scale:0.5}}
//                          whileInView={{opacity:1,scale:1}}
//                          transition={{duration:1.5, delay:0.5}} 
//          className='relative z-10 text-3xl  
//           md:text-5xl font-extrabold text-gray-100 mb-2'>
//               <div className='flex flex-col gap-3'>
//                  <h1 className='md:text-4xl text-3xl text-center mb-3'>Rahimu Association for care and Charity</h1>
//                 </div> 
//                 <div>
//                   <h2 className='text-2xl text-center'>uplifting the most
//                      vulnerable members of society.</h2>
//                      </div>            
//          </motion.div>

//     </div>
//   )
// }

// export default Hero


// hero.jsx
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Replace with your actual image paths
// import Bg from "../public/assets/rahim-hero.png";
import Bg1 from "../public/assets/rahim-herobg1.png";
import Bg2 from "../public/assets/rahim-herobg2.png";
import Bg3 from "../public/assets/rahim-herobg3.png";
import Bg4 from "../public/assets/rahim-herobg4.png";

const carouselData = [
  {
    image: Bg1,
    title: "Rahimu Association for Care and Charity",
    subtitle: "Uplifting the most vulnerable members of society.",
  },
  {
    image: Bg2,
    title: "Empowering Lives Through Community",
    subtitle: "Bringing hope and support to those in need.",
  },
  {
    image: Bg3,
    title: "Dedicated to Making a Difference",
    subtitle: "Working tirelessly for a brighter future.",
  },
  {
    image: Bg4,
    title: "Join Our Mission of Compassion",
    subtitle: "Your support creates lasting change.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const slide = carouselData[currentSlide];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slide.image}
            alt={`Hero image ${currentSlide + 1}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0  z-10" />

      <motion.div
        key={`text-${currentSlide}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative z-20 text-center text-gray-100 p-4"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          {slide.title}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium">
          {slide.subtitle}
        </h2>
      </motion.div>
    </div>
  );
};

export default Hero;