import { Header } from "@/components/Header";
import { MyFolders } from "@/components/MyFolders";


export default function MyDeck() {
  return (
    <section className="w-full min-h-screen p-4 flex flex-col gap-12">
      <Header/>
      <section className="max-w-7xl w-full min-h-screen flex flex-col gap-4 self-center">
      <h3 className="font-semibold text-[--purple] text-2xl max-md:mt-14 mb-6">My Decks</h3>
    
        <MyFolders/>
      </section>
    </section>
  )
}
