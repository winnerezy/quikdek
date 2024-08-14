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
  const [theme, setTheme] = useState<string>("light");

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
    // localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme);
  };

  return (
    <header className="flex items-center h-16 sticky px-4 top-0 gap-4 justify-between z-40 bg-background text-[--purple]">
      <div className="w-min h-14 flex gap-4 items-center">
        <BiMenu
          className="size-8 text-[--purple] block lg:hidden cursor-pointer"
          onClick={() => dispatch(openSideBar())}
        />
        <Link href={"/home"} className="font-bold">
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            className="size-12"
        
          >
            <path
              d="M299.172 258.133C299.172 271.414 297.544 284.24 294.289 296.609C291.164 308.849 286.672 320.438 280.812 331.375C274.953 342.312 267.922 352.404 259.719 361.648C251.646 370.763 242.661 378.706 232.766 385.477C234.589 391.596 236.867 397.326 239.602 402.664C242.466 408.133 245.786 412.885 249.562 416.922C253.469 421.089 257.766 424.344 262.453 426.688C267.141 429.031 272.219 430.203 277.688 430.203C280.031 430.203 282.44 429.878 284.914 429.227C287.388 428.706 289.732 427.729 291.945 426.297C292.727 425.646 293.573 425.19 294.484 424.93C295.526 424.669 296.438 424.539 297.219 424.539C299.823 424.539 302.167 425.451 304.25 427.273C306.464 429.227 307.57 431.701 307.57 434.695C307.57 438.471 306.008 441.401 302.883 443.484C299.107 445.828 295.07 447.651 290.773 448.953C286.477 450.255 282.115 450.906 277.688 450.906C270.135 450.906 263.104 449.474 256.594 446.609C250.083 443.745 244.159 439.839 238.82 434.891C233.482 429.943 228.729 424.083 224.562 417.312C220.526 410.672 217.141 403.51 214.406 395.828C205.552 399.995 196.372 403.185 186.867 405.398C177.492 407.742 167.727 408.914 157.57 408.914C144.68 408.914 132.18 407.091 120.07 403.445C108.091 399.93 96.8932 394.917 86.4766 388.406C76.0599 381.766 66.4896 373.888 57.7656 364.773C49.1719 355.529 41.8151 345.372 35.6953 334.305C29.5755 323.107 24.8229 311.062 21.4375 298.172C18.0521 285.281 16.3594 271.935 16.3594 258.133C16.3594 244.331 18.0521 230.984 21.4375 218.094C24.8229 205.203 29.5755 193.224 35.6953 182.156C41.8151 170.958 49.1719 160.802 57.7656 151.688C66.4896 142.443 76.0599 134.565 86.4766 128.055C96.8932 121.414 108.091 116.336 120.07 112.82C132.18 109.174 144.68 107.352 157.57 107.352C171.242 107.352 184.198 109.305 196.438 113.211C208.807 117.117 220.201 122.521 230.617 129.422C241.164 136.323 250.669 144.526 259.133 154.031C267.596 163.536 274.758 173.888 280.617 185.086C286.607 196.284 291.164 208.068 294.289 220.438C297.544 232.807 299.172 245.372 299.172 258.133ZM278.859 258.133C278.859 249.279 277.688 240.034 275.344 230.398C273 220.633 269.68 211.128 265.383 201.883C261.216 192.508 256.138 183.654 250.148 175.32C244.289 166.857 237.779 159.5 230.617 153.25C223.586 146.87 216.034 141.857 207.961 138.211C199.888 134.435 191.62 132.547 183.156 132.547C171.698 132.547 161.346 134.24 152.102 137.625C142.857 141.01 134.589 145.633 127.297 151.492C120.135 157.221 113.885 164.057 108.547 172C103.208 179.943 98.7812 188.471 95.2656 197.586C91.8802 206.57 89.3411 216.01 87.6484 225.906C85.9557 235.672 85.1094 245.372 85.1094 255.008C85.1094 265.555 85.6953 276.102 86.8672 286.648C88.1693 297.195 90.2526 307.352 93.1172 317.117C96.112 326.753 99.888 335.802 104.445 344.266C109.133 352.599 114.862 359.891 121.633 366.141C128.404 372.26 136.281 377.078 145.266 380.594C154.38 384.109 164.732 385.867 176.32 385.867C182.18 385.867 187.844 385.151 193.312 383.719C198.911 382.156 204.315 380.073 209.523 377.469C206.398 367.573 201.906 360.021 196.047 354.812C190.188 349.604 182.57 347 173.195 347C170.201 347 167.336 347.26 164.602 347.781C161.997 348.302 159.589 348.888 157.375 349.539C154.901 350.19 152.557 350.971 150.344 351.883C148.781 352.664 147.349 353.055 146.047 353.055C143.573 353.055 141.229 352.078 139.016 350.125C136.802 348.042 135.695 345.503 135.695 342.508C135.695 340.685 136.216 338.927 137.258 337.234C138.299 335.542 139.732 334.24 141.555 333.328C141.685 333.198 142.596 332.807 144.289 332.156C146.112 331.375 148.456 330.594 151.32 329.812C154.185 329.031 157.505 328.315 161.281 327.664C165.057 327.013 169.029 326.688 173.195 326.688C186.216 326.688 197.219 330.138 206.203 337.039C215.318 343.94 222.349 353.641 227.297 366.141C234.849 359.891 241.75 352.599 248 344.266C254.38 335.932 259.849 327.013 264.406 317.508C268.964 308.003 272.479 298.172 274.953 288.016C277.557 277.859 278.859 267.898 278.859 258.133Z"
              fill="var(--purple)"
            />
            <path
              d="M459.914 249.133C459.914 228.43 456.398 210.07 449.367 194.055C442.336 177.909 432.635 164.497 420.266 153.82C408.026 143.013 393.443 135.07 376.516 129.992C359.719 124.784 341.555 122.766 322.023 123.938V375.695C334.523 376.086 346.633 374.979 358.352 372.375C370.07 369.771 381.008 365.865 391.164 360.656C401.451 355.318 410.76 348.872 419.094 341.32C427.557 333.768 434.784 325.24 440.773 315.734C446.893 306.229 451.581 295.878 454.836 284.68C458.221 273.482 459.914 261.633 459.914 249.133ZM480.422 249.133C480.422 265.279 478.273 280.122 473.977 293.664C469.81 307.206 463.951 319.445 456.398 330.383C448.846 341.32 439.797 350.891 429.25 359.094C418.703 367.297 407.049 374.198 394.289 379.797C381.659 385.266 368.182 389.367 353.859 392.102C339.536 394.966 324.758 396.398 309.523 396.398C296.763 396.398 285.174 395.747 274.758 394.445C264.471 393.143 255.552 391.711 248 390.148C240.578 388.586 234.719 387.154 230.422 385.852C226.255 384.419 223.977 383.638 223.586 383.508C221.633 382.727 220.005 381.49 218.703 379.797C217.401 377.974 216.75 376.021 216.75 373.938C216.75 370.943 217.857 368.469 220.07 366.516C222.284 364.562 224.693 363.586 227.297 363.586C227.948 363.586 228.534 363.651 229.055 363.781C229.576 363.911 230.161 364.107 230.812 364.367C232.505 365.018 234.523 365.669 236.867 366.32C240.643 367.492 246.242 368.859 253.664 370.422V131.164C245.07 132.987 238.495 134.549 233.938 135.852C231.203 136.633 228.794 137.349 226.711 138C226.06 138.26 225.474 138.456 224.953 138.586C224.432 138.716 223.846 138.781 223.195 138.781C220.201 138.781 217.792 137.74 215.969 135.656C214.146 133.443 213.234 131.034 213.234 128.43C213.234 126.216 213.82 124.263 214.992 122.57C216.164 120.747 217.857 119.51 220.07 118.859C220.591 118.729 223.456 117.883 228.664 116.32C234.003 114.628 241.099 112.87 249.953 111.047C258.938 109.094 269.419 107.401 281.398 105.969C293.378 104.406 306.268 103.625 320.07 103.625C342.987 103.625 364.211 106.685 383.742 112.805C403.273 118.794 420.201 127.844 434.523 139.953C448.846 152.062 460.044 167.232 468.117 185.461C476.32 203.69 480.422 224.914 480.422 249.133Z"
             fill="var(--purple)"
            />
          </svg>
        </Link>
      </div>
      {/* <SearchInput /> */}
      <div className="h-14 flex gap-4 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <CiSquarePlus className="size-8 text-[--purple]" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="border-none space-y-2 mr-4 p-2 w-[200px] bg-background text-[--text-2]">
            <DropdownMenuItem onClick={() => dispatch(openNewFolderModal())}>
              <div className="text-md font-semibold flex gap-4 items-center">
                <CgFolderAdd />
                <p>Create Folder</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="text-md font-semibold flex gap-4 items-center">
                <TbCards />
                <Link href="/create-deck">Create Deck</Link>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full outline-none">
            <Image
              src={user?.avatar!}
              width={40}
              height={40}
              alt={user?.username!}
              className="rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="border-none space-y-2 p-2 w-[300px] bg-background text-[--text-2]">
            <DropdownMenuLabel>
              <div className="w-full flex gap-2 items-center">
                <div className="avatar">
                  <div className="w-12 rounded-full">
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
                  <p className="text-xs font-light">{user?.email}</p>
                </section>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>
              <div className="text-md font-semibold flex gap-4 items-center">
                <TbTrophy />
                <p>12 Streaks</p>
              </div>
            </DropdownMenuItem> */}
            {/* <DropdownMenuItem>
              <Link
                className="text-md font-semibold flex gap-4 items-center"
                href="/profile"
              >
                <CgProfile />
                <p className="font-semibold">Profile</p>
              </Link>
            </DropdownMenuItem> */}
            {/* <DropdownMenuItem>
              <Link
                className="text-md font-semibold flex gap-4 items-center"
                href="/settings"
              >
                <CiSettings />
                <p className="font-semibold">Settings</p>
              </Link>
            </DropdownMenuItem> */}
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
            <DropdownMenuSeparator />
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
