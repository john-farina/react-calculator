export default function NumberButton({ number, onNumBtnClick }) {
  return (
    <div className="container">
      <div className="defaultButton">
        <div className="buttonBack"></div>
        <div className="buttonSquare" onClick={() => onNumBtnClick(number)}>
          <div className="button"></div>
        </div>
      </div>
      <p className="buttonText">{number}</p>
    </div>
  );
}
