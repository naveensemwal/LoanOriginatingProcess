import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row,Label } from 'reactstrap';
import Personaldetails from '../../Personaldetails/Personaldetails';
import Employmentdetails from '../../Employmentdetails/Employmentdetails';
import ReactSpeedometer from "react-d3-speedometer";
import Loancalculator from "../Loancalculator/Loancalculator";
const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Perosnal Details', 'Employment Details', 'Credit Score', 'Loan Eligibility'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (<Card>
        <CardHeader>
          <strong>Personal Details</strong>
        </CardHeader>
        <CardBody>
          <Personaldetails></Personaldetails>
        </CardBody>
      </Card>);
    case 1:
      return (<Card>
        <CardHeader>
          <strong>Employment Details</strong>
        </CardHeader>
        <CardBody>
          <Employmentdetails></Employmentdetails>
        </CardBody>
      </Card>);
    case 2:
      return (<Card>
        <CardHeader>
          <strong>Credit Score</strong>
        </CardHeader>
        <CardBody>
          <Row>
            <Col></Col>
            <Col><div style={{width: '500px',height: '300px'}}><ReactSpeedometer
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
        <CardHeader>
          <strong>Emi Calculator</strong>
        </CardHeader>
      <CardBody>
      <Loancalculator></Loancalculator>
       </CardBody></Card>
      );
    default:
      return 'Unknown stepIndex';
  }
}

class Eligibility extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <Card><CardBody><center>
            <i className="fa fa-smile-o font100Px greenClr" aria-hidden="true"></i>
          </center>
          <center><Label className="font24Px noPadding noMargin list-group-item-success list-group-item noBackgroundColor noBorder">Thank You!!!</Label></center>
          <center><Label className="font16Px noPadding noMargin list-group-item-danger list-group-item noBackgroundColor noBorder">Customer Tier : Gold</Label></center>
          <center><Col lg="6">Please handover the documents to your respective
            Sales Manager</Col></center>
            <br/>
            <center><Button onClick={this.handleReset} variant="contained" color="primary" style={{float: "center"}}>Reset</Button></center>
              </CardBody></Card>
 
          ) : (
              <div style={{padding: "0px 0px 5px 0px "}}>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    variant="contained" color="primary"
                  >
                    Back
                </Button>
                  <Button variant="contained" color="primary" onClick={this.handleNext} style={{float: "right"}}>
                    {activeStep === steps.length - 1 ? 'Apply' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

Eligibility.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Eligibility);
