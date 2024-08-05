import { Header } from "@/components/Header";
import { PopularDecks } from "@/components/PopularDecks";
import { MyFolders } from "@/components/MyFolders";
import { RecentDecks } from "@/components/RecentDecks";

export default function Home() {
  return (
    <section className="w-full min-h-screen p-4 flex flex-col gap-12">
      <Header/>
      <div className="max-w-7xl flex flex-col w-full gap-4 self-center max-md:mt-14">
        <p className="text-2xl text-[--purple]">Recents</p>
        <MyFolders/>
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
