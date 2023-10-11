import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function Piechart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        const data = response.data.map((item) => ({
          title: item.title,
          price: parseFloat(item.price),
        }));

        setChartData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <h2 className="mt-3">Pie-chart</h2>
        <Chart
          type="pie"
          width={390}
          height={250}
          series={chartData.map((item) => item.price)}
          options={{
            colors: ["#f90000", "#f0f", "#0c5a90", "#83b130", "#ffde01"],
            labels: chartData.map((item) => item.title),
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Piechart;
