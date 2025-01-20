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
        <div className="embla__container">
          <div className="embla__slide bg-[#9FDED8]" key="slide1">
            <div className="flex max-w-7xl mx-auto h-[200px] md:h-[300px] justify-center items-center">
              <img
                className="h-[90%] w-auto object-contain block md:hidden translate-y-[-10px]"
                src="images/shakes.png"
                alt="Your alt text"
              />
               <img
                className="h-[90%] w-auto object-contain hidden md:block"
                src="images/shakes-7.png"
                alt="Your alt text"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[35%]  bg-black bg-opacity-40 flex items-center text-center backdrop-blur-sm flex-col justify-center text-white space-y-0 lg:space-y-1">
              <div className="text-xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight ">
                THE CREAM OF THE CROP
              </div>
              <div className="text-base  md:text-xl lg:text-2xl ">
                (It&apos;s ok to be starstruck)
              </div>
            </div>
          </div>

          <div className="embla__slide bg-[#55447B]" key="slide2">
            <div className="flex max-w-7xl mx-auto h-[200px] md:h-[300px] justify-center items-center">
              <img
                className="h-[90%] w-auto object-contain block md:hidden translate-y-[-10px]"
                src="images/shakes.png"
                alt="Your alt text"
              />
               <img
                className="h-[90%] w-auto object-contain hidden md:block"
                src="images/shakes-7.png"
                alt="Your alt text"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[35%]  bg-black bg-opacity-40 flex items-center text-center backdrop-blur-sm flex-col justify-center text-white space-y-0 lg:space-y-1">
              <div className="text-xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight ">
                THE CREAM OF THE CROP
              </div>
              <div className="text-base  md:text-xl lg:text-2xl ">
                (It&apos;s ok to be starstruck)
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
