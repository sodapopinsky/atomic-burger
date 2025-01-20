import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";


type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);



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

        </div>
      </div>

    </section>
  );
};

export default EmblaCarousel;
