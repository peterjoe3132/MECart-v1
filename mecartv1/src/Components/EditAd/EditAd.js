import React, { Component } from 'react';
import './EditAd.css';

class EditAd extends Component
{
    constructor(props){
        super(props);
        this.handlesubmit=this.handlesubmit.bind(this);
        this.state={data:{}}
    }
    handlesubmit(event){
        event.preventDefault();
        var data= new FormData(event.target);
        var productid=data.get('ProductID')
        var adtitle=data.get('AdTitle')
        var category=data.get('Category')
        var adesc=data.get('AdDescription')
        var adprice=data.get('AdPrice')
        var adphoto=data.get('AdPhotos')
        var contname=data.get('ContactName')
        var contnum=data.get('ContactNum')

        var body={
            "product_id":productid,
            "adtitle": adtitle,
            "category": category,
            "adesc":adesc,
            "adprice": adprice,
            "adphoto":adphoto,
            "contname":contname,
            "contnum":contnum
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
        fetch("http://127.0.0.1:8080/editad",requestOptions)
        .then(res => res.json())
        .then(json => this.setState({ data:json }));
        
    
    }
    defaultvalues(e) {
        console.log("heyyyy")
        if(this.state.data[0].product_name==undefined){
            console.log("hey");
            return("Enter value")
        }
        else
        {
            console.log("hello");
            return (this.state.data[0].product_name)
           
        }
        
    }

    render(){
        return(
            <div className="new">

            <div className="formstyle">

             {/* <img className="logo" src={logo} width="100" height="100"/> */}
            <form className="unit" onSubmit={this.handlesubmit} >
                    <div>
                        <label for="AdTitle">Product Id *</label><br/>
                        <input type="Number" className="text" name="ProductID" id="ProductID"  placeholder="Enter the product ID here" required maxLength="25"/>
                        <small id="ProductIDHelpBlock" class="form-text text-muted">
                        Title should not exceed 25 characters
                        </small> 

                    </div>
                    <div className="form-group ">
                        <label for="AdTitle">Ad Title *</label><br/>
                        <input type="text" className="text" name="AdTitle" id="AdTitle"  placeholder="Enter Title here" required maxLength="25"/>
                        <small id="AdTitleHelpBlock" class="form-text text-muted">
                        Title should not exceed 25 characters
                        </small>                 
                    </div>
                 <div className="row">
                            <div className="form-group col" >
                                <label for="category" required>Category*</label><br/>
                                <select className="text" id="Category" name="Category" required >
                                <option value="0" >Select Category:</option>
                                <option style={{color:'black'}}>Stationary</option>
                                <option style={{color:'black'}}>Books</option>
                                <option style={{color:'black'}}>Electronics</option>
                            
                                </select>
                            </div>
                        </div>
                         <div className="form-group col">
                                <label for="AdDescription">Ad Description*</label><br/>
                                <textarea className="text" id="AdDescription" rows="3" name="AdDescription"   required maxLength="200"></textarea>
                                <small id="passwordHelpBlock" classNameass="form-text text-muted">
                                Should not exceed 200 words
                                </small>
                                </div> 
                    
               
                   
                    
                   <div className="row">

                        <div className="form-group col">
                            <label for="AdPhotos">Upload Photos*</label><br/>
                            <input type="text" className="text" id="AdPhotos" name="AdPhotos"  placeholder="Insert URL" required/>
                            <small id="passwordHelpBlock" class="form-text text-muted">
                            Tip:Photos attract buyers
                            </small>
                        </div>


                        <div className="form-group col">
                            <label for="AdPrice">Price *</label><br/>
                            <input type="number" className="text" id="AdPrice" name="AdPrice"  placeholder="Enter Price here" required />
                                        
                        </div>
                    
                   </div>
                   <hr></hr>
                  

                   <div className="row">

                    <div className="form-group col ">
                        <label for="ContactName">Name *</label><br/>
                        <input type="text" className="text" id="ContactName" name="ContactName" placeholder="Enter Name here" required maxLength="25"/>
                        <small id="AdTitleHelpBlock" className="form-text text-muted">
                            Name to be displayed on the Ad
                        </small>                 
                    </div>

                     <div className="form-group col ">
                        <label for="ContactNum">Phone *</label><br/>
                        <input type="tel" className="text" id="ContactNum" name="ContactNum" placeholder="Enter Phone number here" required maxLength="10"/>
                        <small id="AdTitleHelpBlock" className="form-text text-muted">
                            Contact to be shown
                        </small>                 
                    </div>
                   
                   </div>
                    

                  <div className="row">
                       
                        
                            
                            <div class="form-check col terms">
                                <input class="form-check-input" type="checkbox" value="" id="Terms" required/>
                                <label class="form-check-label" for="Terms">
                                * I agree to the terms and conditions 
                                </label>
                            </div>
                           

                   </div>
                   <button className="buttonP" type="submit">Post Ad</button>
                </form>
                    <br/><br/><br/>
                 
            </div>
              

            </div>

        );
    }
}
export default EditAd