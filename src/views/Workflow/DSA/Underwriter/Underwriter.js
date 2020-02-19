import React, {Component, useState} from 'react';
import { Badge, Collapse, Card, CardBody, CardHeader, CardFooter,
  Form, FormGroup, Label, Input, Col, Row, Button, Modal, ModalHeader, 
  ModalBody, Nav, NavItem, NavLink, TabContent, TabPane, Table,
  Alert, 
  } from 'reactstrap';
import logger from 'react-logger-lib';
import { PDFReader } from 'reactjs-pdf-reader';
import { AppSwitch } from '@coreui/react'
import Riskprofile from '../../../../Components/Risk Profile/Riskprofile'


const SuccessModal = (props) => {
  
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [alert, setAlert] = useState({
    'show': false,
    'style':'',
    'message':''
  });

  return (

    <div>
      <Button color="primary" size="sm" className="btn btn-primary btn-block btn-square" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <center>
            <i className="fa fa-smile-o font100Px greenClr" aria-hidden="true"></i>
          </center>
          <center><Label className="font24Px noPadding noMargin list-group-item-success list-group-item noBackgroundColor noBorder">Thank You!!!</Label></center>
          <center><Label className="font16Px noPadding noMargin list-group-item-danger list-group-item noBackgroundColor noBorder">Customer Tier : Gold</Label></center>
          <center><Col lg="6">Please handover the documents to your respective
            Sales Manager</Col></center>
          <center><Col md="4" className="height38px"><Button type="button" size="sm" className="btn btn-primary marginTop10px btn-block btn-square submitPopBtn" color="primary"><i className="fa fa-thumbs-o-up"></i> Okay</Button>&nbsp;</Col></center>
        </ModalBody>
      </Modal>
    </div>
  );
}
const ModalExample = (props) => {
  
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [alert, setAlert] = useState({
    'show': false,
    'style':'',
    'message':''
  });

  return (

    <div>
      <Button color="primary" className="marginTop4px btn btn-primary btn-block btn-square submitPopBtn" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="btn btn-square btn-primary btn-block" toggle={toggle}>Congratulations!!!</ModalHeader>
        <ModalBody>
          <Alert color="primary" isOpen={alert.show}>
            Customer has been created successfully.
          </Alert>
          <Card>
            <CardBody>
              <Row>
                <Col lg="12">
                  <center>
                    <FormGroup>
                      <Label>
                        Your Loan Application has been approved 
                        subject to verifications and 
                        credit checks
                      </Label>
                    </FormGroup>
                  </center>
                </Col>
              </Row>
              <Row>
                <Col lg="12">
                  <center>
                    <FormGroup>
                      <h5><Label className="list-group-item-danger noBackgroundColor"><b>Loan Amount of Rs. 15,00,125</b></Label></h5>
                    </FormGroup>
                  </center>
                </Col>
              </Row>
            </CardBody>
            <CardFooter>
              <Row>
                <Col lg="6">
                  <SuccessModal
                    isOpen="false"
                    toggle="false"
                    buttonLabel="Accept & Proceed"
                  />
                </Col>
                <Col lg="6">
                  <Button type="button" size="sm" color="danger" className="btn btn-danger btn-block btn-square ">Reject</Button>
                </Col>      
              </Row>
            </CardFooter>
          </Card>
        </ModalBody>
      </Modal>
    </div>
  );
}

class Underwriter extends Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
      viewPDFPanel: false,
      leftPanelWidth: 12,
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };

    this.showHandleClick = this.showHandleClick.bind(this);
    this.hideHandleClick = this.hideHandleClick.bind(this);

    // Collapse Panel Binding
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);

  }

  // Collapse Panel Functions Start
  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }
  // Collapse Panel Funcation End


  // lorem() {
  //   return 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.'
  // }

toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }


  tabPane() {
    return (
      <>

        <TabPane tabId="1">
          <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
            <FormGroup row >
              <Row className="rowStyle width300Px">
                <Col xs="12" sm="12" md="3" lg="auto">
                  <Label>Applicant Type</Label>
                </Col>
                <Col xs="12" sm="12" md="3" lg="auto">
                  <Input type="select" className="float-right" size= "sm" name="selectApplicantType" id="selectApplicantType" disabled>
                    <option value="individual">Individual</option>
                    <option value="nonIndividual">Non Individual</option>
                  </Input>
                </Col>
              </Row>
              <Row className="rowStyle width300Px">
                <Col xs="12" sm="12" md="3" lg="auto">
                  <Label>PAN Number</Label>
                </Col>
                <Col xs="12" sm="12" md="3" lg="auto">
                  <Input type="text" className="float-right" size= "sm" name="panNo" id="panNo" defaultValue="ACKPT5214H"/>
                </Col>
              </Row>
              <Row className="rowStyle width320Px">
                <Col xs="12" sm="12" md="3" lg="auto">
                  <Label>Relationship with Applicant</Label>
                </Col>
                <Col xs="12" sm="12" md="3" lg="auto">
                  <Input type="select" className="float-right" size= "sm" name="relationshipWithApplicant" id="relationshipWithApplicant">
                    <option value="Self">Self</option>
                    <option value="Mother">Mother</option>
                    <option value="Father">Father</option>
                  </Input>
                </Col>
              </Row>
              <Row className="rowStyle width300Px">
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Label>First Name</Label>
                </Col>
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Input type="text" className="float-right" size= "sm" name="firstName" id="firstName" />
                </Col>
              </Row>
              <Row className="rowStyle width300Px">
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Label>Middle Name</Label>
                </Col>
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Input type="text" className="float-right" size= "sm" name="middleName" id="middleName" />
                </Col>
              </Row>
              <Row className="rowStyle width300Px">
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Label>Last Name</Label>
                </Col>
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Input type="text" className="float-right" size= "sm" name="lastName" id="lastName" />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup row >
              <Row className="rowStyle width300Px">
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Label>DOB</Label>
                </Col>
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Input type="date" className="float-right" size= "sm" name="dob" id="dob"/>
                </Col>
              </Row>
              <Row className="rowStyle width300Px">
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Label>Marital Status</Label>
                </Col>
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Input type="select" className="float-right" size= "sm" name="maritalStatus" id="maritalStatus">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </Input>
                </Col>
              </Row>
              <Row className="rowStyle width300Px">
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Label>Mobile No</Label>
                </Col>
                <Col xs="12" sm="12" md="auto" lg="auto">
                  <Input type="text" className="float-right" size= "sm" name="mobile" id="mobile"/>
                </Col>
              </Row>
            </FormGroup>
          </Form>
          {/* {`1. ${this.lorem()}`} */}
          
        </TabPane>
        <TabPane tabId="2">
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Father's First Name</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="fatherFirstName" id="fatherFirstName" />
            </Col>
            <Col xs="12" md="2">
              <Label>Father's Middle Name</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="fatherMiddleName" id="fatherMiddleName" />
            </Col>
            <Col xs="12" md="2">
              <Label>Father's Last Name</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="fatherLastName" id="fatherLastName" />
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Mother's First Name</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="motherFirstName" id="motherFirstName" />
            </Col>
            <Col xs="12" md="2">
              <Label>Mother's Middle Name</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="motherMiddleName" id="motherMiddleName" />
            </Col>
            <Col xs="12" md="2">
              <Label>Mother's Last Name</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="motherLastName" id="motherLastName" />
            </Col>
          </FormGroup>
          {/* {`2. ${this.lorem()}`} */}
        </TabPane>
        <TabPane tabId="3">
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Customer Segment</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="customerSegment" id="customerSegment">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="2">
              <Label>Employment Details</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="employmentDetails" id="employmentDetails">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="2">
              <Label>Year's of Work Experinence</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="yearsOfWorkExp" id="yearsOfWorkExp" />
            </Col>
            <Col xs="12" md="2">
              <Label>Education</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="education" id="education">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="2">
              <Label>Profession</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="profession" id="profession">
                <option value=""></option>
              </Input>
            </Col>
          </FormGroup>
          {/* {`3. ${this.lorem()}`} */}
        </TabPane>
        <TabPane tabId="4">
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Address Type</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="addressType" id="addressType">
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="rentedApartment">Rented Apartment</option>
              </Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Months on Current Address</Label>
            </Col>
            <Col xs="12" md="1">
              <Input type="text" size= "sm" name="monthOnCurrentAddr" id="monthOnCurrentAddr" />
            </Col>
            <Col xs="12" md="3">
              <Label>Years on Current Address</Label>
            </Col>
            <Col xs="12" md="1">
              <Input type="text" size= "sm" name="yearOnCurrentAddr" id="yearOnCurrentAddr" />
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Address 1</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="addr1" id="addr1" />
            </Col>
            <Col xs="12" md="2">
              <Label>Address 2</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="addr2" id="addr2" />
            </Col>
            <Col xs="12" md="2">
              <Label>Address 3</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="addr3" id="addr3" />
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Pincode</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="pincode" id="pincode" />
            </Col>
            <Col xs="12" md="2">
              <Label>City</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="city" id="city">
                <option value="bangalore">Bangalore</option>
                <option value="delhi">Delhi</option>
                <option value="kolkata">Kolkata</option>
                <option value="mumbai">Mumbai</option>
              </Input>
            </Col>
            <Col xs="12" md="2">
              <Label>State</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="state" id="state">
                <option value="karnataka">Karnataka</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="gujarat">Gujarat</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Landmark</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="landmark" id="landmark" />
            </Col>
          </FormGroup>
          {/* {`4. ${this.lorem()}`} */}
        </TabPane>
        <TabPane tabId="5">
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Loan Type</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="loanType" id="loanType" value="Business Loan" disabled>
                <option value="Vehicle Loan">Vehicle Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Business Loan" >Business Loan</option>
                <option value="Loan Against Property">Loan Against Property</option>
                <option value="Personal Loan">Personal Loan</option>
              </Input>
            </Col>
            <Col xs="12" md="2">
              <Label>Scheme</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="scheme" id="scheme">
                <option value="scheme1">Scheme1</option>
                <option value="scheme2">Scheme2</option>
              </Input>
            </Col>
            <Col xs="12" md="2">
              <Label>Tenure in Months</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" name="tenure" id="tenure" />
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Loan Amount</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" name="loanAmount" id="loanAmount" />
            </Col>
          </FormGroup>
        </TabPane>
        <TabPane tabId="6">
          <FormGroup row >
            <Col xs="12" md="1">
            </Col>
            <Col xs="12" md="4">
              <Card>
                <CardHeader>
                  <center>Net banking login by customer</center>
                </CardHeader>
                <CardBody className="height150px">
                  <center>An SMS will be sent to the
                  customer's registered mobile
                  number asking to log in the
                  Net-banking portal.
                  No document upload required
                  Fast eligibility calculation</center>
                </CardBody>
                <CardFooter disabled>
                  <center>
                    <div className="upload-btn-wrapper">
                      <button className="btn-square btn btn-primary btn-block" disabled>Select</button>
                    </div>
                  </center>
                </CardFooter>
              </Card>
            </Col>
            <Col xs="12" md="1">
            </Col>
            <Col xs="12" md="4">
              <Card>
                <CardHeader>
                  <center>Readable PDF Upload</center>
                </CardHeader>
                <CardBody className="height150px">
                  <center>Requires upload of the banks
                  statements in the system.
                  Fast eligibility calculation</center>
                </CardBody>
                <CardFooter>
                  <center>
                    <div className="upload-btn-wrapper">
                      <button className="btn-square btn btn-primary btn-block">Select</button>
                      <input type="file" name="myfile" />
                    </div>
                  </center>
                </CardFooter>
              </Card>
            </Col>
          </FormGroup>
        </TabPane>
        <TabPane tabId="7">
          <Card className="noBorder noPadding">
              <Table responsive bordered size="sm" className="tblDesign2">
                <thead>
                  <tr className="tblTrDesign">
                    <th>Document Category</th>
                    <th>Document Name</th>
                    <th>File Name</th>
                    <th>Status</th>
                    <th>Received Date</th>
                    <th>Defferal Stage</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tblTrDesign">
                    <td>Applicantion Form</td>
                    <td>Signed Application Form</td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormStatus" id="appFormStatus">
                        <option value="pending">Pending</option>
                        <option value="waived">Waived</option>
                        <option value="deferred">Deferred</option>
                      </Input>
                    </td>
                    <td>
                    </td>
                    <td>
                      <Input type="select" size= "sm" name="appFormDeferralStage" id="appFormDeferralStage">
                        <option value="processing">Processing</option>
                        <option value="underwriting">Underwriting</option>
                      </Input>
                    </td>
                    <td>
                      <center>
                        <i className="fa fa-upload sm-primary uploadIcon" aria-hidden="true"></i>&nbsp;&nbsp;
                        <i className="fa fa-file-text sm-primary editIcon" aria-hidden="true"></i>
                      </center>
                    </td>
                  </tr>
                  <tr className="tblTrDesign">
                    <td>ID Proof</td>
                    <td>
                      <Input type="select" size= "sm" name="idDocumentName" id="idDocumentName">
                        <option value="aadhar">Aadhar</option>
                        <option value="pan">PAN</option>
                        <option value="passport">Passport</option>
                        <option value="voterId">Voter Id</option>
                        <option value="drivingLicense">Driving license</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormStatus" id="appFormStatus">
                        <option value="pending">Pending</option>
                        <option value="waived">Waived</option>
                        <option value="deferred">Deferred</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormDeferralStage" id="appFormDeferralStage">
                        <option value="processing">Processing</option>
                        <option value="underwriting">Underwriting</option>
                      </Input>
                    </td>
                    <td>
                      <center>
                        <i className="fa fa-upload sm-primary uploadIcon" aria-hidden="true"></i>&nbsp;&nbsp;
                        <i className="fa fa-file-text sm-primary editIcon" aria-hidden="true"></i>
                      </center>
                    </td>
                  </tr>
                  <tr className="tblTrDesign">
                    <td>Address Proof</td>
                    <td>
                      <Input type="select" size= "sm" name="idDocumentName" id="idDocumentName">
                        <option value="aadhar">Aadhar</option>
                        <option value="passport">Passport</option>
                        <option value="voterId">Voter Id</option>
                        <option value="drivingLicense">Driving license</option>
                        <option value="electricityBill">Electricity Bill</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormStatus" id="appFormStatus">
                        <option value="pending">Pending</option>
                        <option value="waived">Waived</option>
                        <option value="deferred">Deferred</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormDeferralStage" id="appFormDeferralStage">
                        <option value="processing">Processing</option>
                        <option value="underwriting">Underwriting</option>
                      </Input>
                    </td>
                    <td>
                      <center>
                        <i className="fa fa-upload sm-primary uploadIcon" aria-hidden="true"></i>&nbsp;&nbsp;
                        <i className="fa fa-file-text sm-primary editIcon" aria-hidden="true"></i>
                      </center>
                    </td>
                  </tr>
                  <tr className="tblTrDesign">
                    <td>Income Documents</td>
                    <td>
                      <Input type="select" size= "sm" name="idDocumentName" id="idDocumentName">
                        <option value="salarySlips">3 salary slips</option>
                        <option value="salaryCertificate">Salary Ceritificate</option>
                        <option value="form16">Latest Form 16</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormStatus" id="appFormStatus">
                        <option value="pending">Pending</option>
                        <option value="waived">Waived</option>
                        <option value="deferred">Deferred</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormDeferralStage" id="appFormDeferralStage">
                        <option value="processing">Processing</option>
                        <option value="underwriting">Underwriting</option>
                      </Input>
                    </td>
                    <td>
                      <center>
                        <i className="fa fa-upload sm-primary uploadIcon" aria-hidden="true"></i>&nbsp;&nbsp;
                        <i className="fa fa-file-text sm-primary editIcon" aria-hidden="true"></i>
                      </center>
                    </td>
                  </tr>
                  <tr className="tblTrDesign">
                    <td>Banking Documents</td>
                    <td>
                      <Input type="select" size= "sm" name="idDocumentName" id="idDocumentName">
                        <option value="past6MonthsBankStatement">Past 6 months Bank Statement</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormStatus" id="appFormStatus">
                        <option value="pending">Pending</option>
                        <option value="waived">Waived</option>
                        <option value="deferred">Deferred</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormDeferralStage" id="appFormDeferralStage">
                        <option value="processing">Processing</option>
                        <option value="underwriting">Underwriting</option>
                      </Input>
                    </td>
                    <td>
                      <center>
                        <i className="fa fa-upload sm-primary uploadIcon" aria-hidden="true"></i>&nbsp;&nbsp;
                        <i className="fa fa-file-text sm-primary editIcon" aria-hidden="true"></i>
                      </center>
                    </td>
                  </tr>
                  <tr className="tblTrDesign">
                    <td>Property Documents</td>
                    <td>
                      <Input type="select" size= "sm" name="idDocumentName" id="idDocumentName">
                        <option value="copyOfOriginalSaleDeed">Copy of original sale deed</option>
                        <option value="possessionLetter">Allotment-possession letter</option>
                        <option value="nocLetterFromSociety">NOC from Society</option>                        
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormStatus" id="appFormStatus">
                        <option value="pending">Pending</option>
                        <option value="waived">Waived</option>
                        <option value="deferred">Deferred</option>
                      </Input>
                    </td>
                    <td></td>
                    <td>
                      <Input type="select" size= "sm" name="appFormDeferralStage" id="appFormDeferralStage">
                        <option value="processing">Processing</option>
                        <option value="underwriting">Underwriting</option>
                      </Input>
                    </td>
                    <td>
                      <center>
                        <i className="fa fa-upload sm-primary uploadIcon" aria-hidden="true"></i>&nbsp;&nbsp;
                        <i className="fa fa-file-text sm-primary editIcon" aria-hidden="true"></i>
                      </center>
                    </td>
                  </tr>
                </tbody>
              </Table>
          </Card>
        </TabPane>
        <TabPane tabId="8">
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Head</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="select" size= "sm" name="head" id="head" value="">
                <option value="GROSS INCOME">GROSS INCOME</option>
                <option value="NET INCOME">NET INCOME</option>
                <option value="INCOME FROM BUSINESS">INCOME FROM BUSINESS</option>
                <option value="RENTAL INCOME">RENTAL INCOME</option>
                <option value="OTHER INCOME">OTHER INCOME</option>
              </Input>
            </Col>
            <Col xs="12" md="2">
              <Label>Date of filling ITR</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="date" size= "sm" name="dateOfFillingITR" id="dateOfFillingITR"></Input>            
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Frequency</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="select" size= "sm" name="frequency" id="frequency" value="">
                <option value="ANNUALLY">ANNUALLY</option>
                <option value="MONTHLY">MONTHLY</option>
                <option value="QUARTERLY">QUARTERLY</option>
                <option value="SEMI YEARLY">SEMI YEARLY</option>
              </Input>
            </Col>
            <Col xs="12" md="2">
              <Label>Remarks</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="date" size= "sm" name="incomeRemarks" id="incomeRemarks"></Input>            
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Amount</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="select" size= "sm" name="incomeAmount" id="incomeAmount"></Input>
            </Col>
            <Col xs="12" md="2">
              <Label>Year</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="number" size= "sm" name="incomeYear" id="incomeYear"></Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="2">
              <Label>Net Amount Annual</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="select" size= "sm" name="incomeNetAmountAnuual" id="incomeNetAmountAnuual"></Input>
            </Col>
            <Col xs="12" md="2">
              <Label>To be Considered for Eligibility?</Label>
            </Col>
            <Col xs="12" md="3">
              <AppSwitch className={'mx-1'} size= "sm" variant={'3d'} color={'primary'} checked outline={'alt'} />
            </Col>
          </FormGroup>
        </TabPane>
        <TabPane tabId="9">
          <FormGroup row >
           <Col xs="12" md="3">
              <Label>Property Type New</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="propertyTypeNew" id="propertyTypeNew" value="">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Property Cost Financed</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="propertyCostFinanced" id="propertyCostFinanced" value="">
                <option value=""></option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row >
           <Col xs="12" md="3">
              <Label>Property Type</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="propertyType" id="propertyType" value="">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Property Description</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="propertyDesc" id="propertyDesc" value="">
                <option value=""></option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="3">
              <Label>Primary Property Value</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="primaryPropertyValue" id="primaryPropertyValue" value="">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Property Cost Financed</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="propertyCostFinanced" id="propertyCostFinanced" value="">
                <option value=""></option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="3">
              <Label>Approved Sanction Plan Available</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="approvedSactionPlanAvailable" id="approvedSactionPlanAvailable" value="">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Age of Property</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="ageOfProperty" id="ageOfProperty" value="">
                <option value=""></option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="3">
              <Label>Current Usage</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="currentUsage" id="currentUsage" value="">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Total Area(Sq.Mtr/Sq.Ft)</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="totalArea" id="totalArea" value="">
                <option value=""></option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="3">
              <Label>Measurement Unit</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="measurementUnit" id="measurementUnit" value="">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Property Usage</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="propertyUsage" id="propertyUsage" value="">
                <option value=""></option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="3">
              <Label>Address Line1</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="addr1" id="addr1" value=""></Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Address Line2</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="addr2" id="addr2" value=""></Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="3">
              <Label>Address Line3</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="addr3" id="addr3" value=""></Input>
            </Col>
            <Col xs="12" md="3">
              <Label>Nearest Landmark</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="landmark" id="landmark" value=""></Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="3">
              <Label>State</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="state" id="state" value="">
                <option value=""></option>
              </Input>
            </Col>
            <Col xs="12" md="3">
              <Label>City</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="select" size= "sm" name="city" id="city" value="">
                <option value=""></option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row >
            <Col xs="12" md="3">
              <Label>Pincode</Label>
            </Col>
            <Col xs="12" md="2">
              <Input type="text" size= "sm" name="pincode" id="pincode" value=""></Input>
            </Col>
          </FormGroup>
        </TabPane>
        <TabPane tabId="10">
         <Riskprofile></Riskprofile>
        </TabPane>
        <TabPane tabId="11">
          <Row>
            <Col xl="6">
                <Card>
                  {/* <CardHeader>
                    <i className="fa fa-align-justify"></i> 
                    Deviation Details
                    <div className="card-header-actions">
                      <Badge></Badge>
                    </div>
                  </CardHeader> */}
                  <CardBody>
                    <div id="accordion">
                      <Card className="mb-0">
                        <CardHeader id="headingOne">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                            <h6 className="m-0 p-0">Deviation Details</h6>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                          <CardBody>
                            <Card>
                              <CardHeader>
                                System Deviation
                              </CardHeader>
                              <CardBody className="noPadding marginTop10px">
                                <Table responsive bordered size="sm" className="tblDesign2 noPadding">
                                  <thead>
                                    <tr className="tblTrDesign">
                                      <th>System Deviation Description</th>
                                      <th>Deviation Level</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr className="tblTrDesign">
                                      <td><Input type="text" size= "sm" className="width250Px" name="systemDeviationDesc1" id="systemDeviationDesc1" value="Shareholding norms not met" disabled></Input></td>
                                      <td><Input type="text" size= "sm" name="deviationLevel1" id="deviationLevel1" value="L3" disabled></Input></td>
                                      <td>
                                        <Input type="select" size= "sm" name="action1" id="action1" value="" disabled>
                                          <option value=""></option>
                                        </Input>
                                      </td>
                                    </tr>
                                    <tr className="tblTrDesign">
                                      <td><Input type="text" size= "sm" className="width250Px" name="systemDeviationDesc2" id="systemDeviationDesc2" value="Marital Status is other than Married" disabled></Input></td>
                                      <td><Input type="text" size= "sm" name="deviationLevel2" id="deviationLevel2" value="L2" disabled></Input></td>
                                      <td>
                                        <Input type="select" size= "sm" name="action2" id="action2" value="" disabled>
                                          <option value=""></option>
                                        </Input>
                                      </td>
                                    </tr>
                                    <tr className="tblTrDesign">
                                      <td><Input type="text" size= "sm" className="width250Px" name="systemDeviationDesc3" id="systemDeviationDesc3" value="Residence Verification Negative" disabled></Input></td>
                                      <td><Input type="text" size= "sm" name="deviationLevel3" id="deviationLevel3" value="L2" disabled></Input></td>
                                      <td>
                                        <Input type="select" size= "sm" name="action3" id="action3" value="" disabled>
                                          <option value=""></option>
                                        </Input>
                                      </td>
                                    </tr>
                                    <tr className="tblTrDesign">
                                      <td><Input type="text" size= "sm" className="width250Px" name="systemDeviationDesc4" id="systemDeviationDesc4" value="Residence stability norms not met" disabled></Input></td>
                                      <td><Input type="text" size= "sm" name="deviationLevel4" id="deviationLevel4" value="L4" disabled></Input></td>
                                      <td>
                                        <Input type="select" size= "sm" name="action4" id="action4" value="" disabled>
                                          <option value=""></option>
                                        </Input>
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </CardBody>
                            </Card>
                          </CardBody>
                        </Collapse>
                      </Card>
                      <Card className="mb-0">
                        <CardHeader id="headingTwo">
                          <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                            <h6 className="m-0 p-0">Underwriter Observation</h6>
                          </Button>
                        </CardHeader>
                        <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                          <CardBody>
                            <FormGroup row >
                              <Col xs="12" md="3">
                                <Label>Eligibility</Label>
                              </Col>
                              <Col xs="12" md="2">
                                <Input type="text" size= "sm" name="uwEligibility" id="uwEligibility" value="" disabled></Input>
                              </Col>
                            </FormGroup>
                            <FormGroup row >
                              <Col xs="12" md="3">
                                <Label>Observation</Label>
                              </Col>
                              <Col xs="12" md="6">
                                <Input type="textarea" name="textarea-input" id="textarea-input" rows="6"
                                  placeholder="Content..." disabled/>
                              </Col>
                            </FormGroup>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
        </TabPane>
       
      </>
    );
  }

  showHandleClick(){
    this.setState({
      // viewPDFPanel:!this.state.viewPDFPanel,
      viewPDFPanel:true,
      leftPanelWidth: 6
    })
  }

  hideHandleClick(){
    this.setState({
      viewPDFPanel:false,
      leftPanelWidth: 12
    })
  }

  render() {
   

    return (
      <div className="animated fadeIn">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Row>
                    <Col id="col1" xs="12" sm="12" md={this.state.leftPanelWidth} lg={this.state.leftPanelWidth}>
                      <Card>
                        <CardBody>
                          <Nav tabs>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '1'}
                                onClick={() => { this.toggle(0, '1'); }}
                              >
                                Personal Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '2'}
                                onClick={() => { this.toggle(0, '2'); }}
                              >
                                Family Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '3'}
                                onClick={() => { this.toggle(0, '3'); }}
                              >
                                Employment & Qualification
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '4'}
                                onClick={() => { this.toggle(0, '4'); }}
                              >
                                Address Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '5'}
                                onClick={() => { this.toggle(0, '5'); }}
                              >
                                Loan Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '6'}
                                onClick={() => { this.toggle(0, '6'); }}
                              >
                                Share Bank Statements
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '7'}
                                onClick={() => { this.toggle(0, '7'); }}
                              >
                                Document Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '8'}
                                onClick={() => { this.toggle(0, '8'); }}
                              >
                                Income Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '9'}
                                onClick={() => { this.toggle(0, '9'); }}
                              >
                                Collateral Details
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '10'}
                                onClick={() => { this.toggle(0, '10'); }}
                              >
                                Risk Profile
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                active={this.state.activeTab[0] === '11'}
                                onClick={() => { this.toggle(0, '11'); }}
                              >
                                Underwriter Decision
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent activeTab={this.state.activeTab[0]}>
                            {this.tabPane()}
                          </TabContent>
                        </CardBody>
                      </Card>
                      <div xs="12" md="1"  className="float-right">
                        <ModalExample
                          isOpen="false"
                          toggle="false"
                          buttonLabel="Submit"
                        />
                        <Button type="button" onClick={this.showHandleClick} size="sm" className= {!this.state.viewPDFPanel ? 'viewPDFPanel btn btn-primary marginTop10px btn-block btn-square submitPopBtn': 'hidePDFPanel btn btn-primary marginTop10px btn-block btn-square submitPopBtn float-right'} color="primary">Show PDF Viewer</Button>
                        <Button type="button" onClick={this.hideHandleClick} size="sm" className={this.state.viewPDFPanel ? 'viewPDFPanel btn btn-primary marginTop10px btn-block btn-square submitPopBtn': 'hidePDFPanel btn btn-primary marginTop10px btn-block btn-square submitPopBtn float-right'} color="primary">Hide PDF Viewer</Button>
                      </div>
                    </Col>  
                    {/* <Col xs="12" md="6" className="border1px">
                      <FileViewer
                        fileType={type}
                        filePath={pdf}
                        errorComponent={CustomErrorComponent}
                        onError={this.onError}/>
                    </Col>                 */}
                    <Col xs="12" md="6" className={this.state.viewPDFPanel ? "viewPDFPanel": "hidePDFPanel"}>
                      <Card className="windowHeight">
                        <CardBody>
                          <div style={{overflow:'scroll',height:600}}>
                            <PDFReader url="https://arxiv.org/pdf/quant-ph/0410100.pdf"/>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    )
  }
  onError(e) {
    logger.logError(e, 'error in file-viewer');
  }
}

export default Underwriter;
