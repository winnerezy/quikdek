import { Input } from "@headlessui/react"
import { BiSearch } from "react-icons/bi"

export const SearchInput = () => {
  return (
   <section className="bg-[--card] text-[--text-2] max-w-2xl w-full h-10 p-2 rounded-lg flex gap-2 self-center items-center max-md:absolute max-md:top-16">
    <BiSearch className="size-6"/>
     <Input className="outline-none w-full bg-transparent placeholder:text-gray-400" placeholder="Search for flash cards..."/>
   </section>
  )
}
