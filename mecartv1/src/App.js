import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import './App.css';
import  BuyPage from "./Components/BuyPage/BuyPage.js";
import SellPage from "./Components/SellPage/SellPage.js"

class App extends Component {
  render() {
    return (
		// Router tag opened to route to the different components.
    	<Router>
	    	<div id="body">
	    	   <Row >
	      			<Col sm="6" style={{padding:'3%'}}>
	       				<Card body inverse style={{backgroundColor:'rgba(0,0,0,0.5)', 
	       				 borderColor: 'rgba(0,0,0,0)', padding:'18%', height:'60rem'}}>

	          				<CardTitle style={{fontSize:'3rem', padding:'20px'}}>Buy</CardTitle>
	          				<CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
												Welcome to MECart, an online buying and selling platform exclusively for the students of MODEL ENGINEERING COLLEGE.
												MECians can buy used products like books,stationeries,mini drafter etc at lower rates from this site.
										</CardText>
	           				<Link to="/buy"><Button id="buttonB" size="lg" block>Buy</Button></Link>
	        			</Card>
	      			</Col>
	      			<Col sm="6" style={{padding:'3%'}}>
	        				<Card body inverse style={{backgroundColor:'rgba(0,0,0,0.5)', padding:'18%', height:'100%',width:'100%',border:'none'}}>
										<CardTitle style={{fontSize:'3rem', padding:'20px'}}>Sell</CardTitle>
										<CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
													MECart connects local people to buy, sell or exchange used goods and services by making it  
													fast and easy for anyone to post a listing on the web.MECians can sell used products like books,stationeries,mini drafters etc in this site.
										</CardText>
										<Link to="/sell"><Button id="buttonS" size="lg" block>Sell</Button></Link>
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
