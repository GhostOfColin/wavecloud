import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="concert-image">
    {/* <div className="concert-image"></div> */}
    <h2 className="brand" >WaveCloud</h2>
      <nav className="login-signup">
    <Link to="/login">Sign in</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Create account</Link>
  </nav>
  </div>
    
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome to WaveCloud, {currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;