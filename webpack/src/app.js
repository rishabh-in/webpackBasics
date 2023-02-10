import React from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Contact from './contact';
import About from './about';

const App = () => {
  return(
    <div>
      <h1>Welcome to Webpack....!!!!</h1>
      <h3>This is Home Page....!!!!</h3>
      <Router>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;