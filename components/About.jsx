"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Image1 from "../public/assets/rahim-car.png"
import Image2 from "../public/assets/rahim-car2.png"
import Image3 from "../public/assets/rahim-car3.png"
import Image4 from "../public/assets/rahim-car.png"
// import Image5 from "../public/assets/carousel1.png"
// import Image6 from "../public/assets/carousel2.png"
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const missionVisionProgram = {
  mission: {
    title: "Our Mission",
    description: "Rahimu Association's mission is clear: to uplift and empower orphans, widows, and the needy by providing essential care, education, healthcare, and empowerment opportunities. The organization is dedicated to breaking the cycle of poverty by offering tangible, sustainable solutions that improve the quality of life for the most vulnerable.Through orphan sponsorships, medical aid, and educational support, Rahimu Association provides children and women with the tools they need to thrive. The mission extends beyond basic care—it seeks to empower individuals to become self-reliant, contributing members of society, thus fostering long-term growth and stability within their communities.",
       icon: "🚀" 
  },
  vision: {
    title: "Our Vision",
    description: "The vision of Rahimu Association is to create a world where no child is left behind, where every orphan and needy person has access to the care and support they need to lead a dignified life. Rahimu Association envisions a future where women, widows, and children are empowered to break free from the chains of poverty and live with hope, health, and opportunity.The organization aims to build a legacy of compassion and empowerment, creating self-sustaining communities where people are equipped with the resources to take control of their futures. This vision guides every initiative, project, and program, ensuring that the organization remains focused on creating a better, brighter world for all.",
    icon: "✨"
  },
   team: {
    title: "Our Team",
    description: "The success of Rahimu Association is driven by a dedicated and passionate team of professionals, volunteers, and experts who share a commitment to uplifting humanity. Led by Mr. Rahim, the team consists of social workers, healthcare professionals, educators, and community leaders, all of whom contribute their skills and expertise to create meaningful change.Each member of the Rahimu Association team plays a pivotal role in ensuring that the organization's goals are met with efficiency and care. From project managers to on-the-ground volunteers, everyone works collaboratively to ensure that every child, woman, and family in need receives the support they deserve. The team's deep connection to the communities they serve allows them to address challenges effectively and offer solutions that bring lasting impact.",
    icon: "✨"
  },
  
  programs: [
    { id: 1, title: "Orphan Sponsorship", description:"Rahimu Association provides orphan sponsorship programs that ensure that children who have lost their parents are supported both financially and emotionally. .", icon: "💧" },
    { id: 2, title: "Medical Support", description:"Access to healthcare is a fundamental right that Rahimu Association strives to provide. .", icon: " 🩺" },
    { id: 3, title: "Educational Support", description:"Education is the key to breaking the cycle of poverty, and Rahimu Association places a strong emphasis on educational support. The association provides school supplies, tuition fees, and uniforms to orphaned and underprivileged children, .", icon: "📚" },
    { id: 4, title: "Orphan Empowerment Programs", description: "Beyond basic sponsorship, Rahimu Association offers programs aimed at empowering orphans to become confident, independent individuals. These programs provide psychological support, mentorship, and life skills training to prepare them for adulthood. .", icon: "🌱" }
  ]

};



 const { mission, vision, team, programs,} = missionVisionProgram;

const About = () => {
  return (
    <div id='about' className='flex flex-col px-4'> 
    <h1 className='text-3xl text-center font-extrabold  md:text-5xl mb-4 mt-4 text-amber-900'>About Us</h1>
      <motion.div 
                     initial={{opacity:0,scale:0.5}}
                     whileInView={{opacity:1,scale:1}}
                     transition={{duration:1.5, delay:0.5}} 
       className='md:grid md:grid-cols-3 grid grid-cols-2 gap-3 px-3 py-4 pl-4'>
         {/* <Image className='rounded-full' src={Image5} alt='image1'/>
          <Image className='rounded-full' src={Image6} alt='image1'/> */}
          <Image className='rounded-full' src={Image3} alt='image1'/>
        <Image className='rounded-full' src={Image4} alt='image1'/>
        <Image className='rounded-full' src={Image1} alt='image1'/>
        <Image className='rounded-full' src={Image2} alt='image1'/>
        <Image className='rounded-full' src={Image3} alt='image1'/>
        <Image className='rounded-full' src={Image4} alt='image1'/>
        
           
     </motion.div>
     <div className='text-xl text-center font-cursive2 px-2 mt-3 text-amber-900'>
        
         <motion.h4 
               initial={{opacity:0,scale:0.5}}
                     whileInView={{opacity:1,scale:1}}
                     transition={{duration:1.5, delay:0.5}} 
               className='mt-4 mb-5 text-sm md:text-xl'>
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
      <section className="bg-gradient-to-br from-blue-50 
         to-indigo-50 py-16 md:py-24">
           <div className="container mx-auto px-6 max-w-7xl">
             <motion.div
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                xl:grid-cols-2 gap-8"
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }} // Animate when 30% of component is in view
               variants={{
                 hidden: {},
                 visible: { transition: { staggerChildren: 0.1 } }, // Stagger animation for child cards
               }}
             >
               {/* Mission Card */}
               <motion.div
                 className="bg-white p-8 rounded-xl shadow-lg border 
                 border-blue-100 flex flex-col justify-between"
                 variants={cardVariants}
               >
                 <h3 className="md:text-3xl text-sm font-bold
                  text-amber-900 mb-4 flex items-center">
                   <span className="md:text-4xl text-3xl mr-3">{mission.icon}</span> {mission.title}
                 </h3>
                 <p className="md:text-lg text-sm text-amber-900 leading-relaxed">{mission.description}</p>
               </motion.div>
     
               {/* Vision Card */}
               <motion.div
                 className="bg-white p-8 rounded-xl shadow-lg
                  border border-indigo-100 flex flex-col justify-between"
                 variants={cardVariants}
               >
                 <h3 className="md:text-3xl text-sm font-bold
                  text-amber-900 mb-4 flex items-center">
                   <span className="md:text-4xl text-3xl mr-3">{vision.icon}</span> {vision.title}
                 </h3>
                 <p className="md:text-lg text-sm text-amber-900 leading-relaxed">{vision.description}</p>
               </motion.div>
               {/* Team card */}
                <motion.div
                 className="bg-white p-8 rounded-xl shadow-lg border border-indigo-100 flex flex-col justify-between"
                 variants={cardVariants}
               >
                 <h3 className="md:text-3xl text-sm font-bold text-amber-900 mb-4 flex items-center">
                   <span className="md:text-4xl text-3xl mr-3">{team.icon}</span> {team.title}
                 </h3>
                 <p className="md:text-lg text-sm text-amber-900 leading-relaxed">{team.description}</p>
               </motion.div>
                <motion.div
                           className="md:col-span-2 lg:col-span-1 xl:col-span-1
                            bg-white p-8 rounded-xl shadow-lg border border-green-100 flex flex-col"
                           variants={cardVariants}
                         >
                           <h3 className="md:text-3xl text-2xl  font-bold text-amber-900
                           mb-6 text-center">Our Programs</h3>
                           <div className="space-y-4 flex-grow">
                             {/* Display top 3 programs, or adjust slice based on your preference */}
                             {programs.slice(0, 3).map((program) => (
                               <div key={program.id} className="flex items-start">
                                 <span className="md:text-2xl text-xl mr-3 flex-shrink-0">{program.icon}</span>
                                 <div>
                                   <h4 className="md:text-xl text-sm font-semibold text-amber-900">{program.title}</h4>
                                   <p className="md:text-md text-sm text-amber-900">{program.description}</p>
                                 </div>
                               </div>
                             ))}
                             {/* Optional: Add a note if there are more programs */}
                             {programs.length > 3 && (
                                 <p className="text-md text-amber-900 mt-4">
                                     And many more initiatives focused on sustainable development.
                                 </p>
                             )}
                           </div>
                         </motion.div>
       </motion.div>
           </div>
         </section>
    </div>
  )
}

export default About
