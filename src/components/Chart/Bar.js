import "./Bar.scss";
import Fill from "./Fill";
function Bar({ isempty, dataval, max, month }) {
  let height = Math.trunc((dataval / max) * 100);
  if (isempty) height = 0;
  return (
    <div className="bar">
      <div className="bar-chart">
        <Fill heightval={height} />
      </div>
      <div className="bar-title">{month}</div>
    </div>
  );
}
export default Bar;
