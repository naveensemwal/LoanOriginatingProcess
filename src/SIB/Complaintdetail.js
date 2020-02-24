import React, { Component } from 'react';
import { Collapse, Form, Tabs, Card } from 'antd';
import Atmmasterdetails from './Atmmasterdetails';
import Comments from './Comments';
import IssueDetails from './IssueDetails';
import Axios from 'axios';
import "antd/dist/antd.css";

const { Panel } = Collapse;



export default class Complaintdetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params.id;
    this.getData();


  }

  getData = () => {
    // console.dir("id " + this.props.match.params.id);
    Axios.get('/rest/bpm/wle/v1/task/' + this.props.match.params.id + '?action=getData&fields=atmSIB,issueTracker', {
      auth: {
        username: 'p8admin',
        password: 'Password123'
      }
    })
      .then(res => {

    
        const complaintData = res.data.data.resultMap;
        let fieldvalues = this.props.form.getFieldsValue();
        console.dir(fieldvalues);

          fieldvalues.country =complaintData.atmSIB.country.value;
          fieldvalues.state = complaintData.atmSIB.state.value
          fieldvalues.city = complaintData.atmSIB.city.value
          fieldvalues.branchName =complaintData.atmSIB.branchName.value;
          fieldvalues.machineMake =complaintData.atmSIB.machineMake;
          fieldvalues.atmAddress =complaintData.atmSIB.atmAddress;
          fieldvalues.atmLocation =complaintData.atmSIB.atmLocation.value;
          fieldvalues.custodian = complaintData.atmSIB.custodian.value;
          fieldvalues.custodianName = complaintData.atmSIB.custodianName;
          fieldvalues.emailId =complaintData.atmSIB.emailId;
          //fieldvalues.ComplaintCategory =complaintData.issueTracker.category.name;
		      //fieldvalues.NatureOfComplaint =complaintData.issueTracker.natureOfComplaint.name;
		      //fieldvalues.TxnAmount =complaintData.issueTracker.txnAmount;
		      //fieldvalues.TxnReferenceNo =complaintData.issueTracker.txnRefNo;
		      //fieldvalues.DispensedAmt =complaintData.issueTracker.dispensedAmt;
		      //fieldvalues.TxnDate = complaintData.issueTracker.txnDate;
		      //fieldvalues.IssueDescription =complaintData.issueTracker.issueDescription;
          this.props.form.setFieldsValue(fieldvalues);

      })
  }

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

    return (

      <Form onSubmit={this.handleSubmit} layout="horizontal" >
        <div className="card-container">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="ATM Master Details" key="1">
              {<Atmmasterdetails form={this.props.form}></Atmmasterdetails> }
            </Panel>
            <Panel header="Issue Details" key="2" >
              <IssueDetails form={this.props.form}></IssueDetails>
            </Panel>
            <Panel header="Comments" key="3" >
              <Comments form={this.props.form}></Comments>
            </Panel>
          </Collapse>
        </div>
      </Form>
    )
  }
}


Complaintdetail = Form.create({ name: "Complaintdetail" })(Complaintdetail)