import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import App from './app';
import Contact from './contact';
const About = () => {
  return(
    <div>
    <h1>About Page....!!</h1>
    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default About;