import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

const Chart = () => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Make an API call to your Express.js API endpoint
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        // Handle the received chart data here
        setChartData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); // Empty dependency array to ensure the API call is made once on component mount

  
  const barColors = [
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
      <div className="weekly-spend-categories-container-content">
        <div>
          <h2 className="subheading">Balance sheet</h2>
        </div>
      </div>

      <BarChart data={chartData} width={400} height={150}>
        <XAxis dataKey="title" stroke="#000000" fontSize="12px" />
        <YAxis
          tickFormatter={(tick) => `$${tick}`}
          stroke="#000000"
          fontSize="12px"
          color="#333333"
        />
        <Bar
          dataKey="price"
          fill="#FD4438"
          barSize={20}
          color="#333333"
          radius={[5, 5, 0, 0]}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
