import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EditAd from '../EditAd.js'


class SearchProduct extends Component{
    constructor(props){
        super(props);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.state={ data:[] }
        
    }
    handlesubmit(event){
        event.preventDefault();
        var data= new FormData(event.target);
        var search=data.get('search')
     

        var body={
            "product_id": search
            
        }
        var requestOptions = {
            "method": "POST",
            "headers": {
              "Content-Type":"application/json",
              "Access-Control-Allow-Origin":"*",
              'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Accept'
            }
          };
          requestOptions["body"] = JSON.stringify(body);
          console.log(requestOptions);
        fetch("http://127.0.0.1:8080/edit",requestOptions)
        .then(res => res.json())
        .then(json => this.setState({ data:json }));
        
    }
    

    render(){
        var flag=1
            if(this.state.data[0]!=undefined){
                flag=1;
            }
            else{
                flag=2;
            }
        return(
            <Router>
                            <div class="search">
                            <form onSubmit={this.handlesubmit}>
                                <label for="search">Enter product ID</label>
                                <input type="number" id="search" name="search" />
                                <button type="submit">SEARCH!</button>
                                hey there 
                                <Link to="/editad"><button>Click to Edit!</button></Link>
                                <Route to="/editad" component={EditAd}/>
                            </form>
                           


                            
                            {this.state.data.map(el => (
                            <div>{el.product_name}</div>
                    ))}
                   
                        </div>

            </Router>
           
        );

    }
}
export default SearchProduct