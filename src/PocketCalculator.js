import BarLoop from "./BarLoop";
import NumberButton from "./NumberButton";
import ExponentButton from "./ExponentButton";
import SpinContainer from "./SpinContainer";
import { useState } from "react";
export default function PocketCalculator({
  ifNoneShow,
  onNumBtnClick,
  onCCBtnClick,
  onAddBtnClick,
  onSubBtnClick,
  onMultiplyBtnClick,
  onDivideBtnClick,
  onEqualBtnClick,
  giveExponentClick,
}) {
  function barLoop() {
    for (let i = 0; i < 8; i++) {
      return <div className="screenBar"></div>;
    }
  }
  let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, null, "="];
  let exponentArray = ["+", "-", "*", "/"];
  let [ran1] = useState(Math.random() * 381);
  let [ran2] = useState(Math.random() * 401);

  return (
    <div className="pocketCalculator">
      <div className="topHolder">
        <div className="middleOpening">
          {/* <div className="openingTop"></div> */}
        </div>
        <div className="textContainer">
          <p>pocket calculator</p>
        </div>
      </div>

      <div className="top">
        <div className="topLogos">
          <p className="KOtext">
            J . F <span className="exPoint">!</span>
          </p>
        </div>
        <div className="topLogos"></div>
        <div className="topLogos"></div>
      </div>

      <div className="screenContainer">
        <div className="screenBack">
          <BarLoop />
        </div>
        <div className="screen">
          <div className="mainText">
            <p className="text backText">88888888888888888888</p>
            <p className="text ">{ifNoneShow()}</p>
          </div>
          .
        </div>
      </div>

      <div className="bottom">
        <div className="topRow">
          <div className="container orange orangeStripe">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onCCBtnClick()}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">CC</p>
          </div>
          <div className="emptyCont"></div>
          <div className="emptyCont"></div>
          {/* //////////SPIN CONTAINER */}
          <SpinContainer spin={ran1} />
          <SpinContainer spin={ran2} />
        </div>
        <div className="bottomContainer">
          <div className="bottomLeft">
            {numberArray.map((num) => {
              if (num === null) {
                return <div className="emptyCont"></div>;
              }
              if (num === "=") {
                return (
                  <div className="container orange orangeStripe">
                    <div className="defaultButton">
                      <div className="buttonBack"></div>
                      <div
                        className="buttonSquare"
                        onClick={() => onEqualBtnClick()}
                      >
                        <div className="button"></div>
                      </div>
                    </div>
                    <p className="buttonText">=</p>
                  </div>
                );
              }
              return (
                <NumberButton onNumBtnClick={onNumBtnClick} number={num} />
              );
            })}
          </div>
          <div className="bottomRight">
            {exponentArray.map((exp) => {
              return (
                <ExponentButton
                  exp={exp}
                  giveExponentClick={giveExponentClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
