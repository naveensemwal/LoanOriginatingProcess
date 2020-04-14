import { Collapse, Form, Tabs, Card, Button, Modal } from "antd";
import "antd/dist/antd.css";
import React, { Component } from 'react';
import Axios from 'axios';
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
import DisbursementDetails from '../../../../Compositeviews/DisbursementDetails/DisbursementDetails';
import DedupeResult from '../../../../Compositeviews/DedupeResult/DedupeResult';
import CollateralDetails from '../../../../Compositeviews/CollateralDetails/CollateralDetails';
const { Panel } = Collapse;

export default class DDE extends Component {

componentDidMount() {
    const  SectionName  ='IdentificationDetails,AddressDetails';
    this.getData();
  }

  
   getData = () => {
    // console.dir("id " + this.props.match.params.id);
    //console.log("sectionr "+ this.prop.SectionName);
    Axios.get('/rest/bpm/wle/v1/task/4853?action=getData&fields=IdentificationDetails,AddressDetails', {
      auth: {
        username: 'p8admin',
        password: 'Password123'
      }
    })
      .then(res => {

    
        const result = res.data.data.resultMap;
        console.dir(result);
        console.log('before props');
        console.dir(this.props);
       // let fieldvalues = this.props.form.getFieldsValue();
        
        //console.dir(fieldvalues);

         
      })
  }



  state = {
    size: "large",
    width: "150px",
    visible:false
  };
  showModalcase_history = () =>  {
    this.setState({visible:true});
  };
  handleOkcasehistory =e =>{
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handlecancelcasehistory =e =>{
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { size } = this.state;
    const { TabPane } = Tabs;
    return (

    
      <Form onSubmit={this.handleSubmit} layout="horizontal">
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
          <Tabs>
            <TabPane tab="Customer Details" key="1">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Personal Details" key="1" danger>
                  <Personaldetails></Personaldetails>
                </Panel>
                <Panel header="Identification Details" key="2">
                  <Identificationdetails></Identificationdetails>
                </Panel>
                <Panel header="Address Details" key="3">
                  <Addressdetails></Addressdetails>
                </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="Loan Details" key="2">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Loan Details" key="1" danger>
                  <Loandetails></Loandetails>
                </Panel>
                
              </Collapse>
            </TabPane>
            <TabPane tab="Employment & Income Details" key="3">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Employment Details" key="1" danger>
                  <Employmentdetails></Employmentdetails>
                </Panel>
                <Panel header="Income Details" key="2">
                  <Incomedetails></Incomedetails>
                </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="Share Bank Statements" key="4">
              {/* <Card> */}
              <Statementdetails></Statementdetails>
              {/* </Card> */}
            </TabPane>
            <TabPane tab="Document Check List" key="5">
              {/* <Card> */}
              <Dcc></Dcc>
              {/* </Card> */}
            </TabPane>
            <TabPane tab="Document Details" key="6">
              <Dms></Dms>
            </TabPane>
            <TabPane tab="Collateral Details" key="7">
              <Collapse defaultActiveKey={["1"]}>
              <Panel header="Collateral Details" key="1" >
                  <CollateralDetails></CollateralDetails>
                </Panel>
              </Collapse>
            </TabPane>
            {/* <TabPane tab="Case History" key="8">
              <Card>
                <Casehistory></Casehistory>
              </Card>
            </TabPane> */}
            <TabPane tab="Bank statement Details" key="8">
              {/* <Card> */}
              <BankStatementDetails></BankStatementDetails>
              {/* </Card> */}
            </TabPane>
            <TabPane tab="Financial Details" key="9">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Ratios" key="1" danger>
                  <FinancialDetailsRation></FinancialDetailsRation>
                </Panel>
                <Panel header="Obligations Details" key="2">
                  <Cust_Obligationss></Cust_Obligationss>
                </Panel>
                <Panel header="Financials Gross TurnOver" key="3">
                  <CustFinancialDetails></CustFinancialDetails>
                </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="Credit Sanction Condition" key="10">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Credit Sanction Condition" key="1">
                  {/* <Card> */}
                  <CreditSanctionCondition></CreditSanctionCondition>
                  {/* </Card> */}
                </Panel>
              </Collapse>
            </TabPane>

            <TabPane tab="Cross Selling Recommendation" key="11">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header=" Cross Selling Recommendation" key="1">
                  {/* <Card> */}
                  <CrossSellingRecommendation></CrossSellingRecommendation>
                  {/* </Card> */}
                </Panel>
              </Collapse>
            </TabPane>

            <TabPane tab="Verification Details" key="12">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Verification Details" key="1">
                  {/* <Card> */}
                  <VerificationList></VerificationList>
                  {/* </Card> */}
                </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="Disbursement Details" key="13">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Disbursement Details" key="1">
                  <DisbursementDetails></DisbursementDetails>
                </Panel>
              </Collapse>
            </TabPane>

            <TabPane tab="Dedupe Result" key="14">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Dedupe Result" key="1">
                  {/* <Card> */}
                  <DedupeResult></DedupeResult>
                  {/* </Card> */}
                </Panel>
              </Collapse>
            </TabPane>
          </Tabs>
        </div>
        <Form.Item>
          <div className='pull-right'>
          <Button
            type="primary"
            htmlType="SaveAsDraft"
          className='mar-rig-10'
            size={size}
          >
            Save as Draft
          </Button>
        
          <Button
            type="primary"
            htmlType="RerunDedupe"
            className='mar-rig-10'
            size={size}
          >
            Rerun Dedupe
          </Button>
        
          <Button type="primary" htmlType="submit" 
            size={size}>
            Submit
          </Button>
          </div>
        </Form.Item>
      </Form>
    );
  }
}
