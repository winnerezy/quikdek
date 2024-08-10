"use client";

import { Button } from "@headlessui/react";
import { useState } from "react";
import { FlashCard } from "./FlashCard";
import { FlashCardData } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { addDeck, deleteDeck, getDecks } from "@/lib/actions";
import { useRouter } from "next/navigation";

export const DeckDocker = ({
  id,
  additionalusers,
  flashcards,
  userid,
  authorid,
}: {
  id: string;
  additionalusers: string[] | undefined;
  flashcards: FlashCardData[];
  userid: string;
  authorid: string;
}) => {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(0);

  const handlePrevious = () => {
    setCurrent((prevIndex) => (prevIndex - 1) % flashcards.length);
  };

  const handleNext = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handleAdd = async (id: string) => {
    await addDeck(id);
    // await getDecks();
  };

  const handleDelete = async (id: string) => {
    await deleteDeck(id);
    router.push("/my-decks");
  };
  return (
    <section className="w-full flex flex-col gap-6 self-center">
      {flashcards.length > 0 && (
        <FlashCard
          question={flashcards[current].question}
          answer={flashcards[current].answer}
        />
      )}
      <p className="text-md font-bold text-center text-text-2">{`${
        current + 1
      } / ${flashcards.length}`}</p>
      <div className="flex gap-4 self-center">
        <Button
          className="btn w-24 h-10 sm:w-36 text-foreground disabled:text-foreground border-2 border-border-purple hover:border-border-purple bg-background hover:bg-background"
          onClick={handlePrevious}
          disabled={current === 0}
        >
          Previous
        </Button>
        <Button
          className="btn w-24 h-10 sm:w-36 text-foreground border-2 border-border-purple hover:border-border-purple bg-background hover:bg-background"
          onClick={handleNext}
          disabled={current + 1 === flashcards.length}
        >
          Next
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <p className="btn w-24 h-10 sm:w-36 text-foreground border-2 border-border-purple hover:border-border-purple bg-background hover:bg-background">
              More
            </p>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none bg-background">
            {userid !== authorid && (
              <DropdownMenuItem onClick={() => handleAdd(id)}>
                {additionalusers?.includes(userid) ? "Remove" : "Add"}
              </DropdownMenuItem>
            )}
            {userid === authorid && (
              <>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};
