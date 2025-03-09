import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { benefits } from "../constants";
import Section from "./Section";
import { linkedin } from "../assets";


const mergeClasses = (...classes) => classes.filter(Boolean).join(' ');

export const LampContainer = ({
  children,
  className
}) => {
  return (
    <div
      className={mergeClasses(
        "relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-n-8 w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1  items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-n-8 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-n-8 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-n-8 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-n-8 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-n-8 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-purple-400"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-n-8"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};

export default function Speaker() {
  const containerRef = useRef(null);

  return (
    <Section crosses>
      <div className="min-h-[100svh] relative overflow-hidden flex flex-col" id="speakers">
        <motion.h1
          initial={{ opacity: 0.5, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 sm:mt-16 md:mt-24 h2 mb-4 bg-clip-text text-center
           font-medium tracking-tight  relative z-10"
        >
          Spotlight Speakers
        </motion.h1>
        
        <div className="hidden sm:block absolute inset-0 z-0 h-[45vh] md:h-[50vh]">
          <LampContainer className="w-full h-full">
          </LampContainer>
        </div>

        <div className="w-full relative z-10 h-[80vh] sm:h-[55vh] md:h-[50vh] mt-4 sm:mt-auto">
          <div
            ref={containerRef}
            className="relative h-full overflow-auto overscroll-auto px-2 sm:px-4 pb-20 sm:pb-0"
            style={{ scrollbarWidth: "none" }}
          >
            {benefits.map(({ title, text, organization, imageUrl, link }, i) => (
              <Card
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
          </div>
        </div>
      </div>
    </Section>
  );
}

function Card({ index, title, text, image, organization, link, containerRef }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: containerRef,
    offset: ["start end", "start start"],
  });

  return (
    <motion.div
      ref={cardRef}
      className="w-full max-w-4xl mx-auto px-2 sm:px-6 mb-6 sm:mb-12"
      style={{
        position: "sticky",
        top: `${window.innerWidth < 640 ? index * 10 : index * 3 + 50}px`,
      }}
    >
      <motion.div
        className="bg-gradient-to-br from-purple-900/90 to-purple-700/90 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden transform-gpu"
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
          <div className="w-full sm:w-2/3 p-4 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
              {title}
            </h2>
            <p className="text-purple-100/90 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              {text}
            </p>
            <div className="flex items-center justify-between">
              <p className="text-purple-200/80 text-sm sm:text-base md:text-lg italic">
                {organization}
              </p>
              <a
                href={link}
                target="_blank"
                className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-purple-500/30 hover:bg-purple-300/40 transition-all duration-300 border border-purple-400/20"
              >
                <span className="text-purple-200 text-xs sm:text-sm font-medium">Connect</span>
                <img 
                  src={linkedin} 
                  width={16} 
                  height={16} 
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-110 transform duration-300 sm:w-[20px] sm:h-[20px]" 
                />
              </a>
            </div>
          </div>
          <div className="w-full sm:w-1/3 h-[320px] sm:h-64 md:h-64">
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
}