'use client'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { DeckCard } from "./DeckCard";

export const RecentDecks = () => {
  return (
    <Swiper spaceBetween={30} slidesPerView={2} className="w-[500px]">
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <SwiperSlide key={index}>
            <DeckCard />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
