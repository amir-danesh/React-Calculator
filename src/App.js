import Keyboard from "./Keyboard";
import Screen from "./Screen";
import "./App.css";
import {useState} from "react"

function App() {
  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState("");

  const correctSentence = () => {
    let newSentence = ""
    for(let i=0;i<sentence.length;i++){
      if(sentence[i] === "×"){
        newSentence += "*";
      }else if (sentence[i] === "÷"){
        newSentence += "/";
      }else{
        newSentence += sentence[i]
      }
    }
    return newSentence;
  }

  const isOperator = (buttonValue) => {
    if (buttonValue === "+" || buttonValue === "-" || buttonValue === "÷" || buttonValue === "×"){
      return true;
    }
    return false;
  }

  const makeResult = (sentence) => {
    try{
      setResult(eval(correctSentence()));
    }
    catch(err){
      setResult("Syntax Error!")
    }
  }

  const updateResult = (isOperatorUsed) => {
    if (isOperatorUsed){
      return makeResult("");
    } else {
      return makeResult(correctSentence());
    }
  }

  const equalClicked = () => {
    return makeResult(sentence)
  }

  const updateSentence = (buttonValue) => {
    setSentence(sentence + buttonValue);
    updateResult(isOperator(buttonValue))
  };
  
  const clearSentence = () => {
    setSentence("");
  }

  return (
    <div className="App">
      <div className="container">
        <Screen sentence={sentence} result={result} />
        <Keyboard
          updateSentence={updateSentence}
          clearSentence={clearSentence}
          equalClicked={equalClicked}
        />
      </div>
    </div>
  );
}

export default App;
