import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

<<<<<<< HEAD
const item1={
  "productname":"abc",
  "imgsrc":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjC4ry_3ODeAhVLp48KHR2oCI0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw3pwm-2yFnCfljIAqQdSWJR&ust=1542726040477644",
  "price":"2000"
}
=======
import BuyPage from './Components/BuyPage/BuyPage.js';
import SellPage from './Components/SellPage/SellPage.js'



>>>>>>> afa8a5a157bb761532b01a060a93af0d4eaf2d15

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

<<<<<<< HEAD
class Buypage extends Component {
 
  render() {
    return (<div className="Buy">
    <header className="Buy-header">
      <p>
      BUY PAGE
      </p>
    </header>
    <div className="grid-container">
    { <Item itemdetails={item1}/> }
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

class Item extends Component {
  constructor(props){
    super(props);
    this.productname=this.props.itemdetails.productname;
    console.log(props);
    var imgsrc=props.imgsrc;
    var price=props.price;
    }
  render() {
    return (
    <div className="grid-item">{this.productname}</div>
    );
  }
}
=======

>>>>>>> afa8a5a157bb761532b01a060a93af0d4eaf2d15
export default App;
