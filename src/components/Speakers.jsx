import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { linkedin, spotlight } from "../assets";


export default function Speaker() {
  const containerRef = useRef(null);

  return (
    <Section crosses id="speakers" className="h-[100vh] overflow-hidden">
      <div className="min-h-screen">
        <div className="z-50 backdrop-blur-sm "> {/* Reduced margin-bottom space */}
          <Heading className="text-center" title="Spotlight Speakers" />
         {/* <img src={spotlight} width={200} height={200} className="items-center" /> */}
         
        </div>
     
        <div className="w-full">
          
          <div
            ref={containerRef}
            className="relative h-[100vh] overflow-auto overscroll-auto " 
            style={{ scrollbarWidth: "none" }}
          >
            {benefits.map(({ title, text, imageUrl, link,  }, i) => (
              <Card
                key={title}
                index={i}
                title={title}
                text={text}
                link={link}
                image={imageUrl}
                
                containerRef={containerRef}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Card({ index, title, text, image, link,  containerRef }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "start start"],
  });

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-4xl mx-auto px-4 sm:px-6" 
      style={{
        position: "sticky",
        top: `${index * 3}px`,
        marginBottom: "calc(60vh + 3rem)", // Added 3rem (48px) of extra space below each card
      }}
    >
      <motion.div
        className="bg-purple-500 rounded-2xl border border-n shadow-xl overflow-hidden transform-gpu"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        }}
      >
        <div className="flex flex-col md:flex-row">
          <div
            className="w-full p-8 md:p-10"
            style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-5xl font-bold mb-4">{title}</h2>
            <p className="text-white mb-6 text-2xl">
              {text}
            </p>
            <a
             
              href={link}
              target="_blank"
              className="flex items-center justify-center w-[8rem] h-[2rem] bg-n-1 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={linkedin} width={80} height={80} className="object-contain" />
            </a>
            
          </div>
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}