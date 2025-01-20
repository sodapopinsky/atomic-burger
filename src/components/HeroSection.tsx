"use client";
import React from 'react';

import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
const HeroSection = () => {
  const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  return (
    <div className="w-full">
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default HeroSection;
