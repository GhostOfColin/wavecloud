import React from 'react';
import { login } from './../../actions/session_actions';

const demoLogin = () => {

  return <button className="guest-button" onClick={() => dispatch(login({username: 'guest', password: 'password'}))} >Try it as a Guest</button>

};

export default demoLogin;