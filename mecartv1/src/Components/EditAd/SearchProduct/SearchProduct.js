import React, { Component } from 'react';

class SearchProduct extends Component{
    constructor(){
        super();
        this.handlesubmit=this.handlesubmit.bind(this);
        
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
        var resp= fetch("http://127.0.0.1:8080/edit",requestOptions);
    }

    render(){
        return(
            <div class="search">
                <form>
                    <label for="search">Enter product ID</label>
                    <input type="number" id="search" name="search" />
                    <button type="submit">SEARCH!</button>
                </form>
            </div>
        );

    }
}
export default SearchProduct