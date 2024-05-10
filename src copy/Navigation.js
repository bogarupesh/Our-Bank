import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import './Navigation.css';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllDataPage from './AllDataPage';
import { UserDataProvider } from './userDataContext';

const Navigation = () => {
  const location = useLocation();

  return (
    <UserDataProvider>
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">Bank App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <NavItem to="/" label="Home" />
              <NavItem to="/create-account" label="Create Account" />
              <NavItem to="/deposit" label="Deposit" />
              <NavItem to="/withdraw" label="Withdraw" />
              <NavItem to="/all-data" label="All Data" />
            </ul>
          </div>
        </div>
      </nav>
      {/* Render the Home component based on the current location */}
      {location.pathname === '/' && <Home />}
      {location.pathname === '/create-account' && <CreateAccount />}
      {location.pathname === '/deposit' && <Deposit />}
      {location.pathname === '/withdraw' && <Withdraw />}
      {location.pathname === '/all-data' && <AllDataPage />}
      
    </>
    </UserDataProvider>
  );
};

const NavItem = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link className="nav-link" to={to}>{label}</Link>
    </li>
  );
};

export default Navigation;
