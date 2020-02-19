import React from 'react';
import Personaldetails from '../../Components/Personaldetails/Personaldetails';
import Employmentdetails from '../../Components/Employmentdetails/Employmentdetails'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GaugeChart from 'react-gauge-chart';
import {Card,
  CardBody,
  CardHeader,} from 'reactstrap';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Perosnal Details', 'Employment Details','Credit Score','Loan Eligibility'];
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
        <div>
        <GaugeChart id="gauge-chart1" 
        textColor={"black"}
        />
        </div>
        </CardBody>
        </Card>);
    case 3:
      return 'Loan Eligibility';
    default:
      return 'Unknown stepIndex';
  }
}

export default function Creditscore() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
