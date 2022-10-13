import { useState } from "react";
import "./App.scss";
import PocketCalculator from "./PocketCalculator";

function App() {
  const [numString, setNumString] = useState("");
  const [total, setTotal] = useState(null);
  const [whichSign, setWhichSign] = useState("");
  // const [firstHasEnded, setFirstHasEnded] = useState(false);

  ////
  function onNumBtnClick(num) {
    setNumString((old) => old + num);
  }

  // function clearSignAndDoMath() {
  //   if (whichSign === "+") {
  //   }
  // }

  function onAddBtnClick() {
    // setWhichSign("+");
    // setTotal((old) => old + Number(numString));
    // setNumString("");
    setWhichSign("+");
    setTotal((old) => {
      if (old === null) {
        setNumString("");
        return Number(numString);
      }
      setNumString("");
      return old + Number(numString);
    });
  }

  function onSubBtnClick() {
    setWhichSign("-");
    setTotal((old) => {
      if (old === null) {
        setNumString("");
        return Number(numString);
      }
      setNumString("");
      return old - Number(numString);
    });
  }

  function onMultiplyBtnClick() {
    setWhichSign("*");
    setTotal((old) => {
      if (old === null) {
        setNumString("");
        return Number(numString);
      }
      setNumString("");
      return old * Number(numString);
    });
  }

  function onDivideBtnClick() {
    console.log("a");
    if (total === null) {
      setWhichSign("/");
      setTotal(Number(numString));
      setNumString("");
    } else {
      setWhichSign("/");
      setTotal((old) => old / Number(numString));
      setNumString("");
    }
  }

  function giveExponentClick(exp) {
    if (exp === "+") {
      onAddBtnClick();
    }
    if (exp === "-") {
      onSubBtnClick();
    }
    if (exp === "*") {
      onMultiplyBtnClick();
    }
    if (exp === "/") {
      onDivideBtnClick();
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
  function onCCBtnClick() {
    setWhichSign("");
    setTotal(null);
    setNumString("");
  }

  function ifNoneShow0() {
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
        ifNoneShow={ifNoneShow0}
        onNumBtnClick={onNumBtnClick}
        giveExponentClick={giveExponentClick}
        onCCBtnClick={onCCBtnClick}
        onEqualBtnClick={onEqualBtnClick}
      />

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
