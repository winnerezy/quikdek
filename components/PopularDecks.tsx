"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { PopularDeckCard } from "./PopularDeckCard";
import { useEffect, useState } from "react";
import { DeckProps } from "@/types";
import { getPopularDecks } from "@/lib/actions";

export const PopularDecks = () => {
  const [decks, setDecks] = useState<DeckProps[]>([]);

  useEffect(() => {
    async function fetchFolders() {
      const deckList = await getPopularDecks();
      setDecks(deckList);
    }
    fetchFolders();
  }, []);

  const popularDecks = decks
    .map((deck) => ({
      ...deck,
      additionalUsersCount: (deck.additionalusers as string[]).length,
    }))
    .sort((a, b) => b.additionalUsersCount - a.additionalUsersCount);

  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 1.3,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="max-w-7xl w-full"
    >
      {popularDecks.map((deck) => (
        <SwiperSlide key={deck.id}>
          <PopularDeckCard
            id={deck.id}
            title={deck.title}
            flashcards={deck.flashcards}
            username={deck.user?.username!}
            additionalusers={deck.additionalUsersCount}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
