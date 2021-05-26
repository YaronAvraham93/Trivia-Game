import React, { useState,useEffect } from "react";
import "./App.css";
import Trivia from "./components/Trivia/Trivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timer, setTimer] = useState(false);
  const [earned,setEarned] =useState(0)
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const Level = [
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$300" },
    { id: 4, amount: "$400" },
    { id: 5, amount: "$500" },
    { id: 6, amount: "$600" },
    { id: 7, amount: "$700" },
    { id: 8, amount: "$800" },
    { id: 9, amount: "$900" },
    { id: 10, amount: "$1000" },
    { id: 11, amount: "$1200" },
    { id: 12, amount: "$1400" },
    { id: 13, amount: "$1500" },
    { id: 14, amount: "$1600" },
    { id: 15, amount: "$1700" },
  ].reverse();

  useEffect(() => {
    questionNumber >1 && setEarned(Level.find(m=> m.id === questionNumber-1).amount)
  }, [Level,questionNumber])
  return (
    <div className="app">
      <div className="main">
        {timer ? (<h1 className="endText">You earned:{earned}</h1>) : (
          <>
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia
            data={data}
            setQuestionNumber={setQuestionNumber}
            questionNumber={questionNumber}
            setTimer={setTimer}
          />
        </div>
        </>)}
      </div>
      <div className="money">
        <ul className="moneyList">
          {Level.map((m) => (
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
    </div>
  );
}

export default App;
