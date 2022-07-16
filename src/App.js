import Keyboard from "./Keyboard";
import Screen from "./Screen";
import "./App.css";
import {useState, useEffect} from "react"

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

      setResult(eval(sentence));
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
    return makeResult(correctSentence());
  }

  const updateSentence = (buttonValue) => {
    setSentence(sentence + buttonValue);

  };
  
  const clearSentence = () => {
    setSentence("");
  }

  useEffect(() => {
    updateResult(isOperator(sentence[sentence.length - 1]));
  }, [sentence])

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
