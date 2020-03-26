import { AppNavbarBrand } from '@coreui/react';
import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import logo from '../../../assets/img/brand/logo.svg';
import bg_img from '../../../assets/img/brand/bg_img.png';
import bg_img_two from '../../../assets/img/brand/bg_img_two.png';
class Login extends Component {
  onSubmit = () => {
    console.log('hello');
    this.props.history.push("/");
}




  render() {
    return (
      // style={{backgroundImage: `url(${logo})`
      <div className="login_bg app flex-row align-items-center" style={{background:`url(${bg_img}),url(${bg_img_two})`}}>
        <Container>
          <Row className="justify-content-end">
            <Col md="4">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                    <AppNavbarBrand full={{ src: logo, width: 250, height: 50, alt: 'Smart Portal Logo' }}/>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={this.onSubmit}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
