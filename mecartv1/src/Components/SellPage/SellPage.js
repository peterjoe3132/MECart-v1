import React, { Component } from 'react';

import './SellPage.css';

import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import EditAd from '../EditAd/EditAd'
import SearchProduct from '../EditAd/SearchProduct/SearchProduct'
import NewAd from '../NewAd/NewAd'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class SellPage extends Component {
    render() {
      return (
        <Router>
      <div className="Sell">
          <Row >
              <Col sm="6" style={{padding:'3%'}}>
                <Card body inverse style={{backgroundColor:'rgba(0,0,0,0.5)', borderColor: 'rgba(0,0,0,0)', padding:'18%', height:'60rem'}}>

                    <CardTitle style={{fontSize:'3rem', padding:'20px'}}>Edit My Ad</CardTitle>
                    <CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
                    Already Posted an Ad but don't like how it looks? Then get editing.
                </CardText>
                         <Link to="/edit"><Button id="buttonE" size="lg" block>Edit</Button></Link>
                </Card>
              </Col>
             <Col sm="6" style={{padding:'3%'}}>
                <Card body inverse style={{backgroundColor:'rgba(0,0,0,0.5)', padding:'18%', height:'100%',width:'100%',border:'none'}}>
                    <CardTitle style={{fontSize:'3rem', padding:'20px'}}>New Ad</CardTitle>
                    <CardText style={{ textAlign:'justify', textJustify:'inter-word', padding:'40px'}}>
                    Planning on selling something? Post your Ad right here,       
                     nowhere else.The button down here.
                </CardText>
                         <Link to="/newAd"><Button id="buttonN" size="lg" block>New</Button></Link>
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