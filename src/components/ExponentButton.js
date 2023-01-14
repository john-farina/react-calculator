import { useState } from "react";

export default function ExponentButton({ exp, onExponentClick, classes }) {
  let [lightClass, setLightClass] = useState("");

  function changeLightClass() {
    setLightClass("lightOn");
    setTimeout(() => {
      setLightClass("");
    }, 70);
  }
  return (
    <div className={`container ${classes}`}>
      <div className={`redLight ${lightClass}`}></div>
      <div className="defaultButton">
        <div className="buttonBack"></div>
        <div
          className="buttonSquare"
          onClick={() => {
            changeLightClass();
            onExponentClick(exp);
          }}
        >
          <div className="button"></div>
        </div>
      </div>
      <p className="buttonText">{exp}</p>
    </div>
  );
}
