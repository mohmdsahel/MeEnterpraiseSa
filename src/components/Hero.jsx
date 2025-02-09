import { heroBackground, video } from "../assets";

import Section from "./Section";



import Countdown from "./Countdown";

const Hero = () => {
  

  return (
    <Section
      className="pt-[12rem] -mt-[8.25rem] relative overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="absolute inset-0 w-full h-full">
        <video
          src={heroBackground}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          alt="hero"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          10th Middle East Enterprise <br/>
          AI & Analytics Summit
            
          </h1>
          <h5 className="tagline mb-6 text-center text-n-1/50">
          <i class="fa-solid fa-location-dot "></i> Riyadh, Saudi Arabia <br/>
          1st May 2025 <br/>
          {/*  */}
          </h5>
          <div>
            <Countdown/>
            <div className="relative z-10 mt-6 lg:block">
      <h5 className="tagline mb-6 text-center text-n-1/50">
      Accelerating Innovation in Enterprises with Applied AI & Analytics Strategies
      </h5>
      </div>

          </div>
        </div>


        
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div />
              
              

              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover object-center"
                  width={1024}
                  height={490}
                  alt="AI"
                />
               

              </div>
            </div>
            

            
          </div>
         
          

        </div>

        
      </div>

     
    </Section>
  );
};

export default Hero;
