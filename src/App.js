import { useState } from "react";
import "./App.scss";
import PocketCalculator from "./PocketCalculator";

function App() {
  const [numString, setNumString] = useState("");
  const [total, setTotal] = useState(null);
  const [whichSign, setWhichSign] = useState("");

  function onNumBtnClick(num) {
    setNumString((old) => old + num);
  }
  function defaultMath(expression) {
    setWhichSign(expression);
    setTotal((old) => {
      if (old === null) {
        setNumString("");
        return Number(numString);
      }
      if (expression === "+") {
        setNumString("");
        return old + Number(numString);
      }
      if (expression === "-") {
        setNumString("");
        return old - Number(numString);
      }
      if (expression === "*") {
        setNumString("");
        return old * Number(numString);
      }
      if (expression === "/") {
        setNumString("");
        return old / Number(numString);
      }
      return alert("ERROR");
    });
  }
  function giveExponentClick(exp) {
    if (exp === "+") {
      defaultMath("+");
    }
    if (exp === "-") {
      defaultMath("-");
    }
    if (exp === "*") {
      defaultMath("*");
    }
    if (exp === "/") {
      defaultMath("/");
    }
  }
  function onEqualBtnClick() {
    if (whichSign === "+") {
      setTotal((old) => old + Number(numString));
      setNumString("");
      setWhichSign("");
    } else if (whichSign === "-") {
      let hello = total - Number(numString);
      setTotal(hello);
      setNumString("");
      setWhichSign("");
    } else if (whichSign === "*") {
      setTotal((old) => old * Number(numString));
      setNumString("");
      setWhichSign("");
    } else if (whichSign === "/") {
      setTotal((old) => old / Number(numString));
      setNumString("");
      setWhichSign("");
    }
  }
  function giveEqualAndCcClick(which) {
    if (which === "=") {
      onEqualBtnClick();
    }
    if (which === "CC") {
      setWhichSign("");
      setTotal(null);
      setNumString("");
    }
  }
  function setDefaultScreen() {
    if (numString === "") {
      if (total) {
        return total.toString();
      } else {
        return "0";
      }
    } else {
      return numString;
    }
  }

  return (
    <div className="calculatorCont">
      <PocketCalculator
        setDefaultScreen={setDefaultScreen}
        onNumBtnClick={onNumBtnClick}
        giveExponentClick={giveExponentClick}
        giveEqualAndCcClick={giveEqualAndCcClick}
      />
    </div>
  );
}

export default App;
