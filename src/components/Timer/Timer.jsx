import { useEffect, useState } from "react";

export default function Timer({setTimer, questionNumber }) {
  const [stopper, setStopper] = useState(30);

  useEffect(() => {
    if (stopper === 0) return setTimer(true);
    const interval = setInterval(() => {
        setStopper((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [stopper, setTimer]);

  useEffect(() => {
    setStopper(30);
  }, [questionNumber]);
  return stopper;
}