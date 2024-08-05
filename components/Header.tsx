"use client";

import { CiSettings, CiSquarePlus } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { SearchInput } from "./SearchInput";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openSideBar } from "@/lib/redux/sidebarSlice";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { getCurrentUser, handleSignOut } from "@/lib/actions";
import { CgFolderAdd, CgProfile } from "react-icons/cg";
import { TbCards, TbMoon, TbSun, TbTrophy } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { openNewFolderModal } from "@/lib/redux/newFolderSlice";
import { User } from "@/types";

export const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<string>(() => {
    const existingTheme = localStorage.getItem("theme");
    return existingTheme ? existingTheme : "light";
  });

  const fetchUser = useCallback(async () => {
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute("class", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme);
  };

  return (
    <header className="flex items-center h-14 sticky top-0 gap-4 justify-between z-40 bg-[--background] text-[--purple]">
      <div className="w-min h-14 flex gap-4 items-center">
        <BiMenu
          className="size-8 text-[--purple] block lg:hidden cursor-pointer"
          onClick={() => dispatch(openSideBar())}
        />
        <Link href={"/home"} className="font-bold text-2xl tracking-wide w-36">
          Quick Deck
        </Link>
      </div>
      <SearchInput />
      <div className="h-14 flex gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <CiSquarePlus className="size-8 text-[--purple]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none space-y-2 mr-4 p-2 w-[200px] bg-[--background] text-[--text-2]">
            <DropdownMenuItem onClick={() => dispatch(openNewFolderModal())}>
              <div className="text-md font-semibold flex gap-4 items-center">
                <CgFolderAdd />
                <p>Create Folder</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="text-md font-semibold flex gap-4 items-center">
                <TbCards />
                <p>Create Deck</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full">
            <Image
              src={user?.avatar!}
              width={40}
              height={40}
              alt={user?.username!}
              className="rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none h-[300px] space-y-2 mr-4 p-2 w-[300px] bg-[--background] text-[--text-2]">
            <DropdownMenuLabel>
              <div className="w-full flex gap-2 items-center">
                <div className="avatar">
                  <div className="w-14 rounded-full">
                    <Image
                      src={user?.avatar!}
                      width={20}
                      height={20}
                      alt={user?.username!}
                    />
                  </div>
                </div>
                <section className="flex flex-col">
                  <p>{user?.username}</p>
                  <p>{user?.email}</p>
                </section>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="text-md font-semibold flex gap-4 items-center">
                <TbTrophy />
                <p>12 Streaks</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="text-md font-semibold flex gap-4 items-center"
                href="/profile"
              >
                <CgProfile />
                <p className="font-semibold">Profile</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="text-md font-semibold flex gap-4 items-center"
                href="/settings"
              >
                <CiSettings />
                <p className="font-semibold">Settings</p>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleTheme}>
              {theme === "light" ? (
                <div className="text-md font-semibold flex gap-4 items-center">
                  <TbMoon />
                  <p className="font-semibold">Dark Mode</p>
                </div>
              ) : (
                <div className="text-md font-semibold flex gap-4 items-center">
                  <TbSun />
                  <p className="font-semibold">Light Mode</p>
                </div>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                className="text-md font-semibold flex gap-4 items-center"
                onClick={() => handleSignOut()}
              >
                <LuLogOut />
                <p className="font-semibold">Log Out</p>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
