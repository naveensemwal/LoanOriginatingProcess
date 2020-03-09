import { Collapse, Form, Tabs, Card } from 'antd';
import "antd/dist/antd.css";
import React, { Component } from 'react';
import Personaldetails from '../../../../Compositeviews/Personaldetails/Personaldetails';
import Familydetails from '../../../../Compositeviews/Familydetails/Familydetails';
import Addressdetails from '../../../../Compositeviews/Addressdetails/Addressdetails';
import Loandetails from '../../../../Compositeviews/Loandetails/Loandetails';
import Statementdetails from '../../../../Compositeviews/Statementdetails/Statementdetails';
import Dms from '../../../../Components/DMS/Dms';
import Casehistory from '../../../../Compositeviews/Casehistory/Casehistory';
import Productdetails from '../../../../Compositeviews/Productdetails/Productdetails';
import Incomedetails from '../../../../Compositeviews/Incomedetails/Incomedetails';
import Dcc from '../../../../Compositeviews/Dcc/Dcc';
import Employmentdetails from '../../../../Compositeviews/Employmentdetails/Employmentdetails';
import Identificationdetails from '../../../../Compositeviews/Identificationdetails/Identificationdetails';
import BankStatementDetails from '../../../../Compositeviews/BankStatementDetails/BankStatementDetails';
import FinancialDetailsRation from '../../../../Compositeviews/FinancialDetailsRation/FinancialDetailsRation';
import Cust_Obligationss from '../../../../Compositeviews/Cust_Obligationss/Cust_Obligationss';
const { Panel } = Collapse;

export default class DDE extends Component {

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

    const { TabPane } = Tabs;
    return (
      <Form onSubmit={this.handleSubmit} layout="horizontal" >
        <div className="card-container">
          <Tabs >
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
            <TabPane tab="Loan & Product Details" key="2">
                <Collapse defaultActiveKey={['1']}>
                  <Panel header="Loan Details" key="1" danger>
                    <Loandetails></Loandetails>
                  </Panel>
                  <Panel header="Product Details" key="2" >
                    <Productdetails></Productdetails>
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
              <Collapse
                defaultActiveKey={['1']}
              >
                <Panel header="Personal Details" key="1" danger>
                  <Personaldetails></Personaldetails>
                </Panel>
                <Panel header="Family Details" key="2" >
                  <Familydetails></Familydetails>
                </Panel>
                <Panel header="Address Details" key="3" >
                  <Addressdetails></Addressdetails>
                </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="Case History" key="8">
              <Card><Casehistory></Casehistory></Card>
            </TabPane>
            <TabPane tab="Bank statement Details" key="9">
              {/* <Card> */}
                <BankStatementDetails></BankStatementDetails>
              {/* </Card> */}
            </TabPane>
            <TabPane tab="Financial Details" key="10">
              <Collapse
                defaultActiveKey={['1']}
              >
                <Panel header="Ratios" key="1" danger>
                  <FinancialDetailsRation></FinancialDetailsRation>
                </Panel>
                <Panel header="Obligations Details" key="2" >
                  <Cust_Obligationss></Cust_Obligationss>
                </Panel>
                <Panel header="Financial Details" key="3" >
                  <Addressdetails></Addressdetails>
                </Panel>
              </Collapse>
            </TabPane>
          



          </Tabs>
        </div>
      </Form>
    )
  }
}
