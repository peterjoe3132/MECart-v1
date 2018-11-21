import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './BuyPage.css';
import  Product from "../Product/Product";
import GuttersGrid from './tst'


class BuyPage extends Component {
  constructor(props) {
    super(props);

    this.state = { data: [] };
  }
  componentDidMount() {
  
    var requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
      }
    };
    console.log(requestOptions);
    fetch('http://127.0.0.1:8080/buyproduct',requestOptions)
    .then(res => res.json())
    .then(json => this.setState({ data: json }));
    }
    render() {
      return (<div className="Buy">
        <div className="banner">Games</div>
      <header className="Buy-header">
      </header> 
      <div className="grid-container">
      {this.state.data.map(el => (
             <Item itemdetails={el}/>
          ))}  
  </div> 
    </div>
      );
    }
  }

  class Item extends Component {
    constructor(props){
      super(props);
      this.productname=this.props.itemdetails.product_name;
      console.log(props);
      this.imgsrc=this.props.itemdetails.imgurl;
      this.price=this.props.itemdetails.price;
      }
    render() {
      return (
        <Router>
          <div style={{padding:'20px'}}>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <Link to="/product"><div className="grid-item"><div> <img width="20%"  height="20% "src={this.imgsrc}/></div><br/><br/><div>Product Name:{this.productname}</div><b>Price:{this.price}</b></div></Link>    
       <Route path="/product" component={Product} />

       </div>
      </Router>
      );
    }
  }
export default BuyPage