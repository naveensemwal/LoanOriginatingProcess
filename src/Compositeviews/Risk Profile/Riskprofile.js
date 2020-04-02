import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { Progress, Table } from 'reactstrap';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Riskprofile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>  <strong>Worldwatch Results</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Customer Name</th>
                      <th className="text-center">Search Parameter</th>
                      <th>Match Data</th>
                      <th className="text-center">Rank</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>Ashwini Mathew</div>
                      </td>
                      <td className="text-center">
                      Customer Name
                      </td>
                      <td className="text-center">
                        <small className="text-muted"></small>
                      </td>
                      <td>
                        <div className="clearfix">
                        <div className="text-center">
                            <strong>60</strong>
                          </div>
                        </div>
                        
                      </td>
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="warning" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      Nationality of Customer
                      </td>
                      <td >
                        <small className="text-muted">India</small>
                      </td>
                      <td>
                        <div className="clearfix">
                        <div className="text-center">
                            <strong>90</strong>
                          </div>
                        </div>
                        
                      </td>
                      <td>
                        <div className="small text-muted"><strong>High Risk</strong></div>
                        <Progress className="progress-xs" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      <div>Does not belong to </div> 
                      <div>any political party</div>
                      </td>
                      <td >
                        <small className="text-muted">Politically Exposed Customer </small>
                      </td>
                      <td>
                        <div className="clearfix">
                        <div className="text-center">
                            <strong>50</strong>
                          </div>
                        </div>
                       
                      </td>
                      <td>
                        <div className="small text-muted"><strong>High Risk</strong></div>
                        <Progress className="progress-xs" color="danger" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      <div>Not associated with</div>
                      <div>terrorist activity</div> 
                      </td>
                      <td >
                        <small className="text-muted">Politically Exposed</small>
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="text-center">
                            <strong>50</strong>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="danger" value="100" />
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Hunter Results</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Customer Name</th>
                      <th className="text-center">Search Data</th>
                      <th>Match Data</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      Tax Evasion
                      </td>
                      <td className="text-center">
                        <small className="text-muted">NA</small>
                      </td>
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      Bankruptcy Fraud
                      </td>
                      <td >
                        <small className="text-muted">NA</small>
                      </td>
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      <div>Identify Theft</div> 
                      </td>
                      <td >
                        <small className="text-muted">NA</small>
                      </td>
                      
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      <div>Money Laundaring</div>
                    
                      </td>
                      <td >
                        <small className="text-muted">NA</small>
                      </td>
                      
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="success" value="100" />
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><strong>Internal Compliance Rules</strong></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Customer Name</th>
                      <th className="text-center">Rule</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      Derog comments in CIBIL report
                      </td>
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      Internal blacklist customer check
                      </td>
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="success" value="100" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Varghese Mathew</div>
                      </td>
                      <td className="text-center">
                      Negative DPD in credit report
                      </td>
                      <td>
                        <div className="small text-muted"><strong>Low Risk</strong></div>
                        <Progress className="progress-xs" color="success" value="100" />
                      </td>
                    </tr>
                  </tbody>
                </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
