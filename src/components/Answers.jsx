import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../store/quiz-context";
import Answer from "./Answer";
function shuffleArray(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}
export default function Answers() {
  const {
    currentIndex,
    question,
    changeIndex,
    setPhase,
    phase,
    saveUserAnswer,
  } = useContext(QuizContext);
  const options = question[currentIndex].answers;
  const correctOption = options[0];

  const [shuffledOptions, setShuffledOptions] = useState([]);
  useEffect(() => {
    const shuffledArray = shuffleArray([...options]);
    setShuffledOptions(shuffledArray);
  }, [currentIndex]);

  useEffect(() => {
    const timeoutFunction = setTimeout(() => {
      if (phase[0] === "question") {
        saveUserAnswer("");
        changeIndex();
        setPhase(["question"]);
      }
    }, 5000);

    return () => clearTimeout(timeoutFunction);
  }, [phase]);

  return (
    <div className="flex flex-col items-start space-y-3 mt-4">
      {shuffledOptions.map((option, idx) => (
        <Answer option={option} key={idx} correctOption={correctOption} />
      ))}
    </div>
  );
}
