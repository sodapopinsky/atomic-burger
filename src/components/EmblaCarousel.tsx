import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { DotButton, useDotButton } from './EmblaCarouselDotButton'
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};
const OPTIONS: EmblaOptionsType = { loop: true }
const EmblaCarousel: React.FC<PropType> = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <section className="embla  w-[100%]">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container">
     
         <div className="embla__slide bg-[#9FDED8]" key="slide1">
            <div className="flex max-w-7xl mx-auto h-full justify-center items-center">
              <img
                className="embla__slide__img"
                src="images/hero2.png"
                alt="Your alt text"
              />
            </div>
          </div>

          <div className="embla__slide bg-purple-100" key="slide2">
            <div className="flex max-w-7xl mx-auto h-full justify-center items-center">
              <img
                className="embla__slide__img"
                src="images/hero2.png"
                alt="Your alt text"
              />
            </div>
          </div>
          <div className="embla__slide bg-red-100" key="slide3">
            <div className="flex max-w-7xl mx-auto h-full justify-center items-center">
              <img
                className="embla__slide__img"
                src="images/hero2.png"
                alt="Your alt text"
              />
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
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>


    </section>
  );
};

export default EmblaCarousel;
