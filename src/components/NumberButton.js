import { useState } from "react";

export default function NumberButton({
  number,
  onNumBtnClick,
  onEqualBtnClick,
}) {
  let [lightClass, setLightClass] = useState("");
  function changeLightClass() {
    setLightClass("lightOn");
    setTimeout(() => {
      setLightClass("");
    }, 70);
  }

  if (number === "=") {
    return (
      <div key={number} className="container orange orangeStripe">
        <div className={`redLight ${lightClass}`}></div>

        <div className="defaultButton">
          <div className="buttonBack"></div>

          <div
            className="buttonSquare"
            onClick={() => {
              changeLightClass();
              onEqualBtnClick();
            }}
          >
            <div className="button"></div>
          </div>
        </div>

        <p className="buttonText">=</p>
      </div>
    );
  } else if (number === "Pi") {
    return (
      <div className="container whiteStripe">
        <div className={`redLight ${lightClass}`}></div>

        <div className="defaultButton">
          <div className="buttonBack"></div>

          <div
            className="buttonSquare"
            onClick={() => {
              changeLightClass();
              onNumBtnClick("Pi");
            }}
          >
            <div className="button"></div>
          </div>
        </div>

        <p className="buttonText">Pi</p>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className={`redLight ${lightClass}`}></div>

        <div className="defaultButton">
          <div className="buttonBack"></div>

          <div
            className="buttonSquare"
            onClick={() => {
              changeLightClass();
              onNumBtnClick(number);
            }}
          >
            <div className="button"></div>
          </div>
        </div>

        <p className="buttonText">{number}</p>
      </div>
    );
  }
}
