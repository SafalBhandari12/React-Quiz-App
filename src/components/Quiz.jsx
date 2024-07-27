import { useContext } from "react";
import Answers from "./Answers";
import Progress from "./Progress";
import Question from "./Question";
import { QuizContext } from "../store/quiz-context";
import Result from "./Result";
export default function Quiz() {
  const { userAnswer, question } = useContext(QuizContext);
  const isCompleted = userAnswer.length == question.length;
  console.log(isCompleted);
  return (
    <>
      {!isCompleted && (
        <>
          <Progress />
          <Question />
          <Answers />
        </>
      )}
      {isCompleted && <Result />}
    </>
  );
}
