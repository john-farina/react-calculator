import { useState } from "react";
import "./App.scss";
import PocketCalculator from "./PocketCalculator";

function App() {
  const [numString, setNumString] = useState("");
  const [total, setTotal] = useState(null);
  const [whichSign, setWhichSign] = useState("");

  function onNumBtnClick(num) {
    setNumString((old) => old + num.toString());
  }

  function defaultMath(expression) {
    setWhichSign(expression);

    setTotal((old) => {
      /////CONVERT
      let parseNum = Number(numString);
      setNumString("");

      if (old === null) {
        return parseNum;
      }

      if (expression === "+") {
        return old + parseNum;
      } else if (expression === "-") {
        return old - parseNum;
      } else if (expression === "*") {
        return old * parseNum;
      } else if (expression === "/") {
        return old / parseNum;
      } else {
        return alert("ERROR");
      }
    });
  }

  //SWITCH TO ON_EXP_CLICK
  function giveExponentClick(op) {
    if (op === "+") {
      defaultMath("+");
    } else if (op === "-") {
      defaultMath("-");
    } else if (op === "*") {
      defaultMath("*");
    } else if (op === "/") {
      defaultMath("/");
      //ADD TO POCKETCALC
    } else if (op === "CC") {
      setWhichSign("");
      setTotal(null);
      setNumString("");
    } else {
      console.log("ERROR");
    }
  }

  //make default null ////
  function onEqualBtnClick() {
    if (whichSign === "") {
      return;
    }

    let parseNum = Number(numString);

    if (whichSign === "+") {
      setTotal((old) => old + parseNum);
    } else if (whichSign === "-") {
      setTotal((old) => old - parseNum);
    } else if (whichSign === "*") {
      setTotal((old) => old * parseNum);
    } else if (whichSign === "/") {
      setTotal((old) => old / parseNum);
    }

    setNumString("");
    setWhichSign("");
  }

  function setDefaultScreen() {
    if (numString !== "") {
      return numString;
    }

    if (typeof total === "number") {
      return total.toString();
    }

    return "0";
  }

  return (
    <div className="calculatorCont">
      <PocketCalculator
        setDefaultScreen={setDefaultScreen}
        onNumBtnClick={onNumBtnClick}
        giveExponentClick={giveExponentClick}
        onEqualBtnClick={onEqualBtnClick}
      />
    </div>
  );
}

export default App;
