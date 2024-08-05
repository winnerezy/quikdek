import { DeckDocker } from "@/components/DeckDocker";
import { Header } from "@/components/Header";
import { getCurrentUser } from "@/lib/actions";
import { prisma } from "@/lib/prisma";
import { FlashCardData } from "@/types";

export default async function Deck({
  params: { deckid },
}: {
  params: { deckid: string };
}) {

  const user = await getCurrentUser()
    const deck = await prisma.decks.findUnique({
        where: {
            id: deckid
        },
        select: {
          userid: true,
          additionalusers: true,
            flashcards: true
        }
    })

    const flashcards: FlashCardData[] = deck?.flashcards!

  return (
    <section className="w-full min-h-screen flex flex-col">
        <DeckDocker id={deckid} additionalusers={deck?.additionalusers} flashcards={flashcards} userid={user?.id!} authorid={deck?.userid!}/>
    </section>
  );
}
