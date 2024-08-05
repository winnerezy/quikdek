'use client'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { DeckCard } from "./DeckCard";
import { PopularDeckCard } from "./PopularDeckCard";

export const PopularDecks = () => {
  return (
    <Swiper 
    spaceBetween={10}  
    breakpoints={{
      0: {
        slidesPerView: 1.3
      },
      640: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      }
    }}
    className="max-w-7xl w-full">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <SwiperSlide key={index}>
            <PopularDeckCard />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
