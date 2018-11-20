import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './NewAd.css';

class NewAd extends Component{
    render(){
        return(
            <div className="new">
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
        );
    }
}

export default NewAd
