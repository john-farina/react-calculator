import Moment from "react-moment";

export default function TopRightClock() {
  return (
    <div className="topRightClock">
      <div className="timeBox">
        <Moment className="timeText" local format="hh:mm" interval={100} />
      </div>
      <div className="amPmBox">
        <div className=" pm">
          <Moment local format="A" interval={2000} />
        </div>
      </div>
    </div>
  );
}
