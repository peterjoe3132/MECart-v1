import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './App.css';
import  BuyPage from "./Components/BuyPage/BuyPage.js";
import SellPage from "./Components/SellPage/SellPage.js"

class App extends Component {
  render() {
    return (
    	<Router>
	    	<div>
	    	   <Row>
	      			<Col sm="6">
	       				<Card body>
	          				<CardTitle>Special Title Treatment</CardTitle>
	          				<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
	           					<Link to="/buy"><Button>Go somewhere</Button></Link>
	        			</Card>
	      			</Col>
	      			<Col sm="6">
	        			<Card body>
	          				<CardTitle>Special Title Treatment</CardTitle>
	          				<CardText>With supporting text below as a natural lead-in to additional content.</CardText>
	          					<Link to="/sell"><Button>Go somewhere</Button></Link>
	        			</Card>
	      			</Col>
	    		</Row>
	    	<Route path="/buy" component={BuyPage} />
	    	<Route path="/sell" component={SellPage} />   
	    	</div>
        </Router>
    );
  }
}

export default App;