import React from 'react';
import background from "./images/background.jpg"
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import { render } from "react-dom";

function App() {
  return (

    <div className="App">
      <PortfolioContainer />

      <header className="App-header">
        <img src={background} className="Background" alt="background" />
        <p>

        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
