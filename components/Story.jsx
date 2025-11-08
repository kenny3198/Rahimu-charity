
"use client"; 
import ImageCar1 from "../public/assets/carousel1.png"
import ImageCar2 from "../public/assets/carousel2.png"
import ImageCar3 from "../public/assets/carousel3.png"
import ImageCar4 from "../public/assets/carousel4.png"
import ImageCar5 from "../public/assets/carousel5.png"
import ImageCar6 from "../public/assets/carousel6.png"
import ImageCar7 from "../public/assets/carousel7.png"
import ImageCar8 from "../public/assets/carousel8.png"
import ImageCar9 from "../public/assets/carousel9.png"
import image10 from "../public/assets/new-rahim1.jpg"
  import image11 from "../public/assets/new-rahim2.jpg"
    import image12 from "../public/assets/new-rahim3.jpg"
     import image13 from "../public/assets/new-rahim4.jpg"
     import image14 from "../public/assets/new-rahim5.jpg"
    import image15 from "../public/assets/new-rahim6.jpg"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const stories = [
   {
    id: 1,
    image: image10, 
    location: "Kotikylantie 4 F 8502770Espoo Finland"
  
  },
   {
    id: 2,
    image: image11, 
    location: "Kotikylantie 4 F 8502770Espoo Finland"
  
  },
   {
    id: 3,
    image: image12, 
    location: "Kotikylantie 4 F 8502770Espoo Finland"
  
  },
   {
    id: 4,
    image: image13, 
    location: "Kotikylantie 4 F 8502770Espoo Finland"
  
  },
   {
    id: 5,
    image: image14, 
    location: "Kotikylantie 4 F 8502770Espoo Finland"
  
  },
  {
    id: 6,
    image: image15, 
    location: "Kotikylantie 4 F 8502770Espoo Finland"
  
  },
  {
    id: 7,
    image: ImageCar2,
    location: "Kotikylantie 4 F 8502770Espoo Finland"
  },
  {
    id: 8,
    image: ImageCar3,
   location: "Kotikylantie 4 F 8502770Espoo Finland"
  },
  {
    id: 9,
    image: ImageCar4,
    location: "P.O.Box KS 16203- Adu Kumasi - Ghana"
    
  },
  {
    id: 10,
    image: ImageCar5,
    location: "P.O.Box KS 16203- Adu Kumasi - Ghana"
    
  },
  {
    id: 11,
    image: ImageCar6,
    location: "P.O.Box KS 16203- Adu Kumasi - Ghana"
    
  },
   {
    id: 12,
    image: ImageCar7,
    location: "P.O.Box KS 16203- Adu Kumasi - Ghana"
    
  },
   {
    id: 13,
    image: ImageCar8,
    location: "P.O.Box KS 16203- Adu Kumasi - Ghana"
    
  },
   {
    id: 14,
    image: ImageCar9,
    location: "P.O.Box KS 16203- Adu Kumasi - Ghana"
    
  },
];

const StoryCarousel = ({ autoPlayInterval = 5000, itemsPerPage = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const totalPages = Math.ceil(stories.length / itemsPerPage);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) {
        newIndex = totalPages - 1;
      } else if (newIndex >= totalPages) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  useEffect(() => {
    let interval;
    if (autoPlayInterval > 0) {
      interval = setInterval(() => {
        if (!carouselRef.current || !carouselRef.current.matches(':hover')) {
          paginate(1);
        }
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, autoPlayInterval, totalPages]);

  const getVisibleStories = () => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return stories.slice(startIndex, endIndex);
  };

  return (
    <div id="story" className="relative w-11/12 max-w-6xl mx-auto py-10 text-center" ref={carouselRef}>
      <h2 className="text-4xl md:text-5xl mb-4 font-extrabold text-amber-900 mb-2">
      Our Story</h2>
    

      <div className="relative flex items-center justify-center min-h-[400px]">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-6 w-full px-12 absolute inset-0 place-items-center"
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={currentIndex % 2 === 0 ? 1 : -1} // Simple alternating direction
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {getVisibleStories().map((story) => (
              <motion.div
                key={story.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden
                 flex flex-col h-full transform transition-transform 
                 duration-200 hover:scale-[1.03]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
              <img
                src={typeof story.image === 'object' && story.image !== null ? story.image.src : story.image}
                                  alt={story.location}
                                  className="w-full h-48 object-cover"
                                />
                <img src={story.image} alt={story.location} className="w-full
                 h-48 object-cover" />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  {/* <p className="italic text-gray-700 mb-4
                   leading-relaxed text-base">"{story.quote}"</p> */}
                   <div>
                          <p className="italic text-amber-900 mb-4
                           leading-relaxed text-base">{story.location}</p>  
                   </div>
                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-700 bg-opacity-70 text-white p-3 rounded-full shadow-lg z-10 text-3xl leading-none flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-colors"
          onClick={() => paginate(-1)}
          aria-label="Previous story"
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-700 bg-opacity-70 text-white p-3 rounded-full shadow-lg z-10 text-3xl leading-none flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-colors"
          onClick={() => paginate(1)}
          aria-label="Next story"
        >
          &#10095;
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`w-3 h-3 rounded-full bg-gray-400 cursor-pointer transition-all duration-300 ${currentIndex === dotIndex ? 'bg-blue-600 scale-125' : ''}`}
            onClick={() => setCurrentIndex(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
          ></span>
        ))}
      </div>
      <div>
      <motion.p initial={{opacity:0,scale:0.5}}
                     whileInView={{opacity:1,scale:1}}
                     transition={{duration:1.5, delay:0.5}} 

       className='md:text-xl text-sm text-center font-cursive2 px-2 mt-3 text-amber-900'>The story of Rahimu Association for Care and 
        Charity, established over 21 years ago, began with
         a single act of love and remembrance. Founded by
          Mr. Rahim in honor of his late father, the
           association has been dedicated for more
            than two decades to giving back to the
             community and making a significant difference
              in the lives of those who need it most. Inspired
               by his father's compassion and commitment to
                helping others, Mr. Rahim created the Rahimu
                 Association with one central goal: to care for 
                 and uplift orphans, widows, and the needy,
                  offering them hope and a chance at a better future.

It all started as a small initiative, with Mr. Rahim 
personally funding programs to assist orphans and support 
vulnerable women in local communities. As time went on, 
the need for more comprehensive support became clear, 
and the association grew in both scope and impact.
 What began as a heartfelt tribute evolved into a 
 fully-fledged charitable organization with a far-reaching 
 mission to empower the most disadvantaged members of society.

Rahimu Association’s journey has been marked by a steadfast
 commitment to the values that guided Mr. Rahim's father: 
 compassion, service, and a belief in the dignity of every 
 individual. Over the years, the association has expanded
  its programs to include orphan sponsorship, medical 
  assistance, educational support, and empowerment
   initiatives designed to foster self-reliance among widows and the needy.

Today, Rahimu Association stands as a beacon of hope, 
touching thousands of lives with its programs and making
 a tangible difference in the communities it serves.

The association’s story is one of unwavering dedication
 to serving humanity, built on the legacy of a man who
  believed that no child should grow up without care,
   no widow should be left unsupported, and no individual
    should face life’s hardships alone. Rahimu Association’s
     story is one of transformation, both for those who receive
      help and those who give it. Every project, every orphan 
      sponsored, every widow empowered, and every life touched is
       a continuation of this story—a testament to the power of
        kindness and the belief that together, we can build a
         brighter future for all. 

Rahimu Association is proud of its roots, its mission,
 and the community it serves. This story is still unfolding, 
 with every new initiative and every smile of gratitude 
 pushing the organization closer to fulfilling its vision 
 of a world where no one is left behind.</motion.p>
      </div>
    </div>
  );
};

export default StoryCarousel;