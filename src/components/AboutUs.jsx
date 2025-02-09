import Section from "./Section";

import { motion } from "framer-motion";


import { forTheseIndustries, conferenceTheme} from "../constants";
import {
  
  Gradient,
  
} from "./design/Services";
import {  service3 } from "../assets";


const AboutUs = () => {
  return (

    <Section crosses id="about" >
       
     <Gradient/>
      
     <div className="container">
        
        <div className="relative z-1 flex flex-col items-center min-h-[20rem] mb-5 p-4 border border-n-1/10 rounded-3xl overflow-hidden 
          sm:p-6 
          md:min-h-[30rem] md:p-8 
          lg:p-20 lg:min-h-[39rem] 
          xl:min-h-[46rem]">
          <div className="relative z-1">
            
          <div className="container relative z-2">
        <motion.div 
          className={`max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <motion.h2 
            className="h2 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, screen: "50vh" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          >
            Summit At A Glance 
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, screen: 1000 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {[0, 1, 2].map((index) => (
              <p
                key={index}
                className="body-2 mt-4 text-n-2 text-center"
              >
                {index === 0 && "Saudi Arabia has announced a 100 billion USD initiative aimed at establishing itself as a majorplayer in artificial intelligence, data analytics, and advanced technology. The program, known asProject Transcendence, is focused on building state-of-the-art data centers, supporting startups, andexpanding AI infrastructure to drive both domestic growth and international competitiveness."}
                {index === 1 && "Currently, The Kingdom is laying the groundwork to become one of the top 15 countries in AI by theend of this decade. This includes initiatives to adopt AI domestically & ultimately position SaudiArabia as an exporter of AI solutions by 2030. Saudi Arabia's AI ambitions are rooted in its Vision2030 agenda, which outlines AI as a key pillar in the country's transition to a knowledge-basedeconomy. By prioritizing AI, the Kingdom hopes to cultivate new revenue streams outside of itstraditional reliance on oil."}
                {index === 2 && "Enterprises must identify use cases and adopt AI and data analytics in business operations to enhance customer experience, maximize productivity, generate revenue, optimize costs, and manage risks and fraud. To support this, Let's TalkB2B is organizing the 10th Middle East Enterprise AI & Analytics Summit & Awards 2025 in KSA. This event will showcase how the integration of data, analytics, and AI is revolutionizing industries, unlocking new insights, enhancing decision-making, and driving innovation. Register now to gain industry perspectives on integrating AI & Analytics, created by and for regional leaders."}
              </p>
            ))}
          </motion.div>
        </motion.div>

          </div>
        </div>
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none hidden md:block">
            <img
              className="w-full h-full object-contain object-left opacity-30"
              width={800}
              alt="Smartest AI"
              height={730}
              src={service3}
            />
          </div>
      </div>

        <div className="relative">
          

          <div id="theme" className="relative z-1 grid gap-5 lg:grid-cols-2">
           
<div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="py-8 md:py-12 px-2 sm:px-4 xl:px-8">
              <h4 className="h4 mb-8 md:mb-12 text-center">For These Industries</h4>
              
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8 sm:gap-6 md:gap-8 lg:gap-10 max-w-[330px] sm:max-w-none mx-auto">
                {forTheseIndustries.slice(0, 9).map((item, index) => (
                  <motion.li
                    key={index}
                    className="rounded-2xl flex items-center mb-5 justify-center relative w-[4rem] sm:w-[3rem] h-[4rem] sm:h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem] mx-auto cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5}}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 40px rgba(255,255,255,0.15)"
                    }}
                  >
                    <motion.div 
                      className="flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                      whileHover={{ backgroundColor: "#2B303B" }}
                      whileTap={{ backgroundColor: "#2B303B" }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img 
                        src={item.icon} 
                        width={24}
                        height={24}
                        alt={item.tag}
                        className="object-contain w-6 sm:w-5 md:w-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <motion.span 
                      className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-xs sm:text-xs md:text-sm font-medium text-gray-400 px-1"
                      whileHover={{ color: "#E5E7EB" }}
                      whileTap={{ color: "#E5E7EB" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </div>

            </div>

            
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="py-8 md:py-12 px-2 sm:px-4 xl:px-8">
              <h4 className="h4 mb-8 md:mb-12 text-center">Conference Theme</h4>
              
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8 sm:gap-6 md:gap-8 lg:gap-10 max-w-[330px] sm:max-w-none mx-auto">
                {conferenceTheme.slice(0, 9).map((item, index) => (
                  <motion.li
                    key={item}
                    className="rounded-2xl flex items-center mb-5 justify-center relative w-[4rem] sm:w-[3rem] h-[4rem] sm:h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem] mx-auto cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5}}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 40px rgba(255,255,255,0.15)"
                    }}
                    whileTap={{ 
                      scale: 1.1,
                      boxShadow: "0 0 40px rgba(255,255,255,0.15)"
                    }}
                  >
                    <motion.div 
                      className="flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                      whileHover={{ backgroundColor: "#2B303B" }}
                      whileTap={{ backgroundColor: "#2B303B" }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img 
                        src={item.icon} 
                        width={24}
                        height={24}
                        alt={item.name}
                        className="object-contain w-6 sm:w-5 md:w-6"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <motion.span 
                      className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-xs sm:text-xs md:text-sm font-medium text-gray-400 px-1"
                      whileHover={{ color: "#E5E7EB" }}
                      whileTap={{ color: "#E5E7EB" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </div>

            </div>
          </div>

          
        </div>
        
      </div>
     
     
    </Section>
    
  );
};

export default AboutUs;
