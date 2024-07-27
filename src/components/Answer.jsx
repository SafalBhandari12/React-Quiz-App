import { useContext, useState } from "react";
import { QuizContext } from "../store/quiz-context";

export default function Answer({ option, correctOption }) {
  const [buttonColor, setButtonColor] = useState("bg-slate-500");

  const { saveUserAnswer, changeIndex, setPhase, isDisabled, setIsDisabled } =
    useContext(QuizContext);

  function handleClick(option) {
    setIsDisabled(true);
    let answerIsCorrect = false;
    if (option === correctOption) {
      answerIsCorrect = true;
    }
    setPhase(["thinking"]);
    setButtonColor("text-blue-800");
    setTimeout(() => {
      setPhase(["answer"]);
      if (answerIsCorrect) {
        setButtonColor("text-green-400");
      } else {
        setButtonColor("text-red-400");
      }
      setTimeout(() => {
        changeIndex();
        setPhase(["question"]);
        setButtonColor("bg-slate-500");
        saveUserAnswer(option);
        setIsDisabled(false);
      }, 1000);
    }, 1000);
    // To save the user answer
  }

  return (
    <button
      className={buttonColor}
      onClick={() => {
        handleClick(option);
      }}
      disabled={isDisabled}
    >
      {option}
    </button>
  );
}
