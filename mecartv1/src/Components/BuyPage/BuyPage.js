import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './BuyPage.css';
import  Product from "../Product/Product";



class BuyPage extends Component {
  constructor(props) {
    super(props);
    //states declared to read the different products
    this.state = { data: [] };
  }
  
  componentDidMount() {
  //function to get data from the server .
  //This function is called after the corresponding component is rendered correctly.
    var requestOptions = {
      "method": "POST",
      "headers": {
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
      }
    };
    // console.log(requestOptions);
    //fetch request to the server
    fetch('http://127.0.0.1:8080/buyproduct',requestOptions)
    .then(res => res.json())
    //json is used so as to get jus the body data
    //the details of the product is stored in the data state in json format
    .then(json => this.setState({ data: json }));
    }
    render() {
      return (<div className="Buy">
      <header className="Buy-header">
      </header> 
      {/* the map function is called to display all the items in the database using a loop */}
      {this.state.data.map(el => (
             <Item itemdetails={el}/>
          ))}  
    </div>
      );
    }
  }

  class Item extends Component {
    constructor(props){
      super(props);
      //props decalred so as to read the different attributes of each product
      this.productname=this.props.itemdetails.product_name;
      // console.log(props); 
      this.imgsrc=this.props.itemdetails.imgurl;
      this.price=this.props.itemdetails.price;
      this.contname=this.props.itemdetails.contact_name
      this.phone=this.props.itemdetails.phone
      }
    render() {
      return (
        //Each product is displayed in the following format
        //the component Item is called with the details send as props
          <div style={{padding:'20px'}}>
          
            <div className="flex">
              <div> <img width="200px"  height="200px "src={this.imgsrc}/></div>
              <br/>
              <div>{this.productname}</div>
              <div>Contact Name:{this.contname}</div>
              <div>Contact Number:{this.phone}</div>
              <b>Price:{this.price}</b>
            </div>
              
       

       </div>
      );
    }
  }
export default BuyPage