import { service1, } from "../assets";

import { exhibitingPartners, seriesPartners, SlidingPartnersRight } from "../constants";

import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { motion } from "framer-motion";


const Collaboration = () => {
  return (
    <Section id="partners" crosses>
      <GradientLight/>
      <div className="container">
       
        <div className="relative z-1 flex flex-col items-center min-h-[20rem] mb-5 p-4 border border-n-1/10 rounded-3xl overflow-hidden 
          sm:p-3 
          md:min-h-[30rem] md:p-4 
          lg:p-10 lg:min-h-[39rem] 
          xl:min-h-[46rem]">
          <div className="relative z-1">
            
          <Heading className="text-center" title="Series Partners" />

<div className="py-6 px-2 xl:px-4">
  
  
<div >
    
    <div >
      <ul className="flex flex-row flex-nowrap justify-center gap-6">
        {seriesPartners.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center gap-1"
          >
             <span className=" text-base text-center tagline font-bold text-white m-2">
              {item.name}
            </span>
            <div
              className="rounded-2xl flex items-center mb-4 justify-center bg-violet-600/50 "
            >
              <img 
                src={item.icon} 
                width={150} 
                height={150} 
               
                className="object-contain" 
              />
            </div>
            
            
           
          </li>
        ))}
      </ul>
   
 

 
   <div className="mt-8">
     <h3 className="text-xl text-center tagline font-bold text-white mb-6">
       Exhibiting Partners
     </h3>
     <ul className="flex flex-row flex-wrap justify-center gap-6">
       {exhibitingPartners.map((item, index) => (
         <li
           key={index}
           className="flex flex-col items-center gap-1"
         >
           <div className="rounded-2xl flex items-center mb-4 justify-center bg-violet-900/80">
             <img 
               src={item.icon} 
               width={150} 
               height={150}
               className="object-contain" 
             />
           </div>
         </li>
       ))}
     </ul>
   </div>
    </div>
  </div>
</div>



          </div>
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
            <img
              className="w-full h-full object-cover opacity-20"
              width={800}
              alt="Smartest AI"
              height={730}
              src={service1}
            />
          </div>
        </div>

        <Heading className="mt-10 text-center" title="Series Partners" />

        <div className="overflow-hidden container w-full">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-max"
          >
            <ul className="flex flex-row flex-nowrap gap-6">
              {SlidingPartnersRight.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center gap-1 w-[150px]"
                >
                  <div className="rounded-2xl flex items-center mb-4 justify-center bg-violet-900/80 w-full ">
                    <img 
                      src={item.icon} 
                      width={150} 
                      height={150}
                      className="object-contain" 
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>


        <Heading className="mt-10 text-center" title="Media Partners" />

        <div className="overflow-hidden container w-full">
          <motion.div
            animate={{
              x: [-1000, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-max"
          >
            <ul className="flex flex-row flex-nowrap gap-6">
              {SlidingPartnersRight.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center gap-1 w-[150px]"
                >
                  <div className="rounded-2xl flex items-center mb-4 justify-center bg-violet-600/50 w-full ">
                    <img 
                      src={item.icon} 
                      width={150} 
                      height={150}
                      className="object-contain" 
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>


      </div>
    </Section>
  );
};

export default Collaboration;


