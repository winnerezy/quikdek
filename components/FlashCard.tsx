import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const FlashCard = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(()=> {
    // Reset the card when it's updated
    setIsFlipped(false); 
  }, [question])

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="self-center relative mt-24 w-full shadow-md max-w-[800px] h-[300px] sm:h-[400px] p-2 flex items-center justify-center bg-card font-bold text-center rounded-lg"
      animate={{
        rotateX: isFlipped ? 180 : 0,
      }}
      transition={{ duration: 0.1 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      <motion.div
        className="flashcard "
        style={{ backfaceVisibility: "hidden" }}
      >
        <p className="text-2xl absolute top-4 underline">Question</p>
        {question}
      </motion.div>
      <motion.div
        className="flashcard"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateX(180deg)",
        }}
      >
        <p className="text-2xl absolute top-4 underline">Answer</p>
        {answer}
      </motion.div>
    </motion.div>
  );
};
