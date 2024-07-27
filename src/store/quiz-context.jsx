import { createContext, useState } from "react";
import question from "../questions";

export const QuizContext = createContext({
  userAnswer: [],
  setUserAnswer: () => {},
  currentIndex: 0,
  question,
  TIMER: 3000,
  saveUserAnswer: () => {},
  changeIndex: () => {},
  phase: undefined,
  setPhase: () => {},
  setTimer: () => {},
  isDisabled: false,
  setIsDisabled: () => {},
});

function QuizContextProvider({ children }) {
  const [userAnswer, setUserAnswer] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState(["question"]);
  const [timer, setTimer] = useState(3000);
  const [isDisabled, setIsDisabled] = useState(false);

  const ctxValue = {
    userAnswer,
    currentIndex,
    question,
    TIMER: timer,
    saveUserAnswer: saveUserAnswer,
    changeIndex: changeIndex,
    phase: phase,
    setPhase: setPhase,
    isDisabled: isDisabled,
    setIsDisabled: setIsDisabled,
    setTimer: setTimer,
  };

  function saveUserAnswer(answer) {
    setUserAnswer((prevAns) => [...prevAns, answer]);
  }

  function changeIndex() {
    setCurrentIndex((prevIdx) => {
      if (prevIdx < question.length) {
        return prevIdx + 1;
      } else {
        return null;
      }
    });
  }

  return (
    <QuizContext.Provider value={ctxValue}>{children}</QuizContext.Provider>
  );
}

export default QuizContextProvider;
