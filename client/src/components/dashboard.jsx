// import { useEffect } from "react";
// import axios from "axios";
import Chart from "./chart";
import { useLocation } from 'react-router-dom';
import '../App.css'
import Piechart from "./pi-chart";


const Dashboard = () => {
  // const [userInfo, setUserInfo] = useState({});
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');

  // useEffect(() => {
  //   // Define a function to fetch user information
  //   const fetchUserInfo = async () => {
  //     try {
  //       const response = await axios.get("https://dummyjson.com/users/1"); // Replace with your API endpoint
  //       setUserInfo(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user information:", error);
  //     }
  //   };

  //   fetchUserInfo();
  // }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Dashboard</h1>
        <h2>Welcome to your Dashboard, {username}!</h2>
      </div>
      <div className="dash-container">
        <div className="chart">
            <Chart/>
        </div>
        <div className="table">
            <Piechart/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
