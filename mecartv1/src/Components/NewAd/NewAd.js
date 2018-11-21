




import React,{Component} from 'react'
import './NewAd.css'
import logo from './logo.png'
import './bootstrap.css'

class NewAd extends Component{
    constructor(){
        super();
        this.handlesubmit=this.handlesubmit.bind(this);
        
    }
    
    handlesubmit(event){
        event.preventDefault();
        var data= new FormData(event.target);
        var adtitle=data.get('AdTitle')
        var body={
            "adtitle": adtitle
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
      var resp=  fetch("http://127.0.0.1:8080/sellad",requestOptions);
    }
        
    render(){
        return(
            <div className="new">

            <div className="formstyle">

             {/* <img className="logo" src={logo} width="100" height="100"/> */}
            <form className="unit" onSubmit={this.handlesubmit} /*action = "http://127.0.0.1:8080/sellad" method = "POST"*/>
                    <div className="form-group ">
                        <label for="AdTitle">Ad Title *</label>
                        <input type="text" className="form-control" name="AdTitle" id="AdTitle" placeholder="Enter Title here" required maxLength="25"/>
                        <small id="AdTitleHelpBlock" class="form-text text-muted">
                        Title should not exceed 25 characters
                        </small>                 
                    </div>
                 <div className="row">
                            <div className="form-group col" >
                                <label for="category" required>Category*</label>
                                <select className="form-control" id="Category" required >
                                <option value="0">Select Category:</option>
                                <option>Stationary</option>
                                <option>Books</option>
                                <option>Electronics</option>
                                {/* <option></option> */}
                                </select>
                            </div>
</div>
                         <div className="form-group col">
                                <label for="AdDescription">Ad Description*</label>
                                <textarea className="form-control" id="AdDescription" rows="3" required maxLength="200"></textarea>
                                <small id="passwordHelpBlock" class="form-text text-muted">
                                Should not exceed 200 words
                                </small>
                    </div>
                    
               
                   
                    
                   <div className="row">

                        <div className="form-group col">
                            <label for="AdPhotos">Upload Photos*</label>
                            <input type="text" className="form-control" id="AdPhotos" placeholder="Insert URL" required/>
                            <small id="passwordHelpBlock" class="form-text text-muted">
                            Tip:Photos attract buyers
                            </small>
                        </div>


                        <div className="form-group col">
                            <label for="AdPrice">Price *</label>
                            <input type="number" className="form-control" id="AdPrice" placeholder="Enter Price here" required />
                                        
                        </div>
                    
                   </div>
                   <hr></hr>
                  

                   <div className="row">

                    <div className="form-group col ">
                        <label for="ContactName">Name *</label>
                        <input type="text" className="form-control" id="ContactName" placeholder="Enter Name here" required maxLength="25"/>
                        <small id="AdTitleHelpBlock" className="form-text text-muted">
                            Name to be displayed on the Ad
                        </small>                 
                    </div>

                     <div className="form-group col ">
                        <label for="ContactNum">Phone *</label>
                        <input type="tel" className="form-control" id="ContactNum" placeholder="Enter Phone number here" required maxLength="10"/>
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
                            <button className="btn btn-primary" type="submit">Post Ad</button>

                   </div>
                </form>
              

            </div>
              

            </div>

        );
    }
}
export default NewAd
