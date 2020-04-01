import { Collapse, Form, Tabs, Card,Button, Menu, Dropdown, Icon } from 'antd';
import "antd/dist/antd.css";
import React, { Component } from 'react';
import Personaldetails from '../../../../Compositeviews/Personaldetails/Personaldetails';
import Familydetails from '../../../../Compositeviews/Familydetails/Familydetails';
import Addressdetails from '../../../../Compositeviews/Addressdetails/Addressdetails';
import Loandetails from '../../../../Compositeviews/Loandetails/Loandetails';
import Statementdetails from '../../../../Compositeviews/Statementdetails/Statementdetails';
import Dms from '../../../../Components/DMS/Dms';
import Casehistory from '../../../../Compositeviews/Casehistory/Casehistory';

import Incomedetails from '../../../../Compositeviews/Incomedetails/Incomedetails';
import Dcc from '../../../../Compositeviews/Dcc/Dcc';
import Employmentdetails from '../../../../Compositeviews/Employmentdetails/Employmentdetails';
import Identificationdetails from '../../../../Compositeviews/Identificationdetails/Identificationdetails';
import BankStatementDetails from '../../../../Compositeviews/BankStatementDetails/BankStatementDetails';
import FinancialDetailsRation from '../../../../Compositeviews/FinancialDetailsRation/FinancialDetailsRation';
import Cust_Obligationss from '../../../../Compositeviews/Cust_Obligationss/Cust_Obligationss';
import CustFinancialDetails from '../../../../Compositeviews/CustFinancialDetails/CustFinancialDetails';
import CreditSanctionCondition from  '../../../../Compositeviews/CreditSanctionCondition/CreditSanctionCondition';
import CustomerRelationship from  '../../../../Compositeviews/CustomerRelationship/CustomerRelationship';
import CrossSellingRecommendation from   '../../../../Compositeviews/CrossSellingRecommendation/CrossSellingRecommendation';
import VerificationDetails from '../../../../Compositeviews/VerficationDetails/VerificationDetails';
import VerificationList from '../../../../Compositeviews/VerificationList/VerificationList';
import DedupeResult from '../../../../Compositeviews/DedupeResult/DedupeResult';
import Riskprofile from '../../../../Components/Risk Profile/Riskprofile';
import UWObservation from '../../../../Compositeviews/UWObservation/UWObservation';
import DeviationDetails from '../../../../Compositeviews/DeviationDetails/DeviationDetails';
import CollateralDetails from '../../../../Compositeviews/CollateralDetails/CollateralDetails';
const { Panel } = Collapse;

export default class DDE extends Component {


  state = {
    size: 'large',
    width: '150px',
	visible: false
  }
  
  buttonVis = e =>{
  
   if(e==="16"){
     this.setState(
       {visible : true}
     )
   }
  else{
    this.setState(
      {visible : false}
    )
    }
  }  
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

 

  render() {
    const { size } = this.state;
    const { TabPane } = Tabs;
	const menu =(
				<Menu >
				<Menu.Item key="1">Forward</Menu.Item>
				<Menu.Item key="2">Approve</Menu.Item>
				<Menu.Item key="3">Reject</Menu.Item>
        <Menu.Item key="4">Provisional Approval</Menu.Item>
        </Menu>
				);
    return (
      <Form onSubmit={this.handleSubmit} layout="horizontal" >
        <div className="card-container">
          <Tabs onChange={this.buttonVis}>
          <TabPane tab="Underwriter Decision" key="19">
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Deviation Details" key="1">
                     {/* <Card> */}
                    <DeviationDetails></DeviationDetails>
                    {/* </Card> */}
                  </Panel>
                 
                  <Panel header="Eligibility Details" key="2">
                     {/* <Card> */}
                    <UWObservation></UWObservation>
                    {/* </Card> */}
                  </Panel>
                  
                  <Panel header="Credit Sanction Condition" key="3">
                  <CreditSanctionCondition></CreditSanctionCondition>
                </Panel>
                <Panel header="Ratios" key="4">
                  <FinancialDetailsRation></FinancialDetailsRation>
                </Panel>
                </Collapse>
            </TabPane>
            <TabPane tab="Compliance and Risk Check " key="16" >
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Dedupe Result" key="1">
                  {/* <Card> */}
                  <DedupeResult></DedupeResult>
                  {/* </Card> */}
                </Panel>
                <Panel header="Risk Profile" key="2">
                  <Riskprofile></Riskprofile>
                </Panel>

              </Collapse>
            </TabPane>
            <TabPane tab="Verification Details" key="17">
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Verification List" key="1" danger>
                     {/* <Card> */}
                    <VerificationList></VerificationList>
                     {/* <Card> */}
                  </Panel>
                  <Panel header="Verification Result" key="2" >
                     {/* <Card> */}
                    <VerificationDetails></VerificationDetails>
                     {/* <Card> */}
                  </Panel>
                  
                </Collapse>
            </TabPane>

            <TabPane tab="Customer Details" key="1">
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Personal Details" key="1" danger>
                    <Personaldetails></Personaldetails>
                  </Panel>
                  <Panel header="Identification Details" key="2" >
                    <Identificationdetails></Identificationdetails>
                  </Panel>
                  <Panel header="Address Details" key="3" >
                    <Addressdetails></Addressdetails>
                  </Panel>
                </Collapse>
            </TabPane>
            <TabPane tab="Loan Details" key="2">
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Loan Details" key="1" danger>
                    <Loandetails></Loandetails>
                  </Panel>
                  
                </Collapse>
              
            </TabPane>
            <TabPane tab="Employment & Income Details" key="3">
            
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Employment Details" key="1" danger>
                    <Employmentdetails></Employmentdetails>
                  </Panel>
                  <Panel header="Income Details" key="2" >
                    <Incomedetails></Incomedetails>
                  </Panel>
                </Collapse>
             
            </TabPane>
           
            <TabPane tab="Document Details" key="6">
              <Dms></Dms>
            </TabPane>
            <TabPane tab="Collateral Details" key="7">
              <Collapse
                defaultActiveKey={['1']}
              >
                <Panel header="Collateral Details" key="1" danger>
                  <CollateralDetails></CollateralDetails>
                </Panel>
                
              </Collapse>
            </TabPane>
            
            <TabPane tab="Bank statement Details" key="9">
              {/* <Card> */}
                <BankStatementDetails></BankStatementDetails>
              {/* </Card> */}
            </TabPane>
            
            <TabPane tab="Customer Relationship" key="12">
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Customer Realtionship" key="1">
                     {/* <Card> */}
                    <CustomerRelationship></CustomerRelationship>
                    {/* </Card> */}
                  </Panel>
                 
                </Collapse>
            </TabPane>

            
            
          </Tabs>
        </div>
        <br/>
        <br/>
            <Form.Item  >
                            <Button type="primary" htmlType="SaveAsDraft" shape="round" size={size} >
                                Save as Draft
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        {this.state.visible ?( <Button type="primary" htmlType="RerunDedupe" shape="round" size={size}>Rerun Dedupe </Button>):("")}
                        &nbsp; &nbsp; &nbsp;
					            	<Dropdown overlay={menu}>
						            	<Button type="primary" htmlType="Submit" shape="round" size={size}>Submit<Icon type="down"/> </Button>
					            	</Dropdown>
                        &nbsp;&nbsp;&nbsp;
                        <Button type="primary" htmlType="GenerateSanction" shape="round" size={size}>
                               Generate Sanction
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        {this.state.visible ?( <Button type="primary" htmlType="RiskRule" shape="round" size={size}>Rerun Risk Rule</Button>):("")}
						
            </Form.Item>
      </Form>
    )
  }
}
