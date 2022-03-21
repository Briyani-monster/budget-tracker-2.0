import Months from "../../Resourcres/Months";
import Bar from "./Bar";
import "./ChartBar.scss";
function ChartBar({ data }) {
  let result = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0,
  };
  data.forEach((val) => (result[Months[val.date.getMonth()]] += +val.ammount));
  let max =
    result[
      Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b))
    ];
  console.log(max, result);
  return (
    <div className="chartbar">
      {Months.map((val, index) => (
        <Bar
          key={index}
          isempty={data.length === 0}
          dataval={result[val]}
          max={max}
          month={val}
        />
      ))}
    </div>
  );
}
export default ChartBar;
