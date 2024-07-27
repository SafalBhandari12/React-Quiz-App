import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../store/quiz-context";

export default function Progress() {
  const { phase } = useContext(QuizContext);
  function createTimeout() {
    return setInterval(() => {
      setRecentTime((prevTime) => {
        return prevTime - 10;
      });
    }, 10);
  }

  useEffect(() => {
    let timer = 5000;
    if (phase[0] === "thinking") {
      timer = 1000;
    }
    if (phase[0] === "answer") {
      timer = 1000;
    }
    setMaxTime(timer);
    setRecentTime(timer);
    let timeout = createTimeout();

    return () => {
      clearTimeout(timeout);
    };
  }, [phase]);

  const [recentTime, setRecentTime] = useState(3000);
  const [maxTime, setMaxTime] = useState(3000);
  const [progressBarColor, setProgressBarColor] = useState("bg-green-400");
  return (
    <div>
      <progress
        max={maxTime}
        value={recentTime}
        className="text-blue-500"
      ></progress>
    </div>
  );
}
