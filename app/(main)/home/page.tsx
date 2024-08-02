import { DeckCard } from "@/components/DeckCard";
import { Header } from "@/components/Header";
import { RecentDecks } from "@/components/RecentDecks";
import { SwiperSlide } from "swiper/react";

export default function Home() {
  return (
    <section className="w-full min-h-screen p-4">
      <Header/>
      <div className="flex flex-col w-full mt-24 gap-4">
        <p className="text-2xl text-[--blue]">Recents</p>
        <RecentDecks/>
      </div>
    </section>
  )
}
