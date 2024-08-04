import { DeckForm } from "@/components/DeckForm";
import { Header } from "@/components/Header";


export default function CreateDeck() {

  return (

    <section className="w-full min-h-screen flex flex-col gap-6 p-4">
      <Header />
     <DeckForm/>
    </section>
  )
}