import  { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function Linechart() {
  const [product, setProduct] = useState([]);
  const[option, setOption]= useState(
    {
        title:{ text:"Product sell in 2021"},
        xaxis:{
            title:{text:"Product Sell in Months"},
            categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        },
        yaxis:{
            title:{text:"Product in K"}                 
        }

    }
);

  useEffect(() => {
    // Make an HTTP request to fetch the data from the API
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => {
        // Process the fetched data and update the state
        const productData = data.map((item) => ({
          name: item.title,
          data: [parseInt(item.price)],
        }));
        setProduct(productData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className='container-fluid mt-3 mb-3'>
      <h2>Line Chart </h2>
      <Chart type='line' width={390} height={250} series={product} options={option}>
      </Chart>
    </div>
  );
}

export default Linechart;
