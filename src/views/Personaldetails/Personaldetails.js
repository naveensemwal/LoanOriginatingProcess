import React, { Component } from 'react';

import { Button, Label, Col, Row, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

export default class Personaldetails extends Component {
  render() {
    return (
      <div>
        <Form action="" method="post">
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input type="text" id="firstName" placeholder="Enter your first Name" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input type="text" id="lastName" placeholder="Enter your last name" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="personalEmail">Email</Label>
                <Input type="email" id="personalEmail" placeholder="Enter your email id" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="mobile">Mobile</Label>
                <Input type="text" id="mobile" placeholder="9970691927" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="dob">Date of Birth</Label>
                <Input type="date" id="dob" name="dob" placeholder="Birthday" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="vat">PAN</Label>
                <Input type="text" id="pan" placeholder="DE1234567890" />
              </FormGroup>
            </Col>
          </Row>

        </Form>
      </div>
    )
  }
}