import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";


export default function Speaker() {
  const containerRef = useRef(null);

  return (
    <Section crosses id="speakers">
      <div className="min-h-screen">
        <div className="z-50  backdrop-blur-sm py-">
          <Heading className="text-center" title="Series Speaker" />
        </div>
        
        <div className="container mx-auto px-1">
          <div ref={containerRef} className="relative h-[100vh] overflow-auto overscroll-auto  w pt-28">
            {benefits.map(({ title, text, imageUrl, backgroundUrl }, i) => (
              <Card
                key={title}
                index={i}
                title={title}
                text={text}
                image={imageUrl}
                backgroundUrl={backgroundUrl}
                containerRef={containerRef}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Card({ index, title, text, image, backgroundUrl, containerRef }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "start start"],
  });

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-xl mx-auto"
      style={{
        position: "sticky",
        top: `${index * 3}px`, // Adjusted for fixed header
        marginBottom: "60vh", // Increased space between cards for smoother stacking
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
            className="w-full  p-8"
            style={{
             
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-white mb-6">{text}</p>
          </div>
          <div className="w-full md:w-1/2">
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
