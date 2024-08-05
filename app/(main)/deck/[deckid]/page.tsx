import { DeckDocker } from "@/components/DeckDocker";
import { Header } from "@/components/Header";
import { prisma } from "@/lib/prisma";

export default async function Deck({
  params: { deckid },
}: {
  params: { deckid: string };
}) {

    const deck = await prisma.decks.findUnique({
        where: {
            id: deckid
        },
        select: {
            flashcards: true
        }
    })

    const flashcards: FlashCardData[] = deck?.flashcards!

  return (
    <section className="w-full min-h-screen p-4 flex flex-col">
        <Header/>
        <DeckDocker flashcards={flashcards}/>
    </section>
  );
}
