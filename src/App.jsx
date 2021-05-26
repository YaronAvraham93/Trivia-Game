import React ,{useState} from 'react';
import './App.css'


function App() {
  const[questionNumber,setQuestionNumber] =useState(1)
  const date=[
    {id:1,amount:"$100"},
    {id:2,amount:"$200"},
    {id:3,amount:"$300"},
    {id:4,amount:"$400"},
    {id:5,amount:"$500"},
    {id:6,amount:"$600"},
    {id:7,amount:"$700"},
    {id:8,amount:"$800"},
    {id:9,amount:"$900"},
    {id:10,amount:"$1000"},
    {id:11,amount:"$1200"},
    {id:12,amount:"$1400"},
    {id:13,amount:"$1500"},
    {id:14,amount:"$1600"},
    {id:15,amount:"$1700"},
  ]
  return (
    <div className='app'>
    <div className="main">
      <div className="top">
        <div className="timer"></div>
      </div>
      <div className="bottom"></div>
    </div>
    <div className="money">
      <ul className="moneyList">
        {date.map((m)=>(
        <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"} >
          <span className="moneyLIstItemNumber">{m.id}</span>
          <span className="moneyLIstItemNumberAmount">{m.amount}</span>
          {setQuestionNumber}
        </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
