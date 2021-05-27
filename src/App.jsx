import React, { useState, useEffect } from "react";
import "./App.css";
import Trivia from "./components/Trivia/Trivia";
import Timer from "./components/Timer/Timer";
import Start from "./components/Start/Start";
import level from "./constants/level"

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [userName, setUserName] = useState(null);
  const [timer, setTimer] = useState(false);
  const [earned, setEarned] = useState(0);

  

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(level.find((m) => m.id === questionNumber - 1).amount); 
  }, [level, questionNumber]);
 
  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {timer ? (
              <h1 className="endText">{userName} You earned:{earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimer={setTimer}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                    setTimer={setTimer}
                  />
                </div>
              </>
            )}
          </div>
          <div className="money">
            <ul className="moneyList">
              {level.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyLIstItemNumber">{m.id}</span>
                  <span className="moneyLIstItemNumberAmount">{m.amount}</span>
                  {timer}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
