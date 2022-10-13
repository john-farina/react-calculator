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
      let parseNum;
      if (numString === "") {
        parseNum = 0;
      } else {
        parseNum = Number(numString);
      }
      setNumString("");

      if (old === null) {
        return parseNum;
      }

      if (expression === "2") {
        if (parseNum === 0) {
          console.log("PARSE IS 0", parseNum, old);
          setNumString(old * old);
          return old * old;
        }
        console.log("PARSE IS HERE", parseNum, old);
        return parseNum * parseNum;
      }
      if (expression === "Pi") {
        setTotal((old) => Math.PI);
        return;
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

  function onExponentClick(op) {
    if (op === "+") {
      defaultMath("+");
    } else if (op === "-") {
      defaultMath("-");
    } else if (op === "*") {
      defaultMath("*");
    } else if (op === "/") {
      defaultMath("/");
    } else if (op === "2") {
      defaultMath("2");
    } else if (op === "Pi") {
      defaultMath("Pi");
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
        onExponentClick={onExponentClick}
        onEqualBtnClick={onEqualBtnClick}
      />
    </div>
  );
}

export default App;
