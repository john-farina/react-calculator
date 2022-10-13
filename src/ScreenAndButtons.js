import BarLoop from "./BarLoop";
import SpinContainer from "./SpinContainer";
import NumberButton from "./NumberButton";
import ExponentButton from "./ExponentButton";
import BottomRightExpressions from "./BottomRightExpressions";
import ScreenTexture from "./images/screen.jpeg";
import TopRightClock from "./TopRightClock";

let ran1 = Math.random() * 381;
let ran2 = Math.random() * 401;
let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, null, "="];
let exponentArray = ["+", "-", "*", "/", "2", "Pi"];

export default function ScreenAndButtons({
  setDefaultScreen,
  onExponentClick,
  onEqualBtnClick,
  onNumBtnClick,
  whichSign,
}) {
  return (
    <>
      <div className="screenContainer">
        <BarLoop />

        <div className="screen">
          <img src={ScreenTexture} className="screenTexture" />
          <TopRightClock />
          <BottomRightExpressions whichSign={whichSign} />
          <div className="mainText">
            <p className="text backText">88888888888888888888</p>
            <p className="text ">{setDefaultScreen()}</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="topRow">
          <div className="container orange orangeStripe">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div
                className="buttonSquare"
                onClick={() => onExponentClick("CC")}
              >
                <div className="button"></div>
              </div>
            </div>

            <p className="buttonText">CC</p>
          </div>

          <div className="emptyCont"></div>
          <div className="emptyCont"></div>

          <SpinContainer spin={ran1} />
          <SpinContainer spin={ran2} />
        </div>

        <div className="bottomContainer">
          <div className="bottomLeft">
            {numberArray.map((num) => {
              if (num === null) {
                return <div key={num} className="emptyCont"></div>;
              }

              if (num === "=") {
                return (
                  <div key={num} className="container orange orangeStripe">
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
                <NumberButton
                  key={num}
                  onNumBtnClick={onNumBtnClick}
                  number={num}
                />
              );
            })}
          </div>

          <div className="bottomRight">
            {exponentArray.map((exp) => {
              if (exp === "Pi") {
                return (
                  <ExponentButton
                    exp={exp}
                    onExponentClick={onExponentClick}
                    key={exp}
                    classes={"whiteStripe"}
                  />
                );
              }
              return (
                <ExponentButton
                  exp={exp}
                  onExponentClick={onExponentClick}
                  key={exp}
                  classes={"orange"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
