import { Input } from "@headlessui/react";
import { CgTrash } from "react-icons/cg";
export const NewFlashCard = ({
  index,
  onRemove,
}: {
  index: number;
  onRemove: () => void;
}) => {
  return (
    <article className="relative max-w-[1000px] w-full h-60 rounded-lg bg-[--blue] p-4 ">
      <div className="w-full">
        <Input
          className="outline-none w-full bg-transparent py-4 border-b-4 border-white placeholder:text-gray-300"
          placeholder="Add a question"
        />
        <Input
          className="outline-none w-full bg-transparent py-4 border-b-4 border-white placeholder:text-gray-300"
          placeholder="Add the answer"
        />
      </div>
      <p className="font-bold text-3xl absolute bottom-4">{index + 1}</p>
      <CgTrash
        className="absolute bottom-4 right-4 size-8"
        onClick={onRemove}
      />
    </article>
  );
};