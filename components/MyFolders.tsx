"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { DeckCard } from "./DeckCard";
import { useEffect, useState } from "react";
import { getDecks } from "@/lib/actions";
import { Folder } from "@/types";
import { Skeleton } from "@mui/material";

export const MyFolders = () => {
  const [folders, setFolders] = useState<Folder[]>([]);

  useEffect(() => {
    async function fetchFolders() {
      const foldersWithDecks = await getDecks();
      setFolders(foldersWithDecks);
    }
    fetchFolders();
  }, []);

  return (
    <div className="max-w-7xl flex flex-col w-full gap-4 self-center">
      {folders.map((folder) => (
        <div key={folder.id} className="flex flex-col gap-4 ">
          <p className="text-2xl text-[--purple]">{folder.name}</p>
          <Swiper
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="max-w-screen-xl w-full"
          >
            {!folder.decks ?
             Array(3).fill(3).map((_, i)=> <Skeleton/>)
             :
             folder.decks?.map((deck) => (
              <SwiperSlide key={deck.id}>
                <DeckCard
                  id={deck.id}
                  title={deck.title}
                  flashcards={deck.flashcards}
                  username={deck.user?.username!}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};
