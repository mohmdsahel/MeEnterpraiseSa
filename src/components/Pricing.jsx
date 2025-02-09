import Section from "./Section";
import Heading from "./Heading";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";
import { Gradient } from "./design/Services";


const Pricing = () => {
  return (
    <Section crosses className="overflow-hidden" id="register">
      <Gradient/>
      <div className="container relative z-2">
       

        <Heading
          className="text-center"
          title="Book Your Seats Now!"
          text={"1 May 2025 | 8:30 AM AST Onwards"}
        />

        <div className="relative">

        <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="h-auto w-auto max-lg:w-full  px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-4 odd:py-8 odd:my-4 [&>h6]:first:text-color-2 [&>h6]:even:text-color-1 [&>h6]:last:text-color-3"
        >
          <h6 className="h5 mb-4">{item.title}</h6>

          <p className="body-2  min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <p>
            {item.tag}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className={item.price ?  "w-full  mt-16" : "w-full " }
            href={ "https://meenterpriseai.com/sa/#buyticket"}
            
          >
            {item.price ? "+ADD" : "coming soon"}
          
          </Button>

        
        </div>
      ))}
    </div>                                       

        </div>

       
      </div>
    </Section>
  );
};

export default Pricing;
