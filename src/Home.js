import React from 'react';

 // Import your bank image
 import logo from './bank.jpg'; 
const Home = () => {
  return (
    <div className="container">
      <div className="card mt-5">
       
        <div className="card-body">
          <h5 className="card-title">Welcome to Our Bank</h5>
         
          <img className="card-body" src={logo} alt="Banking App Logo" style={{ width: '400px' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
