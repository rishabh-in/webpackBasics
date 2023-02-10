import React from 'react';
import {render} from 'react-dom';
import '../style/style.css';
const App = () => {
  return(
    <div>
      <h1>Hello Webpack....!!!!</h1>
    </div>
  )
}

render(<App/>, document.getElementById("root"))