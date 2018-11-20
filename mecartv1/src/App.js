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
	    	<div id="body">
	    	   <Row>
	      			<Col sm="6">
	       				<Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333', padding:'18%' }}>
	          				<CardTitle style={{fontSize:'3rem', padding:'20px'}}>Buy</CardTitle>
	          				<CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
	          				It is a long established fact that a reader will be distracted by the readable 
	          				content of a page when looking at its layout. The point of using Lorem Ipsum is that it 
	          				has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
	          				content here', making it look like readable English.
	          				</CardText><br/><br/><br/>
	           					<Link to="/buy"><Button color="primary" size="lg" block>Buy</Button></Link>
	        			</Card>
	      			</Col>
	      			<Col sm="6">
	        			<Card body style={{borderColor: 'white', padding:'18%' }}>
	          				<CardTitle style={{fontSize:'3rem', padding:'20px'}}>Sell</CardTitle>
	          				<CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
	          				It is a long established fact that a reader will be distracted by the readable 
	          				content of a page when looking at its layout. The point of using Lorem Ipsum is that it 
	          				has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
	          				content here', making it look like readable English.
	          				</CardText><br/><br/><br/>
	          					<Link to="/sell"><Button color="primary" size="lg" block>Sell</Button></Link>
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