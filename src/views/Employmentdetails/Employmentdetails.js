import React, { Component } from 'react';
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';


export default class Employmentdetails extends Component {
  render() {
    return (
      <div>
        <Form action="" method="post">
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="employer">ComcompanyIdy Name</Label>
                <Input type="text" id="employer" placeholder="Google" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="designation">Designation</Label>
                <Input type="text" id="designation" placeholder="Manager" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="businessEmail">Business Email</Label>
                <Input type="email" id="businessEmail" placeholder="Enter business email id" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="businessPhone">Business Phone</Label>
                <Input type="number" id="businessPhone" placeholder="enter business phone number" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="doj">Date of Joining</Label>
                <Input type="date" id="doj" name="doj" placeholder="Joining Date" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="companyId">Employee Code</Label>
                <Input type="number" id="companyId" placeholder="311016" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="monthlySalary">Monthly Take Home Salary</Label>
                <Input type="number" id="monthlySalary" name="monthlySalary" placeholder="30000" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="monthlyEmi">Monthly EMI</Label>
                <Input type="number" id="monthlyEmi" placeholder="5000" />
              </FormGroup>
            </Col>
          </Row>

        </Form>
      </div>
    )
  }
}