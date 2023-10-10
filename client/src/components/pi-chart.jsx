import  { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import axios from "axios";


const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];


const PieRechartComponent = () => {
  const [pieData, setPieData] = useState([]);

  useEffect(() => {
    // Make an API call to your Express.js API endpoint for pie chart data
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setPieData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
      console.log()
  }, []);

  return (
    <PieChart width={930} height={300}>
      <Pie
        data={pieData}
        color="#000000"
        dataKey="title"
        nameKey="price"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  );
};

export default PieRechartComponent;
