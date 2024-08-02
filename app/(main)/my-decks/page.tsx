import { Header } from "@/components/Header";
import { RecentDecks } from "@/components/RecentDecks";


export default function MyDeck() {
  return (
    <section className="w-full min-h-screen p-4 flex flex-col gap-12">
      <Header/>
      <section className="max-w-7xl w-full min-h-screen flex flex-col gap-4 self-center">
      <h3 className="font-semibold text-[--blue] text-2xl max-md:mt-14">My Decks</h3>
      <div className="max-w-7xl flex flex-col w-full gap-4 self-center">
        <p className="text-2xl text-[--blue]">Java</p>
        <RecentDecks/>
      </div>
      </section>
    </section>
  )
}
