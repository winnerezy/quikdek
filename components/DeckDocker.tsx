"use client";

import { Button } from "@headlessui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FlashCard } from "./FlashCard";
import { FlashCardData } from "@/types";

export const DeckDocker = ({ flashcards }: { flashcards: FlashCardData[] }) => {
  const [current, setCurrent] = useState<number>(0);

  const handlePrevious = () => {
    setCurrent((prevIndex) => (prevIndex - 1) % flashcards.length);
  };

  const handleNext = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  return (
    <section className="w-full flex flex-col gap-6 self-center">
      {flashcards.length > 0 && (
        <FlashCard
          question={flashcards[current].question}
          answer={flashcards[current].answer}
        />
      )}
      <div className="flex gap-4 self-center">
        <Button
          className="btn w-36 bg-[--light-purple] border-none text-white hover:bg-[--light-purple]"
          onClick={handlePrevious}
        >
          Previous
        </Button>
        <Button
          className="btn w-36 bg-[--light-purple] border-none text-white hover:bg-[--light-purple]"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </section>
  );
};
