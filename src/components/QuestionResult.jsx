export default function QuestionResult({ value }) {
  const { isCorrect, correctAnswer, question } = value;
  console.log(isCorrect, correctAnswer, question);

  let answer_text = "text-green-500";

  if (!isCorrect) {
    answer_text = "text-red-500";
  }

  return (
    <>
      <h1 className="text-2xl">{question}</h1>
      <p className={answer_text}>{correctAnswer}</p>
    </>
  );
}
