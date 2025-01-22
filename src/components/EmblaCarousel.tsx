import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
const OPTIONS: EmblaOptionsType = { loop: true };
const EmblaCarousel: React.FC<PropType> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla  w-[100%]">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container  ">
          <div className="embla__slide bg-[#9FDED8] h-[300px]  lg:h-[350px]" key="slide1">
            <div className="flex max-w-7xl mx-auto    h-[300px]   lg:h-[350px] justify-center items-center">
              <img
                className="h-[80%] w-auto object-contain block xs:hidden  translate-y-[-10px]"
                src="images/hero-carousel/shakes-3.png"
                alt="Your alt text"
              />
               <img
                className="h-[85%] w-auto object-contain hidden xs:block  translate-y-[-20px]"
                src="images/hero-carousel/shakes-7.png"
                alt="Your alt text"
              />
            </div>
           <div className="absolute bottom-0 left-0 right-0 h-[30%]  bg-black bg-opacity-40 flex items-center text-center backdrop-blur-sm flex-col justify-center text-white space-y-0 lg:space-y-1">
              <div className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ">
                THE CREAM OF THE CROP
              </div>
              <div className="text-lg  md:text-xl lg:text-2xl ">
                (It&apos;s OK to  stare)
              </div>
            </div> 
          </div>

          <div className="embla__slide bg-[#CDDC39] h-[300px]  lg:h-[350px]" key="slide2">
            <div className="flex max-w-7xl mx-auto   h-[300px] lg:h-[350px]  justify-center items-center ">
            <img
                className="h-[85%]  w-auto object-cover "
                src="images/hero-carousel/turkey.png"
                alt="Your alt text"
              /> 
             
            </div>
             <div className="absolute bottom-0 left-0 right-0 h-[30%]  bg-black bg-opacity-40 flex items-center text-center backdrop-blur-sm flex-col justify-center text-white space-y-0 lg:space-y-1">
             <div className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ">
                LOOKING FOR A NEW HABIT?
              </div>
              <div className="text-lg  md:text-xl lg:text-2xl  ">
              Try our turkey burger & edamame
              </div>
            </div> 
          </div>

          
        </div>
      </div>

      <div className=" max-w-7xl mx-auto flex justify-center">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
