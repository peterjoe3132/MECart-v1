import React, { Component } from 'react';

import './SellPage.css';


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
        <header className="Sellbuttons">
          <p>
          <Link to="/edit"><button className="primary" >EDIT MY AD</button></Link>
          <Link to="/newAd"><button >NEW AD</button></Link>
          </p>
        </header>
        <Route path="/edit" component={EditAd} />
        <Route path="/newAd" component={NewAd} />
      </div>
      </Router>
      );
    }
  }
  export default SellPage