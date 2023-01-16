import TopDesign from "./components/TopDesign";
import ScreenAndButtons from "./components/ScreenAndButtons";

export default function PocketCalculator({
  setDefaultScreen,
  onNumBtnClick,
  onExponentClick,
  onEqualBtnClick,
  whichSign,
}) {
  return (
    <div className="pocketCalculator">
      <TopDesign />
      <ScreenAndButtons
        setDefaultScreen={setDefaultScreen}
        onExponentClick={onExponentClick}
        onEqualBtnClick={onEqualBtnClick}
        onNumBtnClick={onNumBtnClick}
        whichSign={whichSign}
      />
    </div>
  );
}
