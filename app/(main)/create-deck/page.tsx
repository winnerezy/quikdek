import { FlashCardList } from "@/components/FlashCardList";
import { Header } from "@/components/Header";
import { Button, Input, Select, Textarea } from "@headlessui/react";

export default function CreateDeck() {
  return (

    <section className="w-full min-h-screen flex flex-col gap-4 p-4">
      <Header />
      <h3 className="font-semibold text-[--blue] text-2xl max-md:mt-20">
        Create a deck
      </h3>
      <div className="flex flex-col max-w-[1000px] w-full space-y-8 self-center">
      <Button className="bg-[--blue] w-24 h-10 rounded-lg self-end">Save Deck</Button>
      <Input
          className="outline-none w-full py-4 border-b-4 border-[--blue] text-[--input-text] placeholder:text-gray-300"
          placeholder="Enter a title e.g 'Organic Chemistry Chapter 4'"

        />
      <Textarea
          className="outline-none w-full py-4 border-b-4 border-[--blue] text-[--input-text] placeholder:text-gray-300"
          placeholder="Add a description (optional)"

        />
        <section className="self-start space-x-4">
          <Select
           className="w-48 h-12 p-2 bg-transparent border border-[--blue] text-[--blue] rounded-lg font-semibold">

            <option>Folder</option>
          </Select>
          <Select className="w-48 h-12 p-2 bg-transparent border border-[--blue] text-[--blue] rounded-lg font-semibold">
            <option>Public</option>
          </Select>
        </section>
      </div>
     <FlashCardList/>
    </section>
  )
}