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
	    	   <Row sm="">
	      			<Col sm="6">
<<<<<<< HEAD
	       				<Card body inverse style={{ backgroundColor: '#333', borderColor: 'rgba(0,0,0,0)', padding:'8%', height:'100%' ,width:'100%',border:'0%'}}>
=======
	       				<Card body inverse style={{ backgroundColor: '#333', borderColor: 'rgba(0,0,0,0)', padding:'18%', height:'60rem'}}>
>>>>>>> f2369457b836c15be06f4ad16f575cd0f1bc050f
	          				<CardTitle style={{fontSize:'3rem', padding:'20px'}}>Buy</CardTitle>
	          				<CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
	          				It is a long established fact that a reader will be distracted by the readable 
	          				content of a page when looking at its layout. The point of using Lorem Ipsum is that it 
	          				has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
	          				content here', making it look like readable English.
	          				<Link to="/buy"><Button color="primary" size="lg" block>Buy</Button></Link>
							  </CardText>
	           					{/* <Link to="/buy"><Button color="primary" size="lg" block>Buy</Button></Link> */}
	        			</Card>
	      			</Col>
	      			<Col sm="6">
	        			<Card body style={{borderColor: 'white', padding:'8%', height:'100%',width:'100%',border:'none'}}>
	          				<CardTitle style={{fontSize:'3rem', padding:'20px'}}>Sell</CardTitle>
	          				<CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
	          				It is a long established fact that a reader will be distracted by the readable 
	          				content of a page when looking at its layout. The point of using Lorem Ipsum is that it 
	          				has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
	          				content here', making it look like readable English.
	          				
							  <Link to="/sell"><Button color="primary" size="lg" block>Sell</Button></Link>
							  </CardText>
	          					
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