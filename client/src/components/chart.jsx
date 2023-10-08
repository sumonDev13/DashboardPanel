
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

const Chart = () => {
  const barColors = [
    "#FD4438",
    "#452F02",
    "#4807EA",
    "#FD4438",
    "#4807EA",
    "#452F02",
    "#FD4438",
  ];
  const BarData = [
    {
      day: "Mo",
      cost: 25,
    },
    {
      day: "Tu",
      cost: 35,
    },
    {
      day: "We",
      cost: 30,
    },
    {
      day: "Th",
      cost: 25,
    },
    {
      day: "Fr",
      cost: 30,
    },
    {
      day: "Sa",
      cost: 35,
    },
    {
      day: "Su",
      cost: 20,
    },
  ];
  return (
    <div>
      <div className="weekly-spend-categories-container-content">
        <div>
          <h2 className="subheading">Balance sheet</h2>
        </div>
      </div>

      <BarChart data={BarData} width={400} height={150}>
        <XAxis dataKey="day" stroke="#000000" fontSize="12px" />
        <YAxis
          tickFormatter={(tick) => `$${tick}`}
          stroke="#000000"
          fontSize="12px"
          color="#333333"
        />
        <Bar
          dataKey="cost"
          fill="#FD4438"
          barSize={20}
          color="#333333"
          radius={[5, 5, 0, 0]}
        >
          {BarData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
