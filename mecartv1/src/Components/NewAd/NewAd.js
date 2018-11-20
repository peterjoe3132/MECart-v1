// import React, { Component } from 'react';
// import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
// import './NewAd.css';
// import './bootstrap.css'
// class NewAd extends Component{
//     render(){
//         return(
//             <div className="new">
//             <Form >
//         <Row form >
//           <Col md={6}>
//             <FormGroup inline >
//               <Label for="exampleEmail" className="mr-sm-2">Email</Label>
//               <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//             </FormGroup>
//           </Col>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="examplePassword">Password</Label>
//               <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//             </FormGroup>
//           </Col>
//         </Row>
//         <FormGroup>
//           <Label for="exampleAddress">Address</Label>
//           <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
//         </FormGroup>
//         <FormGroup>
//           <Label for="exampleAddress2">Address 2</Label>
//           <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
//         </FormGroup>
//         <Row form>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="exampleCity">City</Label>
//               <Input type="text" name="city" id="exampleCity"/>
//             </FormGroup>
//           </Col>
//           <Col md={4}>
//             <FormGroup>
//               <Label for="exampleState">State</Label>
//               <Input type="text" name="state" id="exampleState"/>
//             </FormGroup>
//           </Col>
//           <Col md={2}>
//             <FormGroup>
//               <Label for="exampleZip">Zip</Label>
//               <Input type="text" name="zip" id="exampleZip"/>
//             </FormGroup>  
//           </Col>
//         </Row>
//         <FormGroup check>
//           <Input type="checkbox" name="check" id="exampleCheck"/>
//           <Label for="exampleCheck" check>Check me out</Label>
//         </FormGroup>
//         <Button>Sign in</Button>
//       </Form>

//          </div>
//         );
//     }
// }

// export default NewAd





import React,{Component} from 'react'
import './NewAd.css'
import logo from './logo.png'
import './bootstrap.css'

class NewAd extends Component{
    render(){
        return(
            <div className="new">
<<<<<<< HEAD
            <div className="formstyle">

             {/* <img className="logo" src={logo} width="100" height="100"/> */}
            <form className="unit">
                    <div className="form-group ">
                        <label for="AdTitle">Ad Title *</label>
                        <input type="text" className="form-control" id="AdTitle" placeholder="Enter Title here" required maxLength="25"/>
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

                            <div className="form-group col">
                                <label for="AdDescription">Ad Description*</label>
                                <textarea className="form-control" id="AdDescription" rows="3" required maxLength="200"></textarea>
                                <small id="passwordHelpBlock" class="form-text text-muted">
                                Should not exceed 200 words
                                </small>
                    </div>
                    
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
                        {/* <div className="form-group col"  >
                                <label for="category" required>Class*</label>
                                <select className="form-control" id="Category" required >
                                <option value="0">Select Class:</option>
                                <option>Class 1</option>
                                <option>Class 2</option>
                                <option>Class 3</option>
                                <option>Class 4</option>
                                <option>Class 5</option>
                                <option>Class 6</option>
                                <option>Class 7</option>
                                <option>Class 8</option>
                                </select>
                            </div>
                             */}
                        
                            
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
=======
             <Form style={{paddingLeft:'10%', paddingRight:'10%'}}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Product Name</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
          </Col>
        </Row>
        
         <FormGroup>
          <Label for="exampleText">Product Description</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Photo</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Upload Photo
          </FormText>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Name</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
          <Label for="exampleNumber">Number</Label>
          <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
        </FormGroup>
          </Col>
          <Col md={2}>
             <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
        </Row>
       
      </Form>

         </div>
>>>>>>> f2369457b836c15be06f4ad16f575cd0f1bc050f
        );
    }
}
export default NewAd
