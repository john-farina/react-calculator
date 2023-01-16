import { useState } from "react";
import "./App.scss";
import PocketCalculator from "./PocketCalculator";

function App() {
  const [numString, setNumString] = useState("");
  const [total, setTotal] = useState(null);
  const [whichSign, setWhichSign] = useState("");

  function onNumBtnClick(num) {
    if (numString.length === 20) {
      return;
    }

    if (num === "Pi") {
      setNumString(Math.PI);
      return;
    }

    setNumString((old) => old + num.toString());
  }

  function defaultMath(expression) {
    setWhichSign(expression);

    setTotal((old) => {
      let parseNum;

      if (numString === "") {
        // console.log(parseNum, old, "first numString is empty");

        parseNum = 0;

        return;
      }
      // console.log(parseNum, old, "second numString isnt empty");

      parseNum = Number(numString);

      setNumString("");

      if (old === null) {
        return parseNum;
      }

      if (expression === "+") {
        return old + parseNum;
      }

      if (expression === "-") {
        return old - parseNum;
      }

      if (expression === "*") {
        return old * parseNum;
      }

      if (expression === "/") {
        return old / parseNum;
      }

      if (expression === "2") {
        if (parseNum === 0) {
          // console.log("PARSE IS 0", parseNum, old);

          setNumString(old * old);

          return old * old;
        }
        // console.log("PARSE IS HERE", parseNum, old);

        return parseNum * parseNum;
      }
      return alert("ERROR");
    });
  }

  function onExponentClick(op) {
    if (op === "+") {
      defaultMath("+");

      return;
    }

    if (op === "-") {
      defaultMath("-");

      return;
    }

    if (op === "*") {
      defaultMath("*");

      return;
    }

    if (op === "/") {
      defaultMath("/");

      return;
    }

    if (op === "2") {
      defaultMath("2");

      return;
    }

    if (op === "Pi") {
      defaultMath("Pi");

      return;
    }

    if (op === "CC") {
      setWhichSign("");

      setTotal(null);

      setNumString("");

      return;
    }

    console.log("ERROR");
  }

  function onEqualBtnClick() {
    let parseNum = Number(numString);

    if (whichSign === "") {
      return;
    }

    if (whichSign === "+") {
      setTotal((old) => old + parseNum);
    }

    if (whichSign === "-") {
      setTotal((old) => old - parseNum);
    }

    if (whichSign === "*") {
      setTotal((old) => old * parseNum);
    }

    if (whichSign === "/") {
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
        onExponentClick={onExponentClick}
        onEqualBtnClick={onEqualBtnClick}
        whichSign={whichSign}
      />
    </div>
  );
}

export default App;
