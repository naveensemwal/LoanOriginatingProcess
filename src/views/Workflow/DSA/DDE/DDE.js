import { Collapse, Form, Tabs, Card } from 'antd';
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
import Statementanalyzer from '../../../../Compositeviews/Statementanalyzer/Statementanalyzer';
import Auxiliary from '../../../../Util/Auxiliary';

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
            <TabPane tab="Statement Analysis" key="8">
            <Auxiliary><Statementanalyzer></Statementanalyzer></Auxiliary>
            </TabPane>
            <TabPane tab="Case History" key="9">
            <Card><Casehistory></Casehistory></Card>
            </TabPane>
          </Tabs>
        </div>
      </Form>
    )
  }
}
