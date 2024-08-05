"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { DeckCard } from "./DeckCard";
import { useEffect, useState } from "react";
import { getDecks } from "@/lib/actions";
import { Folder } from "@/types";

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
    <div className="max-w-7xl flex flex-col w-full gap-8 self-center">
      {folders.map((folder) => (
        <div key={folder.id} className="flex flex-col gap-4 ">
          <p className="text-2xl text-[--text] font-semibold">{folder.name} Folder</p>
          <Swiper
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
              },
              640: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 3.5,
              },
            }}
            className="max-w-screen-xl w-full"
          >
            {folder.decks?.map((deck) => (
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
