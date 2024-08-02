import { CiCircleInfo, CiSquarePlus } from "react-icons/ci";
import { BiMenu } from "react-icons/bi";
import { SearchInput } from "./SearchInput";

export const Header = () => {
  return (
    <section>
      <div className="flex items-center w-full h-14 relative justify-between gap-4">
        <div className="w-min h-14 flex gap-4 items-center">
          <BiMenu className="size-10 text-[--blue]" />
          <p className="text-[--blue] font-bold text-2xl tracking-wide w-36">
            Quick Deck
          </p>
        </div>
        <SearchInput />
        <div className="h-14 flex gap-4 items-center">
          <CiSquarePlus className="size-10 text-[--blue]" />
          <CiCircleInfo className="size-10 text-[--blue]" />
        </div>
      </div>
    </section>
  );
};
