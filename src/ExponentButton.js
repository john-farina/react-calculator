export default function ExponentButton({ exp, onExponentClick, classes }) {
  return (
    <div className={`container ${classes}`}>
      <div className="defaultButton">
        <div className="buttonBack"></div>
        <div
          className="buttonSquare"
          onClick={() => {
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
