import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row,Label } from 'reactstrap';
import Personaldetails from '../../../../views/Personaldetails/Personaldetails';
import Employmentdetails from '../../../../views/Employmentdetails/Employmentdetails';
import ReactSpeedometer from "react-d3-speedometer";
import Loancalculator from "../../../../views/Utilities/Loancalculator/Loancalculator";
import Axios from 'axios';
import {message,Form} from 'antd';

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

class Eligibility extends React.Component {


  completeTask = (taskId) => {

    let params = '{"moveTo":"QDE"}';
    let url = `/rest/bpm/wle/v1/task/` + taskId + '?action=complete&params=' + params + '&parts=all';
    
    message.config({ top: 100, });
    message.loading('Submitting Task Data',60).then(
    Axios.put(url, {
      auth: {
        username: 'p8admin',
        password: 'Password123'
      }
    })
      .then(res => {
        message.destroy();
        message.success(`Task completed successfully`, 2);
        this.props.history.push("/inbox");
      })
      .catch(function (error) {
        message.destroy();
        message.error('Something went wrong. Please try again!', 2);
      })
  )
  }


  handleSubmit = e => {
    this.completeTask(this.props.match.params.id);
  };


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
      <Form onSubmit={this.handleSubmit} layout="horizontal">
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
            <Card><CardBody>
            <div className='errorGroups'>
            <center>
            <i className="fa fa-check-circle fa-5x font100Px greenClr" aria-hidden="true"></i>
          </center>
          <center><Label className="font24Px label">Thank You!!!</Label></center>
          <center><Label className="font16Px label">Customer Tier : Gold</Label></center>
          </div>
          <center><Form.Item>
         
        
        
                  
          <Button type="primary" variant="contained" color="primary" htmlType="submit">
            Submit
          </Button>
         
        </Form.Item></center>
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
      </Form>
    );
  }
}

Eligibility.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Eligibility);
