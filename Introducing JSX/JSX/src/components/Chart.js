import "./Chart.css";
import ChartBar from "./ChartBar";

export default function Chart(props) {
  let total = 0;
  for (const datapoint of props.dataPoints) {
    total += Number(datapoint.value);
  }
  // console.log(total);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
