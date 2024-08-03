"use client";

import { CiCircleInfo, CiSquarePlus } from "react-icons/ci";
import { BiMenu, BiSearch } from "react-icons/bi";
import Link from "next/link";
import { Input, Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { openSideBar } from "@/lib/redux/sidebarSlice";
import { MouseEventHandler, useState } from "react";

export const Header = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("")


  return (
    <div className="flex items-center self-center w-full h-14 relative gap-4 justify-between">
      <div className="w-min h-14 flex gap-4 items-center">
        <BiMenu
          className="size-8 text-[--blue] block md:hidden cursor-pointer"
          onClick={() => dispatch(openSideBar())}
        />
        <Link
          href={"/home"}
          className="text-[--blue] font-bold text-2xl tracking-wide w-36"
        >
          Quick Deck
        </Link>
      </div>
      <section className="bg-[--blue] text-white max-w-2xl w-full h-10 p-2 rounded-lg flex gap-2 self-center items-center max-md:absolute max-md:top-16">
        <BiSearch className="size-6" />
        <Input
          className="outline-none w-full bg-[--blue] placeholder:text-gray-300"
          placeholder="Search for flash cards..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
      </section>
      <div className="h-14 flex gap-4 items-center">
        <CiSquarePlus className="size-8 text-[--blue]" />

        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
            <CiCircleInfo className="size-8 text-[--blue]" />
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-black text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 z-[99999]"
          >
            <div className="p-3 w-[200px] h-[200px] mr-24">
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Insights</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Automations</p>
                <p className="text-white/50">
                  Create your own targeted content
                </p>
              </a>
              <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Reports</p>
                <p className="text-white/50">Keep track of your growth</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
};
