import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';



import  BuyPage from "./Components/BuyPage/BuyPage.js";
import SellPage from "./Components/SellPage/SellPage.js"


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <p>
          <Link to="/buy"><button >BUY</button></Link>
          <Link to="/sell"><button >SELL</button></Link>
          </p>
        </header>
        <Route path="/buy" component={BuyPage} />
        <Route path="/sell" component={SellPage} />
      </div>
      </Router>
    );
  }
}




export default App;
