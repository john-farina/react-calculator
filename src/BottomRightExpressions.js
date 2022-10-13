import AddIcon from "./images/plus.svg";
import SubIcon from "./images/minus.svg";
import MultiplyIcon from "./images/multiply.svg";
import DivideIcon from "./images/divide.svg";
import { useState } from "react";

export default function BottomRightExpressions({ whichSign }) {
  let [addStyle, setAddStyle] = useState("");
  let [subStyle, setSubStyle] = useState("");
  let [multStyle, setMultStyle] = useState("");
  let [divideStyle, setDivideStyle] = useState("");
  // const interval = setInterval(() => {
  //   if (whichSign === "+") {
  //     setAddStyle("iconShow");
  //     setSubStyle("");
  //     setMultStyle("");
  //     setDivideStyle("");
  //   } else if (whichSign === "-") {
  //     setSubStyle("iconShow");
  //     setMultStyle("");
  //     setDivideStyle("");
  //     setAddStyle("");
  //   } else if (whichSign === "*") {
  //     setMultStyle("iconShow");
  //     setDivideStyle("");
  //     setAddStyle("");
  //     setSubStyle("");
  //   } else if (whichSign === "/") {
  //     setDivideStyle("iconShow");
  //     setAddStyle("");
  //     setSubStyle("");
  //     setMultStyle("");
  //   }
  // }, 10);

  return (
    <div className="bottomRightExpressions">
      <div className="exBox">
        <img src={AddIcon} className={`exIcon addIcon ${addStyle}`} alt="" />
      </div>
      <div className="exBox">
        <img src={SubIcon} className={`exIcon subIcon ${subStyle}`} alt="" />
      </div>
      <div className="exBox">
        <img
          src={MultiplyIcon}
          className={`exIcon multiplyIcon ${multStyle}`}
          alt=""
        />
      </div>
      <div className="exBox">
        <img
          src={DivideIcon}
          className={`exIcon divideIcon ${divideStyle}`}
          alt=""
        />
      </div>
    </div>
  );
}
