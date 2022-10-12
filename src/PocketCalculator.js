import BarLoop from "./BarLoop";
export default function PocketCalculator() {
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
            K . O <span className="exPoint">!</span>
          </p>
        </div>
        <div className="topLogos"></div>
        <div className="topLogos"></div>
      </div>
      <div className="screenContainer">
        <div className="screenBack">
          <div className="screen"></div>

          <BarLoop />
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
