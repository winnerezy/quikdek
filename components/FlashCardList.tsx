"use client";

import { BiPlus } from "react-icons/bi";
import { NewFlashCard } from "./NewFlashCard";
import { useState } from "react";

export const FlashCardList = () => {
  const [flashcardTotal, setFlashCardTotal] = useState<number[]>([6, 135, 224]);
  const handleNewFlashCard = () => {
    setFlashCardTotal((prevtotal) => [...prevtotal, prevtotal.length]);
  };

  const handleRemoveFlashCard = (id: number) => {
    setFlashCardTotal((prevIds) => prevIds.filter((flashcardId) => flashcardId !== id));
  };
  return (
    <div className="flex flex-col gap-6 max-w-[1000px] w-full self-center">
      {flashcardTotal.map((id: number, index: number) => (
        <NewFlashCard
          index={index}
          key={id}
          onRemove={() => handleRemoveFlashCard(id)}
        />
      ))}
      <button
        className="btn border border-[--blue]"
        onClick={handleNewFlashCard}
      >
        <BiPlus className="size-8 text-[--blue]" />
      </button>
    </div>
  );
};
