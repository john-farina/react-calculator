import { useState } from "react";

export default function SpinContainer({ spin }) {
  console.log(spin);
  let [animClass, setAnimClass] = useState("");
  let [animation, setAnimation] = useState(false);

  function addSpinAndRemove() {
    if (!animation) {
      setAnimation(true);
      setAnimClass("spinAnimate");
      setTimeout(() => {
        setAnimClass("");
        setAnimation(false);
      }, 900);
    }
  }

  return (
    <div className="bigSpinContainer">
      <div className="backing">
        <div className="longRows"></div>
        <div className="longRows"></div>
        <div className="longRows"></div>
      </div>
      <div
        className="buttonContainer"
        onClick={() => {
          addSpinAndRemove();
        }}
      >
        <div className={`button ${animClass}`}>
          <div
            className="buttonIndent"
            style={{ transform: `rotate(${spin}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
