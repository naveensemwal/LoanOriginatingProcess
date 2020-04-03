import { Button, Card, Collapse, Dropdown, Form, Icon, Menu, message, Modal, Tabs } from 'antd';
import "antd/dist/antd.css";
import Axios from 'axios';
import React, { Component } from 'react';
import Dms from '../../../../Components/DMS/Dms';
import Riskprofile from '../../../../Components/Risk Profile/Riskprofile';
import Addressdetails from '../../../../Compositeviews/Addressdetails/Addressdetails';
import BankStatementDetails from '../../../../Compositeviews/BankStatementDetails/BankStatementDetails';
import Casehistory from '../../../../Compositeviews/Casehistory/Casehistory';
import CollateralDetails from '../../../../Compositeviews/Collateraldetails/Collateraldetails';
import CreditSanctionCondition from '../../../../Compositeviews/CreditSanctionCondition/CreditSanctionCondition';
import CustomerRelationship from '../../../../Compositeviews/CustomerRelationship/CustomerRelationship';
import DedupeResult from '../../../../Compositeviews/DedupeResult/DedupeResult';
import DeviationDetails from '../../../../Compositeviews/DeviationDetails/DeviationDetails';
import Employmentdetails from '../../../../Compositeviews/Employmentdetails/Employmentdetails';
import FinancialDetailsRation from '../../../../Compositeviews/FinancialDetailsRation/FinancialDetailsRation';
import Identificationdetails from '../../../../Compositeviews/Identificationdetails/Identificationdetails';
import Incomedetails from '../../../../Compositeviews/Incomedetails/Incomedetails';
import Loandetails from '../../../../Compositeviews/Loandetails/Loandetails';
import Personaldetails from '../../../../Compositeviews/Personaldetails/Personaldetails';
import UWObservation from '../../../../Compositeviews/UWObservation/UWObservation';
import VerificationDetails from '../../../../Compositeviews/VerficationDetails/VerificationDetails';
import VerificationList from '../../../../Compositeviews/VerificationList/VerificationList';

const { Panel } = Collapse;

export default class DDE extends Component {


  state = {
    size: 'large',
    width: '150px',
  visible1: false,
  visible:false
  }
  showModalcase_history=()=>{
    this.setState({visible:true});
  }
  handleOkcasehistory=(e) =>{
    this.setState({visible:false});
  }
  handlecancelcasehistory=(e)=>{
    this.setState({
      visible:false
    })
  }
  
  buttonVis = e =>{
  
   if(e==="16"){
     this.setState(
       {visible1 : true}
     )
   }
  else{
    this.setState(
      {visible1 : false}
    )
    }
  }  
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  completeTask = (taskId) => {

    let params = '{"applicationDetails":{"userAction":"ToDisbursement"}}';
    let url = `/rest/bpm/wle/v1/task/` + taskId + '?action=complete&params=' + params + '&parts=all';
    
    message.config({ top: 100, });
    message.loading('Submitting Task Data',60).then(
    Axios.put(url, {
      auth: {
        username: 'p8admin',
        password: 'Password12'
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

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };


  raiseInvoiceClicked(){
  
    window.open('http://localhost:8080/viewone/Document/SanctionLetter.pdf', "_blank") //to open new page
 }

 

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
           <a className='fixed-widgets' onClick={this.showModalcase_history}><i className='ant-avatar fixed-widgets-avatar ant-dropdown-trigger ant-avatar-circle ant-avatar-icon fa fa-history'/><span>Case History</span></a>
      <Modal
      title='Case History'
      visible={this.state.visible}
      onOk={this.handleOkcasehistory}
      onCancel={this.handlecancelcasehistory}>

<Card>
                <Casehistory></Casehistory>
              </Card>

      </Modal>
      
        <div className="card-container cust_tabs_card form-group">
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
                <Panel header="Ratios" key="4" >
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
            
           
            
            
          </Tabs>
        </div>
      
            <Form.Item  >
                            <Button type="primary" htmlType="SaveAsDraft" shape="round" size={size} >
                                Save as Draft
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        
					            	<Dropdown overlay={menu}>
						            	<Button type="primary" htmlType="Submit" shape="round" size={size}>Submit<Icon type="down"/> </Button>
					            	</Dropdown>
                        &nbsp;&nbsp;&nbsp;
                        <Button type="primary"  shape="round" size={size} onClick={this.raiseInvoiceClicked} >
                        Generate Sanction Letter
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        {this.state.visible1 ?( <Button type="primary" htmlType="RiskRule" shape="round" size={size}>Rerun Risk Rule</Button>):("")}
                        &nbsp; &nbsp;
                        {this.state.visible1 ?( <Button type="primary" htmlType="RerunDedupe" shape="round" size={size}>Rerun Dedupe </Button>):("")}
                        
            </Form.Item>
      </Form>
    )
  }
}
