import React, { Component } from 'react';
import './App.css';
import BuyPage from './Components/BuyPage/BuyPage.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



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
        <Route path="/sell" component={Sellpage} />
      </div>
      </Router>
    );
  }
}


class Sellpage extends Component {
  render() {
    return (<div className="Sell" >
    <header className="sell-header">
      <p>
      SELL PAGE
      </p>
    </header>
  </div>
    );
  }
}
export default App;
