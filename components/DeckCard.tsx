import { prisma } from "@/lib/prisma";
import { FlashCardData } from "@/types";
import Link from "next/link";

export const DeckCard = ({
  id,
  title,
  flashcards,
  username,
}: {
  id: string;
  title: string;
  flashcards: FlashCardData[];
  username: string;
}) => {
  return (
    <Link
      href={`deck/${id}`}
      className="max-w-[600px] w-full min-w-[250px] h-[200px] text-[--text-2] bg-[--card] border border-[--border] rounded-[20px] flex flex-col py-8 px-4 items-start justify-between"
    >
      <p className="font-semibold text-xl">{title}</p>
      <div className="w-24 h-6 bg-[--hover] rounded-full text-[--text-card] text-xs flex justify-center items-center">
        <p>{`${flashcards.length} ${
          flashcards.length === 1 ? "Flashcard" : "Flashcards"
        }`}</p>
      </div>
      <p className="font-semibold">{`By ${username}`}</p>
    </Link>
  );
};
