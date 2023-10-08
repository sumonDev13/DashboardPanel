import  { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // Define a function to fetch user information
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users/1'); // Replace with your API endpoint
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <div style={{textAlign:'center'}}><h1>Dashboard</h1></div>
      <div className="user-info">
        <h2>User Information</h2>
        <p>First Name: {userInfo.firstName}</p>
        <p>Last Name: {userInfo.lastName}</p>
        <p>age: {userInfo.age}</p>
        <p>University: {userInfo.university}</p>
        <p>Phone: {userInfo.phone}</p>
      
      </div>
    </div>
  );
};

export default Dashboard;
