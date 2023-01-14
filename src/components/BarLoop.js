let bars = [];
for (let i = 0; i < 17; i++) {
  bars.push(<div key={i} className="screenBar"></div>);
}

export default function BarLoop() {
  return (
    <>
      <div className="screenBack">{bars}</div>
    </>
  );
}
