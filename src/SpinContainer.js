export default function SpinContainer({ spin }) {
  console.log(spin);
  return (
    <div className="bigSpinContainer">
      <div className="backing">
        <div className="longRows"></div>
        <div className="longRows"></div>
        <div className="longRows"></div>
      </div>
      <div className="buttonContainer">
        <div className="button">
          <div
            className="buttonIndent"
            style={{ transform: `rotate(${spin}deg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
