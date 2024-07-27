import { useContext } from "react";
import { QuizContext } from "../store/quiz-context";

export default function Question() {
  const { question, currentIndex } = useContext(QuizContext);
  const currentQuestion = question[currentIndex].text;
  return <div>{currentQuestion}</div>;
}
