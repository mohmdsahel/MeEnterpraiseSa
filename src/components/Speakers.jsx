import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { benefits } from "../constants";
import Section from "./Section";
import { linkedin } from "../assets";
import SectionSvg from "../assets/svg/SectionSvg";

const mergeClasses = (...classes) => classes.filter(Boolean).join(' ');

export const LampContainer = ({
  children,
  className
}) => {
  return (
    <div
      className={mergeClasses(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-n-8 w-full rounded-md z-0",
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
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
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
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-n-8 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-n-8 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-n-8 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
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
      <div className="h-screen relative overflow-hidden flex flex-col " id="speakers">
        <motion.h1
          initial={{ opacity: 0.5, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-32 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl relative z-10"
        >
          Spotlight Speakers
        </motion.h1>
        
        <div className="absolute inset-0 z-0 h-[50vh]">
          <LampContainer className="w-full h-full">
          </LampContainer>
        </div>

        <div className="w-full relative z-10 h-[50vh] mt-auto">
          <div
            ref={containerRef}
            className="relative h-full overflow-auto overscroll-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {benefits.map(({ title, text, imageUrl, link }, i) => (
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

function Card({ index, title, text, image, link, containerRef }) {
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
        top: `${index * 3 + 25}px`,
        marginBottom: " 3rem",
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