import { motion } from "framer-motion";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";


const Speaker = () => {
  return (
    <Section crosses id="speakers">
      
      <GradientLight/>
      <div className="container relative z-2">
        <Heading
          className="text-center"
          title="Series Speaker"
        />

        <div  className="flex flex-wrap justify-center gap-10 mb-10">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:w-[14rem] group"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div style={{ clipPath: "url(#benefits)" }} className="justify-end text-center relative z-2 flex flex-col h-[16rem] w-[14rem] max-w-[14rem] duration-300 bg-black/50 group-hover:bg-transparent pointer-events-none">
                
                <h5 className="h6 opacity-100 transition-opacity duration-300 group-hover:opacity-0">{item.title}</h5>
                <p className="body-2 text-n-3  m-1 opacity-100 transition-opacity duration-300 group-hover:opacity-0 rounded-b-2xl">{item.text}</p>
                
              </div>
             
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                >
                  {item.imageUrl && (
                    <motion.img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.8 }}
                      exit={{ scale: 1.2, opacity: 0 }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: false, margin: "-50px" }}
                    />
                  )}
                </motion.div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
      
    </Section>
  );
};

export default Speaker;
