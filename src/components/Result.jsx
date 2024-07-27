import { useContext } from "react";
import { QuizContext } from "../store/quiz-context";
import QuestionResult from "./QuestionResult";

export default function Result() {
  const { userAnswer, question } = useContext(QuizContext);
  const correctAnswer = question.map((question) => question.answers[0]);

  let countCorrectAnswer = 0;
  let question_answers = [];
  for (let i = 0; i < userAnswer.length; i++) {
    if (userAnswer[i] === correctAnswer[i]) {
      countCorrectAnswer++;
    }
    question_answers.push({
      isCorrect: userAnswer[i] == correctAnswer[i],
      correctAnswer: correctAnswer[i],
      question: question[i].text,
    });
  }
  console.log(question_answers);
  console.log(userAnswer, correctAnswer, countCorrectAnswer);
  return (
    <>
      <p>Correct Answer:{countCorrectAnswer}</p>
      <p>Incorrect Answer: {userAnswer.length - countCorrectAnswer}</p>
      <p>
        Percentage:{" "}
        {Math.round((countCorrectAnswer / userAnswer.length) * 100, 2)}
      </p>
      {question_answers.map((data, idx) => (
        <QuestionResult value={data} key={idx} />
      ))}
    </>
  );
}
