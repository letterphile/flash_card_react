import logo from './logo.svg';
import './App.css';
import Quizlet from './Components/Quizlet';
import DarkModeToggle from './Components/DarkModeToggle';
import Button from './Components/VerdictButton';
import ButtonNo from './Components/VerdictButtonNo';
import './style.scss';
import React, { useState,useEffect } from 'react';

function App(props) {
  console.log(props.cards)
  const [yes_no, setYesNo] = useState([false,false]);
  const [prevIndex,setPrevIndex] = useState(-1)

  function to_yes(){
    console.log("previous yes_no value",yes_no)
    setYesNo([true,false])
  }
  function to_no(){
    console.log("previous yes_no value",yes_no)
    setYesNo([false,true])
  }
    return (
    <div className="App">
      <center>
        <DarkModeToggle/>
        <Quizlet cards={props.cards} setYesNo = {setYesNo} yes_no={yes_no} prevIndex = {prevIndex} setPrevIndex={setPrevIndex}/>
        <Button click={to_yes}/>
        <ButtonNo click={to_no}/>
        </center>
          </div>
  );
}

export default App;
