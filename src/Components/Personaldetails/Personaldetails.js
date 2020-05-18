import React, { Component } from 'react';
import moment from 'moment';
import { Button, Label, Col, Row, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
const dateFormat = 'DD/MM/YYYY';
export default class Personaldetails extends Component {
  render() {
    return (
      <div>
        <Form action="" method="post">
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input defaultValue='Varghese' type="text" id="firstName" placeholder="Enter your first Name" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input  defaultValue='Mathew' type="text" id="lastName" placeholder="Enter your last name" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="personalEmail">Email</Label>
                <Input defaultValue='mathew.0303@gmail.com'type="email" id="personalEmail" placeholder="Enter your email id" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="mobile">Mobile</Label>
                <Input type="text" id="mobile" placeholder="9970692927" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input defaultValue='03-03-1975' id="dob" name="dob" placeholder="Birthday" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="vat">PAN</Label>
                <Input type="text" id="pan" placeholder="ATZPM0882C" />
              </FormGroup>
            </Col>
          </Row>

        </Form>
      </div>
    )
  }
}