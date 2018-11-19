import React, { Component } from 'react';

import './BuyPage.css';

const item1={
  "productname":"abc",
  "imgsrc":"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjC4ry_3ODeAhVLp48KHR2oCI0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeauty%2F&psig=AOvVaw3pwm-2yFnCfljIAqQdSWJR&ust=1542726040477644",
  "price":"2000"
}

class BuyPage extends Component {
    render() {
      return (<div className="Buy">
      <header className="Buy-header">
        <p>
        BUY PAGE
        </p>
      </header>
      <div className="grid-container">
    <Item itemdetails={item1}/>
  </div> 
  
    </div>
      );
    }
  }
  class Item extends Component {
    constructor(props){
      super(props);
      this.productname=this.props.itemdetails.productname;
      console.log(props);
      this.imgsrc=props.imgsrc;
      this.price=props.price;
      }
    render() {
      return (
      <div className="grid-item">{this.productname}</div>
      );
    }
  }
export default BuyPage