import QUIZ_LOG from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <>
      <img src={QUIZ_LOG} className="w-20 mx-auto"/>
      <h1 className="text-xl text-center mt-5">Quiz </h1>
    </>
  );
}
