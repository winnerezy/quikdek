import { motion } from "framer-motion";
import { useState } from "react";

export const FlashCard = ({
    question,
    answer
  }: {
    question: string;
    answer: string;
  }) => {

    const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <motion.div
    onClick={() => setIsFlipped(!isFlipped)}
    className="self-center relative mt-24 w-full shadow-md max-w-[700px] h-[300px] p-2 flex items-center justify-center bg-[--card] font-bold text-center rounded-lg"
    animate={{
      rotateX: isFlipped ? 180 : 0,
    }}
    transition={{ duration: 0.3 }}
    style={{
      transformStyle: "preserve-3d",
      perspective: "1000px",
    }}
  >
    <motion.div
      className="flashcard "
      style={{ backfaceVisibility: "hidden" }}
    >
      {question}
    </motion.div>
    <motion.div
      className="flashcard"
      style={{
        backfaceVisibility: "hidden",
        transform: "rotateX(180deg)",
      }}
    >
      {answer}
    </motion.div>
  </motion.div>
  )
}
