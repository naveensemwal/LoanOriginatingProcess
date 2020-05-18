import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Label } from 'reactstrap';
import { Steps, Button, message } from 'antd';
import Personaldetails from '../Personaldetails/Personaldetails';
import Employmentdetails from '../Employmentdetails/Employmentdetails';
import ReactSpeedometer from "react-d3-speedometer";
import 'antd/dist/antd.css';
import Loancalculator from "../Loancalculator/Loancalculator";

const { Step } = Steps;

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (<Card>
        <CardHeader className='Cust_Eligibility_form_wizard_group'>
          <strong>Personal Details</strong>
        </CardHeader>
        <CardBody>
          <Personaldetails></Personaldetails>
        </CardBody>
      </Card>);
    case 1:
      return (<Card>
        <CardHeader className='Cust_Eligibility_form_wizard_group'>
          <strong>Employment Details</strong>
        </CardHeader>
        <CardBody>
          <Employmentdetails></Employmentdetails>
        </CardBody>
      </Card>);
    case 2:
      return (<Card>
        <CardHeader className='Cust_Eligibility_form_wizard_group'>
          <strong>Credit Score</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col></Col>
            <Col><div style={{ width: '500px', height: '300px' }}><ReactSpeedometer
              value={765}
              needleHeightRatio={0.7}
              labelFontSize="15px"
              valueTextFontSize="23px"
              fluidWidth="true"
              currentValueText="Your Credit Score : 765"
            /></div></Col>
            <Col></Col>
          </Row>
        </CardBody>
      </Card>);
    case 3:
      return (
        <Card>
          <CardHeader className='Cust_Eligibility_form_wizard_group'>
            <strong>EMI Calculator</strong>
          </CardHeader>
          <CardBody>
            <Loancalculator></Loancalculator>
          </CardBody></Card>
      );
    default:
      return 'Unknown stepIndex';
  }
}

const steps = [
  {
    title: 'Perosnal Details',
    content: getStepContent(0),
  },
  {
    title: 'Employment Details',
    content: getStepContent(1),
  },
  {
    title: 'Credit Score',
    content: getStepContent(2),
  },
  {
    title: 'Loan Eligibility',
    content: getStepContent(3),
  },
];

class Eligibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  handleReset = () => {
    this.setState({
      current: 0,
    });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        {this.state.current === steps.length ? <div className="steps-content">
          <Card><CardBody><center>
            <i className="fa fa-smile-o font100Px greenClr" aria-hidden="true"></i>
          </center>
            <center><Label className="font24Px noPadding noMargin list-group-item-success list-group-item noBackgroundColor noBorder">Thank You!!!</Label></center>
            <center><Label className="font16Px noPadding noMargin list-group-item-danger list-group-item noBackgroundColor noBorder">Customer Tier : Gold</Label></center>
            <center><Col lg="6">Please handover the documents to your respective
            Sales Manager</Col></center>
            <br />
            <center><Button onClick={this.handleReset} variant="contained" color="primary" style={{ float: "center" }}>Reset</Button></center>
          </CardBody></Card>

        </div> :
          <div className="steps-content">{steps[current].content}</div>}
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Apply
            </Button>
          )}
          {current > 0 && current !== steps.length && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}

Eligibility.propTypes = {
  classes: PropTypes.object,
};

export default Eligibility;
