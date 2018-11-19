import React, { Component } from 'react';
import './App.css';
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
        <Route path="/buy" component={Buypage} />
        <Route path="/sell" component={Sellpage} />
      </div>
      </Router>
    );
  }
}

class Buypage extends Component {
  render() {
    return (<div className="Buy">
    <header className="Buy-header">
      <p>
      BUY PAGE
      </p>
    </header>
    <div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div> 

  </div>
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
