import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';
import React, { Component } from 'react';
import Iframe from 'react-iframe';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { Table } from 'reactstrap';


// import FileViewer from 'react-file-viewer';

const file = 'http://localhost:8080/viewone/images/tomcat.gif'
const type = 'gif'


export default class Dms extends Component {
  state = { viewURL: 'http://localhost:8080/viewone/index.html', }
  render() {
    return (

      <SplitterLayout
        // position="horizontal"
        primaryPaneMaxHeight="100%"
        primaryPaneMinHeight={0}
        primaryPaneHeight="400px"
        style={{ height: '500px' }}

      >

        <div style={{ height: '730px' }}> <Table responsive bordered size="sm" className="tblDesign2">
          <thead>
            <tr className="tblTrDesign">
              <th>Document Type</th>
              <th>File Name</th>
              <th>Received Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tblTrDesign">
              <td>Signed Application Form</td>
              <td>ApplicationForm.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/ApplicationForm.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Pan Card</td>
              <td>PanCard.jpg</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/PanCard.jpg' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Passport</td>
              <td>Passport_VM.png</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Passport.png' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Salary Slip</td>
              <td>Salary_Slip_Oct_Mar.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Salary_Slip_Oct_Mar.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Last 6 month statement</td>
              <td>Statement.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Statement.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>

            <tr className="tblTrDesign">
              <td>Copy of original sale deed</td>
              <td>Saledeed.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Saledeed.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Residence Verification Report</td>
              <td>RVReport.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Residence_Check_Report.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Employment Verification Report</td>
              <td>EMPReport.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Payslip.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Legal Verification Report</td>
              <td>LegalReport.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Payslip.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Property Valuation Report</td>
              <td>PVReport.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Payslip.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Credit Report</td>
              <td>CIBIL.pdf</td>
              <td>03-04-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/Cibil_Score.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Income Proof</td>
              <td>AccountStatement.pdf</td>
              <td>28-01-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/LAPAccountStatement.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            <tr className="tblTrDesign">
              <td>Current Address Proof</td>
              <td>EBill.pdf</td>
              <td>28-01-2030</td>
              <td>
                <center>
                  <IconButton aria-label="delete" onClick={() => {
                    this.setState({ viewURL: 'http://localhost:8080/viewone/Document/LAPEBill.pdf' });
                  }}>
                    <PageviewIcon />
                  </IconButton>
                </center>
              </td>
            </tr>
            
          </tbody>
        </Table></div>
        <div>
          <Iframe url={this.state.viewURL}
            id="myId"
            className="myClassname"
            width="100%"
            height="730 px"
          />
        </div>


      </SplitterLayout>

    )
  }
}
