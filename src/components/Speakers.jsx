import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { benefits } from "../constants";
import Section from "./Section";
import { heroBackground, linkedin } from "../assets";
import LampContainer from "./LampContainer";

const mergeClasses = (...classes) => classes.filter(Boolean).join(' ');

const SpeakerHeading = () => {
  return (
    <motion.h1
      initial={{ opacity: 0.5, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="text-3xl md:h2 mb-2  text-center tracking-tight relative z-10"
    >
      Spotlight Speakers
    </motion.h1>
  );
};

// Card Component
const SpeakerCard = ({ index, title, text, image, organization, link, containerRef }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "start start"],
  });

  return (
    <motion.div
      ref={cardRef}
      className="w-[75%] sm:w-full max-w-4xl mx-auto px-1 sm:px-2 md:px-6 mb-6 sm:mb-12 md:mb-24"
      style={{
        position: "sticky",
        top: `${window.innerWidth < 640 ? index * 5 + 10 : index * 3 + 50}px`,
      }}
    >
      <motion.div
        className="bg-gradient-to-br from-purple-900/90 to-purple-700/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden transform-gpu"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          bounce: 0.3,
          duration: 0.7,
        }}
      >
        <div className="flex flex-col-reverse sm:flex-row items-center">
          <div className="w-full sm:w-2/3 p-3 sm:p-4 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 md:mb-4 text-white/80">
              {title}
            </h2>
            <p className="text-purple-100/90 mb-2 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-lg leading-relaxed">
              {text}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-purple-200/80 text-xs sm:text-sm md:text-lg italic">
                {organization}
              </p>
              <a
                href={link}
                target="_blank"
                className="group flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-md sm:rounded-lg bg-purple-500/30 hover:bg-purple-300/40 transition-all duration-300 border border-purple-400/20"
              >
                <span className="text-purple-200 text-[10px] sm:text-xs md:text-sm font-medium">Connect</span>
                <img 
                  src={linkedin} 
                  width={12} 
                  height={12} 
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300 sm:w-[16px] sm:h-[16px] md:w-[20px] md:h-[20px]" 
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/3 h-[240px] md:h-64">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Cards Container Component
const SpeakerCards = ({ containerRef }) => {
  return (
    <div
      ref={containerRef}
      className="relative h-full overflow-auto overscroll-auto px-2 sm:px-4 pb-20 sm:pb-0"
      style={{ scrollbarWidth: "none" }}
    >
      {benefits.map(({ title, text, organization, imageUrl, link }, i) => (
        <SpeakerCard
          key={title}
          index={i}
          title={title}
          text={text}
          organization={organization}
          link={link}
          image={imageUrl}
          containerRef={containerRef}
        />
      ))}
     
      <div className="h-[100vh] sm:h-0"></div>
    </div>
  );
};

// Main Speaker Component
export default function Speaker() {
  const containerRef = useRef(null);

  return (
    <Section crosses className="!p-0">
      <div className="min-h-[100svh] relative overflow-hidden flex flex-col" id="speakers">
     
         {/* <div 
          className="absolute inset-0 w-full h-full z-0"
        />
        <video src={heroBackground} autoPlay muted loop className="absolute inset-0 w-full h-full opacity-30 object-cover z-0" />
    
        <div 
          />  */}

        <div className="sticky top-[60px] z-20 pt-1  w-full">
          <SpeakerHeading />
        </div>
        
        <div className="sm:block absolute inset-0 z-[2] h-[30vh] sm:h-[45vh] md:h-[50vh] md:top-0  top-[-200px]">
          <LampContainer className="w-full h-full" />
        </div>

        <div className="w-full relative z-[3] h-[85vh] sm:h-[20vh] md:h-[50vh] mt-32 sm:mt-4 md:mt-auto">
          <SpeakerCards containerRef={containerRef} />
        </div>
      </div>
    </Section>
  );
}