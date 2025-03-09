import Button from "./Button";
import Section from "./Section";

import { check } from "../assets";

import { collabContent, keyTopics, whyAttend, whySponsor } from "../constants";
import {  grid } from "../assets";
import { Gradient } from "./design/Roadmap";
import Heading from "./Heading";
import Stats from "./Container";

const Roadmap = () => (
  <Section crosses className="overflow-hidden " id="agenda">
    <div className="container md:pb-10">
     
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
       
            <div
              className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient">
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  

                


                  <h4 className="h3 mb-4">Who should attend?</h4>
                  <p className="body-2 mb-4">C-levels – CEO/CIO/CTO/CISO/COO/CMO, Senior Vice Presidents, Vice Presidents, Heads of AI & Analytics department, AI & ML enthusiast involved in:</p>
                  {/* <ul className="list-disc text-center list-inside body-2 text-n-3 [&>li]:mb-2"> */}
                  <ul className="mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-4 py-2" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <p className="body-2 ml-5">{item.title}</p>
                </div>
              </li>
            ))}
          </ul>
                  
                </div>
              </div>
            </div>
            <div
              className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient">
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  

                  
                  <h4 className="h3 mb-4">Why you should attend?</h4>
                  <ul className=" mb-10 md:mb-14">
            {whyAttend.map((item) => (
              <li className="mb-2 py-2" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
                </div>
              </div>
            </div>
            <div
              className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient">
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  

                  
                  <h4 className="h3 mb-4">Key topics</h4>
                  <ul className=" mb-10 md:mb-14">
            {keyTopics.map((item) => (
              <li className="mb-2 py-2" key={item.id}>
                <div className="flex items-center">
                  <img src={item.icon} width={35} height={35} />
                  <h6 className="body-2 font-bold ml-5">{item.title}</h6>
                </div>
               
              </li>
            ))}
          </ul>
                </div>
              </div>
            </div>
            <div
              className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] bg-n-6 hover:bg-conic-gradient">
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  

                  
                  <h4 className="h3 mb-4">Why sponsor?</h4>
                 <ul className=" mb-10 md:mb-14">
            {whySponsor.map((item) => (
              <li className="mb-2 py-2" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
                </div>
              </div>
            </div>
         

        <Gradient />
        
      </div>

       
      <div className="m-8 p-4"><Stats/></div>
      <div className="flex text-center justify-center mt-12 md:mt-15 xl:mt-20">
         <Heading 
         title="Download The Middle East Enterprise AI & Analytics Agenda here:" 
         text="The Programme will take a deep dive into how public and private organizations are responding to the multiple drivers of AI & Analytics. The insight will be delivered by individuals with hands on experience from the industry in the vanguard of digital transformation through case studies, interviews, panel debates and workshops."
         />
    </div>
    <div className="flex justify-center ">
        <Button>Download The Agenda</Button>
    </div>

    {/* Summit Highlights Section */}
    <div className="mt-20">
      <h1 className="text-center h2 mb-12 text-4xl font-bold">
        2024 SUMMIT HIGHLIGHTS
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="aspect-video rounded-2xl overflow-hidden">
          
          <iframe className="w-full h-full" src="https://www.youtube.com/embed/431fEcQT-EM" title="4th Middle East Enterprise AI &amp; Analytics Summit | KSA Edition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/ZoMnri8GxgM" title="5th Enterprise AI &amp; Analytics Summit | Qatar Edition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/kj7vsRasFKw" title="6th Middle East Enterprice AI &amp; Analytics Summit 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </div>
    
  </Section>
);

export default Roadmap;
