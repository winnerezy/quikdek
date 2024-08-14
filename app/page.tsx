import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import one from "../public/1.png"
import two from "../public/2.png"

export default function Welcome() {
  return (
    <section className="w-full min-h-screen flex flex-col gap-8 items-center p-4 bg-gradient-to-tl from-purple-500/40 to-white">
      <ul className="flex gap-4 self-end text-zinc-800">
        <li>
          <a
            href="https://discord.gg/rkTcyYhRnY"
            className="flex gap-1 items-center"
          >
            Discord Community
          </a>
        </li>
        <li>
          <a
            href="https://github.com/winnerezy"
            className="flex gap-1 items-center"
          >
            Github
          </a>
        </li>
        <li>
          <a href="https://x.com/winnerezy" className="flex gap-1 items-center">
            Twitter
          </a>
        </li>
      </ul>
      <div className="flex flex-col gap-2 items-center justify-center w-full mt-48 space-y-2">
        <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Welcome To QuikDek
        </h3>
        <p className="font-light text-zinc-800 text-lg md:text-2xl">
          Flashcards, quick and easy.
        </p>
        <Link href="/sign-in">
          <Button
            variant="outlined"
            className="rounded-md border border-[--light-purple] text-black font-semibold"
          >
            Get Started
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <h5 className="font-semibold tracking-wide text-2xl md:text-4xl underline">Create your experience</h5>
        <Image src={one} alt="1" className="md:w-[70%] rounded-sm"/>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <h5 className="font-semibold tracking-wide text-2xl md:text-4xl underline">Study Better and Easier</h5>
        <Image src={two} alt="2" className="md:w-[70%] rounded-sm"/>
      </div>
    </section>
  );
}
