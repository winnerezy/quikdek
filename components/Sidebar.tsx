"use client";

import { GoHome } from "react-icons/go";
import { TbCards } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCloseCircleOutline, IoCreateOutline } from "react-icons/io5";
import { LuBookOpen } from "react-icons/lu";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "@/lib/redux/sidebarSlice";
import cn from "classnames";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { State } from "@/types";

export const Sidebar = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state: State) => state.sidebar.isOpen);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // removing side bar from view function
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 1024
      ) {
        dispatch(closeSideBar());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);
  return (
    <aside
      className={cn(
        "w-[300px] flex min-h-screen max-lg:absolute top-0 left-0 z-50 bg-[--background] flex-col items-center gap-10 cursor-pointer duration-300 ease-in-out lg:sticky ",
        isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-[300px]"
      )}
      ref={sidebarRef}
    >
      <IoCloseCircleOutline
        className="text-[--purple] size-8 absolute top-8 left-4 block lg:hidden"
        onClick={() => dispatch(closeSideBar())}
      />
      <Link
        href={"/home"}
        className="relative flex gap-4 mt-36 w-48 h-10 rounded-lg hover:bg-[--hover] items-center"
      >
        <GoHome className="size-8 absolute left-2" />
        <p className="text-xl tracking-wide ml-16">Home</p>
      </Link>
      <Link
        href={"/my-decks"}
        className="relative flex gap-4 w-48 h-10 rounded-lg hover:bg-[--hover] items-center"
      >
        <TbCards className="size-8 absolute left-2" />
        <p className="text-xl tracking-wide ml-16">My Decks</p>
      </Link>
      <Link
        href={"/notifications"}
        className="relative flex gap-4 w-48 h-10 rounded-lg hover:bg-[--hover] items-center"
      >
        <IoIosNotificationsOutline className="size-8 absolute left-2" />
        <p className="text-xl tracking-wide ml-16">Notifications</p>
      </Link>
      <hr className="w-[90%]" />
      <Link
        href={"/create-deck"}
        className="relative flex gap-4 w-48 h-10 rounded-lg hover:bg-[--hover] items-center"
      >
        <IoCreateOutline className="size-8 absolute left-2" />
        <p className="text-xl tracking-wide ml-16">Create Deck</p>
      </Link>
      <Link
        href={"/practice-quiz"}
        className="relative flex gap-4 w-48 h-10 rounded-lg hover:bg-[--hover] items-center"
      >
        <LuBookOpen className="size-8 absolute left-2" />
        <p className="text-xl tracking-wide ml-16">Practice Quiz</p>
      </Link>
    </aside>
  );
};
