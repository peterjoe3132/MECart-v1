import React, { Component } from 'react';

import './SellPage.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import EditAd from '../EditAd/EditAd'
import NewAd from '../NewAd/NewAd'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SellPage extends Component {
    render() {
      return (
        // <Router>
        //   <div className="Sell">
        //   <div className="buttons">
        //     <Link to="/edit"><button>Edit My Ad</button></Link>
        //     <Link to="/newAd"><button>New Ad</button></Link>
        //   </div>
        
          
        //   <Route path='/edit' Component={EditAd} />  
        //   <Route path='/newAd' Component={EditAd} />        
        //   </div>

        // </Router>





        <Router>
      <div className="Sell">
          <Row >
              <Col sm="6">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: 'rgba(0,0,0,0)', padding:'18%', height:'60rem'}}>

                    <CardTitle style={{fontSize:'3rem', padding:'20px'}}>Edit My Add</CardTitle>
                    <CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
                    It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it 
                    has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English.
                </CardText>
                         <Link to="/edit"><Button color="primary" size="lg" block>Edit</Button></Link>
                </Card>
              </Col>
             <Col sm="6">
                <Card body style={{borderColor: 'white', padding:'18%', height:'100%',width:'100%',border:'none'}}>
                    <CardTitle style={{fontSize:'3rem', padding:'20px'}}>New Add</CardTitle>
                    <CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
                    It is a long established fact that a reader will be distracted by the readable 
                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it 
                    has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English.
                </CardText>
                         <Link to="/newAd"><Button color="primary" size="lg" block>New</Button></Link>
                </Card>
              </Col>
              </Row>
        <Route path="/edit" component={EditAd} />
        <Route path="/newAd" component={NewAd} />
      </div>
      </Router>
      );
    }
  }
  export default SellPage