import '../App.css'
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to the Home page.</h1>
      <div>
        <span>
         <h4>Want to see Dashboard ? </h4>
          </span>
          <Link to="/login"> 
          <button>Go to Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
