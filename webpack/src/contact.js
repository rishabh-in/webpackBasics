import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import App from './app';
import About from './about';
const Contact = () => {
  return(
    <div>
    <h1>Contact Page....!!</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Contact;