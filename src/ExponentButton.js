export default function ExponentButton({ exp, giveExponentClick }) {
  return (
    <div className="container orange">
      <div className="defaultButton">
        <div className="buttonBack"></div>
        <div
          className="buttonSquare"
          onClick={() => {
            giveExponentClick(exp);
          }}
        >
          <div className="button"></div>
        </div>
      </div>
      <p className="buttonText">{exp}</p>
    </div>
  );
}
