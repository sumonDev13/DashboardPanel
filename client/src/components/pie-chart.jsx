import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie, PieChart, Cell } from "recharts";

const PieChartComponent = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Make an API call to your Express.js API endpoint for pie chart data
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setChartData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const pieColors = [
    "#FD4438",
    "#452F02",
    "#4807EA",
    "#FD4438",
    "#4807EA",
    "#452F02",
    "#FD4438",
  ];

  return (
    <div>
      <div className="pie-chart-container">
        <h2 className="subheading">Pie Chart</h2>
      </div>

      <PieChart width={400} height={300}>
        <Pie
          dataKey="value"
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
