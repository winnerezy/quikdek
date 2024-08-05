import { Header } from "@/components/Header";
import { PopularDecks } from "@/components/PopularDecks";
import { MyFolders } from "@/components/MyFolders";
import { RecentDecks } from "@/components/RecentDecks";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col gap-12">
      <div className="max-w-7xl flex flex-col w-full gap-4 self-center mt-20">
        <p className="text-2xl text-[--purple]">Recents</p>
        <RecentDecks/>
      </div>
      <div className="max-w-7xl flex flex-col w-full gap-4 self-center">
        <p className="text-2xl text-[--purple]">Popular Decks</p>
        <PopularDecks/>
      </div>
      <div className="max-w-7xl flex flex-col w-full gap-4 self-center">
        <p className="text-2xl text-[--purple]">Popular Creators</p>
        <RecentDecks/>
      </div>
    </section>
  )
}
