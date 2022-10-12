import { to } from "mathjs";
import { useState } from "react";
import "./App.css";

function App() {
  const [numString, setNumString] = useState("");
  const [total, setTotal] = useState(0);
  const [whichSign, setWhichSign] = useState("");
  const [firstHasEnded, setFirstHasEnded] = useState(false);

  function onNumBtnClick(num) {
    setNumString((old) => old + num);
  }
  function clearSignAndDoMath() {
    if (whichSign === "+") {
    }
  }
  function onAddBtnClick() {
    setWhichSign("+");
    setTotal((old) => old + Number(numString));
    setNumString("");
  }
  function onSubBtnClick() {
    if (total === 0) {
      setWhichSign("-");
      let hello = Number(numString);
      setTotal(hello);
      setNumString("");
    } else {
      setWhichSign("-");
      let hello = Number(numString) - total;
      setTotal(hello);
      setNumString("");
    }
  }
  function onMultiplyBtnClick() {
    if (total === 0) {
      setWhichSign("*");
      setTotal(Number(numString));
      setNumString("");
    } else {
      setWhichSign("*");
      setTotal((old) => old * Number(numString));
      setNumString("");
    }
  }
  function onDivideBtnClick() {
    if (total === 0) {
      setWhichSign("/");
      setTotal(Number(numString));
      setNumString("");
    } else {
      setWhichSign("/");
      setTotal((old) => old / Number(numString));
      setNumString("");
    }
  }
  function onEqualBtnClick() {
    if (whichSign === "+") {
      setTotal((old) => old + Number(numString));
      setNumString("");
      setWhichSign("");
    } else if (whichSign === "-") {
      let hello = Number(numString) - total;
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
  function onCCBtnClick() {
    setWhichSign("");
    setTotal(0);
    setNumString("");
  }

  function ifNoneShow0() {
    if (numString === "") {
      return "0";
    } else {
      return numString;
    }
  }

  return (
    <div className="calculatorCont">
      <div className="calc">
        <div className="calcScreen">
          <div className="screenTop">
            TOTAL: {total} {whichSign}
          </div>
          <div className="screenBottom">
            {" "}
            <h1>STRING: {ifNoneShow0()}</h1>
          </div>
        </div>
        <div className="calcButtons">
          <div className="butRow">
            <button onClick={() => onNumBtnClick(1)}>1</button>
            <button onClick={() => onNumBtnClick(2)}>2</button>
            <button onClick={() => onNumBtnClick(3)}>3</button>
          </div>
          <div className="butRow">
            <button onClick={() => onNumBtnClick(4)}>4</button>
            <button onClick={() => onNumBtnClick(5)}>5</button>
            <button onClick={() => onNumBtnClick(6)}>6</button>
          </div>
          <div className="butRow">
            <button onClick={() => onNumBtnClick(7)}>7</button>
            <button onClick={() => onNumBtnClick(8)}>8</button>
            <button onClick={() => onNumBtnClick(9)}>9</button>
          </div>
          <div className="butRow">
            <button onClick={() => onNumBtnClick(0)}>0</button>
          </div>
          <div className="butRow">
            <button onClick={() => onAddBtnClick()}>+</button>
            <button onClick={() => onSubBtnClick()}>-</button>
            <button onClick={() => onMultiplyBtnClick()}>*</button>
            <button onClick={() => onDivideBtnClick()}>÷</button>
          </div>
          <div className="butRow">
            <button onClick={() => onEqualBtnClick()}>=</button>
            <button onClick={() => onCCBtnClick()}>CC</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
