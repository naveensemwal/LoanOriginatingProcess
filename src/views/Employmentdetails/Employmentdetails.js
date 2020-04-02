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
                <Label htmlFor="employer">Company ID</Label>
                <Input defaultValue='768767' type="text" id="employer" placeholder="Google" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="designation">Designation</Label>
                <Input defaultValue='Senior Manager' type="text" id="designation" placeholder="Manager" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="businessEmail">Business Email</Label>
                <Input defaultValue='mathew.0303@abc.com' type="email" id="businessEmail" placeholder="Enter business email id" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="businessPhone">Business Phone</Label>
                <Input defaultValue="02224116750" type="number" id="businessPhone" placeholder="02224116750" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="doj">Date of Joining</Label>
                <Input  id="doj" name="doj" placeholder="Joining Date" defaultValue="23-04-2019"/>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="companyId">Employee Code</Label>
                <Input  defaultValue='35746' type="number" id="companyId" placeholder="311016" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label htmlFor="monthlySalary">Monthly Take Home Salary</Label>
                <Input defaultValue='100000' type="number" id="monthlySalary" name="monthlySalary" placeholder="30000" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label htmlFor="monthlyEmi">Monthly EMI</Label>
                <Input defaultValue='31669' type="number" id="monthlyEmi" placeholder="5000" />
              </FormGroup>
            </Col>
          </Row>

        </Form>
      </div>
    )
  }
}