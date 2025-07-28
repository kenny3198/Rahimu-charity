"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};


 const partnersDescription = 
"We collaborate with a diverse network of NGOs, government agencies, corporate sponsors, and local community leaders. Our partnerships are the backbone of our ability to scale impact and deliver effective, sustainable solutions where they're needed most. Together, we amplify change.";
const OurPartner = () => {

  return (
    <section id='partner' className="bg-gradient-to-br from-blue-50 
    to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className=" gap-8 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Animate when 30% of component is in view
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }, // Stagger animation for child cards
          }}
        >
          {/* Partners Overview */}
          <motion.div
            className="md:col-span-2 lg:col-span-1 xl:col-span-1 bg-white
             p-8 rounded-xl shadow-lg border border-purple-100 flex 
             flex-col justify-between"
            variants={cardVariants}
          >
            <h3 className="md:text-3xl text-2xl font-bold
             text-amber-900 mb-4 flex items-center">
              🤝 Our Partners
            </h3>
            <p className="md:text-lg text-sm text-amber-900 leading-relaxed 
            mb-2 flex-grow">
              {partnersDescription}
            </p>
            <Link
              href="#contact" // Link to a page for potential partners or a contact form
              className="mt-auto inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors text-lg"
            >
              Learn More about Partnering &rarr;
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-20 text-center">
          <h3 className="md:text-3xl text-2xl font-extrabold text-amber-900 mb-6">
            Join Our Mission to Create Lasting Impact
          </h3>
          <p className="md:text-xl text-sm text-amber-900 mb-10 max-w-3xl mx-auto leading-relaxeEvery contribution, big or small, helps us extend our reach and deepen our impact in vulnerable communities across Oko Erin, Kwara, and beyond.">
          <Link
            href="#donate"
            className="inline-block bg-amber-900 text-white font-bold
             py-3 px-8 md:py-4 md:px-10 rounded-full md:text-lg text-sm 
             shadow-xl hover:bg-blue-700 hover:scale-105
              transition-all duration-300 hover:bg-white hover:text-amber-900"
           
          >
            Support Our Work
          </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;