// Hero.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CarouselImage from './CarouselImage'; // ⬅️ Import the dedicated image component

// --- CAROUSEL DATA (Using string paths relative to the public directory) ---
const carouselData = [
    // Ensure all these paths exactly match your files in public/assets/
    { image: "/assets/rahim-herobg1.png", title: "Rahimu Association for Care and Charity", subtitle: "Uplifting the most vulnerable members of society." },
    { image: "/assets/rahim-herobg2.png", title: "Empowering Lives Through Community", subtitle: "Bringing hope and support to those in need." },
    { image: "/assets/rahim-herobg3.png", title: "Dedicated to Making a Difference", subtitle: "Working tirelessly for a brighter future." },
    { image: "/assets/rahim-herobg4.png", title: "Join Our Mission of Compassion", subtitle: "Your support creates lasting change." },
    { image: "/assets/new-rahim1.jpg", title: "We Are Building a Better Future", subtitle: "Support our construction projects for schools and wells." },
    { image: "/assets/new-rahim2.jpg", title: "Compassion in Action", subtitle: "Providing essential aid to families." },
    { image: "/assets/new-rahim3.jpg", title: "Community Development", subtitle: "Investing in education and health." },
    { image: "/assets/new-rahim4.jpg", title: "Making an Impact", subtitle: "Your donations directly help those in need." },
    { image: "/assets/new-rahim5.jpg", title: "A Helping Hand", subtitle: "Supporting orphans and the elderly." },
    { image: "/assets/new-rahim6.jpg", title: "Sustainable Change", subtitle: "Creating long-term solutions for poverty." },
    { image: "/assets/new-rahim7.jpg", title: "Serving the Vulnerable", subtitle: "Reaching remote communities with aid." },
    { image: "/assets/new-rahim8.jpg", title: "Hope for Tomorrow", subtitle: "Empowering youth through skills training." },
    { image: "/assets/new-rahim9.jpg", title: "Water for Life", subtitle: "Building clean water sources in dry areas." },
    { image: "/assets/new-rahim10.jpg", title: "Nourishing the Future", subtitle: "Food security and nutritional support." },
    { image: "/assets/new-rahim11.jpg", title: "Educational Outreach", subtitle: "Providing school supplies and resources." },
    { image: "/assets/new-rahim12.jpg", title: "Health and Wellness", subtitle: "Access to medical care for all." },
    { image: "/assets/new-rahim13.jpg", title: "Volunteers Making a Difference", subtitle: "Join our dedicated team today." },
    { image: "/assets/new-rahim14.jpg", title: "Shelter and Safety", subtitle: "Rebuilding homes for displaced families." },
    { image: "/assets/new-rahim15.jpg", title: "Harvesting Success", subtitle: "Agricultural projects boosting local economies." },
    { image: "/assets/new-rahim16.jpg", title: "Spreading Kindness", subtitle: "Every act of charity matters." },
    { image: "/assets/new-rahim17.jpg", title: "Together We Rise", subtitle: "Partnering with local leaders for development." },
    { image: "/assets/new-rahim18.jpg", title: "Faith and Service", subtitle: "Guided by compassion and charity." },
    { image: "/assets/new-rahim19.jpg", title: "Global Impact", subtitle: "Our reach extends to those who need it most." },
    { image: "/assets/new-rahim20.jpg", title: "Your Generosity Changes Lives", subtitle: "Donate today and be part of the change." },
];


// Framer Motion variants for text
const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
};

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance the carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 5000); 

        return () => clearInterval(timer);
    }, []);

    const slide = carouselData[currentSlide];

    return (
        <div className="w-full h-screen relative overflow-hidden">
            
            {/* 🔑 Image Component separated for stability within AnimatePresence */}
            <AnimatePresence mode="wait">
                <CarouselImage 
                    key={slide.image} // Key is essential for AnimatePresence transitions
                    src={slide.image} 
                    alt={`Hero image ${currentSlide + 1}`}
                />
            </AnimatePresence>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Text Content Container (Centered) */}
            <motion.div
                key={`text-${currentSlide}`}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.7, delay: 0.3 }} 
                className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center text-white p-4"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-3 drop-shadow-md">
                    {slide.title}
                </h1>
                <h2 className="text-xl md:text-2xl font-medium max-w-4xl drop-shadow-md">
                    {slide.subtitle}
                </h2>
            </motion.div>
        </div>
    );
};

export default Hero;