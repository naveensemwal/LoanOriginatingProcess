import React, { Component } from 'react';
import { Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


export default class Employmentdetails extends Component {
    render() {
        return (
            <div>
                <Form action="" method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Username</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="username3" name="username3" autoComplete="name"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Email</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" id="email3" name="email3" autoComplete="username"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Password</InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id="password3" name="password3" autoComplete="current-password"/>
                      <InputGroupAddon addonType="append">
                        <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Form>
            </div>
        )
    }
}
