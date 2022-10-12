import BarLoop from "./BarLoop";
export default function PocketCalculator({
  ifNoneShow,
  onNumBtnClick,
  onCCBtnClick,
  onAddBtnClick,
  onSubBtnClick,
  onMultiplyBtnClick,
  onDivideBtnClick,
  onEqualBtnClick,
}) {
  function barLoop() {
    for (let i = 0; i < 8; i++) {
      return <div className="screenBar"></div>;
    }
  }

  return (
    <div className="pocketCalculator">
      <div className="topHolder">
        <div className="middleOpening">
          <div className="openingTop"></div>
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
          <div className="mainTextContainer">
            <p className="text backText">8888888888888888</p>
            <p className="text frontText">{ifNoneShow()}</p>
          </div>
          <div className="totalTextContainer">
            <p className="totalText">TOTAL:</p>
            <p className="totalNumber totalBack">00000000000000</p>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="buttonRow">
          <div className="container orange">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onCCBtnClick()}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">CC</p>
          </div>
        </div>
        <div className="buttonRow">
          {/* //////////////  1  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(1)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">1</p>
          </div>

          {/* //////////////  2  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(2)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">2</p>
          </div>

          {/* //////////////  3  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(3)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">3</p>
          </div>

          {/* //////////////  + //////////////// */}
          <div className="container orange">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onAddBtnClick()}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">+</p>
          </div>
        </div>
        <div className="buttonRow">
          {/* //////////////  4  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(4)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">4</p>
          </div>

          {/* //////////////  5  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(5)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">5</p>
          </div>

          {/* //////////////  6  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(6)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">6</p>
          </div>

          {/* //////////////  - //////////////// */}
          <div className="container orange">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onSubBtnClick()}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">-</p>
          </div>
        </div>
        <div className="buttonRow">
          {/* //////////////  7  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(7)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">7</p>
          </div>

          {/* //////////////  8  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(8)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">8</p>
          </div>

          {/* //////////////  9  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(9)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">9</p>
          </div>

          {/* //////////////  * //////////////// */}
          <div className="container orange">
            <div className="defaultButton">
              <div
                className="buttonBack"
                onClick={() => onMultiplyBtnClick()}
              ></div>
              <div className="buttonSquare">
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">*</p>
          </div>
        </div>
        <div className="buttonRow">
          {/* //////////////  0  //////////////// */}
          <div className="container">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onNumBtnClick(0)}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">0</p>
          </div>

          {/* //////////////  EMPTY //////////////// */}
          <div className="emptyCont"></div>
          {/* //////////////  EMPTY //////////////// */}
          <div className="emptyCont"></div>

          {/* //////////////  / //////////////// */}
          <div className="container orange">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onDivideBtnClick()}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">/</p>
          </div>

          {/* //////////////  = //////////////// */}
          <div className="container orange">
            <div className="defaultButton">
              <div className="buttonBack"></div>
              <div className="buttonSquare" onClick={() => onEqualBtnClick()}>
                <div className="button"></div>
              </div>
            </div>
            <p className="buttonText">=</p>
          </div>
        </div>
      </div>
    </div>
  );
}
