"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
  // These sponsorships cover essential needs such as food, clothing, shelter, education, and healthcare. By pairing each orphan with a sponsor, Rahimu Association ensures that every child grows up in a nurturing and supportive environment
  
  // The organization runs medical support programs that offer essential healthcare services to orphans, widows, and the needy, including regular check-ups, emergency care, and access to medications. By ensuring that vulnerable populations have access to life-saving medical care, Rahimu Association improves overall community health
  // ensuring that they have equal opportunities to succeed academically. Additionally, Rahimu Association offers vocational training programs to empower young people with skills that can lead to sustainable livelihoods
// By investing in the emotional and intellectual growth of orphans, the association is building future leaders and change-makers
  programs: [
    { id: 1, title: "Orphan Sponsorship", description:"Rahimu Association provides orphan sponsorship programs that ensure that children who have lost their parents are supported both financially and emotionally. .", icon: "💧" },
    { id: 2, title: "Medical Support", description:"Access to healthcare is a fundamental right that Rahimu Association strives to provide. .", icon: "📚" },
    { id: 3, title: "Educational Support", description:"Education is the key to breaking the cycle of poverty, and Rahimu Association places a strong emphasis on educational support. The association provides school supplies, tuition fees, and uniforms to orphaned and underprivileged children, .", icon: "🩺" },
    { id: 4, title: "Orphan Empowerment Programs", description: "Beyond basic sponsorship, Rahimu Association offers programs aimed at empowering orphans to become confident, independent individuals. These programs provide psychological support, mentorship, and life skills training to prepare them for adulthood. .", icon: "🌱" }
  ]
};

 const partnersDescription = 
"We collaborate with a diverse network of NGOs, government agencies, corporate sponsors, and local community leaders. Our partnerships are the backbone of our ability to scale impact and deliver effective, sustainable solutions where they're needed most. Together, we amplify change.";
const OurPartner = () => {
  const { mission, vision, team, programs,} = missionVisionProgram;

  return (
    <section id='partner' className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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
            className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 flex flex-col justify-between"
            variants={cardVariants}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-4xl mr-3">{mission.icon}</span> {mission.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">{mission.description}</p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-indigo-100 flex flex-col justify-between"
            variants={cardVariants}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-4xl mr-3">{vision.icon}</span> {vision.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">{vision.description}</p>
          </motion.div>
          {/* Team card */}
           <motion.div
            className="bg-white p-8 rounded-xl shadow-lg border border-indigo-100 flex flex-col justify-between"
            variants={cardVariants}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="text-4xl mr-3">{team.icon}</span> {team.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">{team.description}</p>
          </motion.div>

          {/* Programs Overview */}
          <motion.div
            className="md:col-span-2 lg:col-span-1 xl:col-span-1 bg-white p-8 rounded-xl shadow-lg border border-green-100 flex flex-col"
            variants={cardVariants}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Programs</h3>
            <div className="space-y-4 flex-grow">
              {/* Display top 3 programs, or adjust slice based on your preference */}
              {programs.slice(0, 3).map((program) => (
                <div key={program.id} className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">{program.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{program.title}</h4>
                    <p className="text-md text-gray-600">{program.description}</p>
                  </div>
                </div>
              ))}
              {/* Optional: Add a note if there are more programs */}
              {programs.length > 3 && (
                  <p className="text-md text-gray-600 mt-4">
                      And many more initiatives focused on sustainable development.
                  </p>
              )}
            </div>
          </motion.div>

          {/* Partners Overview */}
          <motion.div
            className="md:col-span-2 lg:col-span-1 xl:col-span-1 bg-white p-8 rounded-xl shadow-lg border border-purple-100 flex flex-col justify-between"
            variants={cardVariants}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
              🤝 Our Partners
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-2 flex-grow">
              {partnersDescription}
            </p>
            <a
              href="/contact" // Link to a page for potential partners or a contact form
              className="mt-auto inline-block text-blue-600 hover:text-blue-800 font-semibold transition-colors text-lg"
            >
              Learn More about Partnering &rarr;
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-6">
            Join Our Mission to Create Lasting Impact
          </h3>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxeEvery contribution, big or small, helps us extend our reach and deepen our impact in vulnerable communities across Oko Erin, Kwara, and beyond.">
          <motion.a
            href="/donate"
            className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Support Our Work
          </motion.a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;