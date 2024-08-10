import { Input } from "@headlessui/react";
import { ChangeEvent, useState } from "react";
import { CgTrash } from "react-icons/cg";

interface NewFlashCardProps {
  index: number;
  question: string;
  answer: string;
  onRemove: () => void;
  onUpdate: (updatedData: { question: string; answer: string }) => void;
}

export const NewFlashCard = ({
  index,
  onRemove,
  onUpdate
}: 
  NewFlashCardProps) => {

  const [cardData, setCardData] = useState({
    question: '',
    answer: ''
  })
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCardData(prevData => ({...prevData, [e.target.name]: e.target.value}))
    onUpdate({ question: cardData.question, answer: cardData.answer })
  }

  return (
    <article className="relative max-w-[1000px] w-full h-60 rounded-lg bg-card border-2 border-[--border] p-4">
      <div className="w-full">
        <Input
          className="outline-none w-full bg-transparent py-4 border-b-2 border-[--purple] placeholder:text-gray-300"
          placeholder="Add a question"
          name="question"
          onChange={(e) => handleInput(e)}
        />
        <Input
          className="outline-none w-full bg-transparent py-4 border-b-2 border-[--purple] placeholder:text-gray-300"
          placeholder="Add the answer"
          name="answer"
          onChange={(e) => handleInput(e)}
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