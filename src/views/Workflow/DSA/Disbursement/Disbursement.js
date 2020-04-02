import { Button, Card, Collapse, Form, message, Modal, Tabs } from "antd";
import "antd/dist/antd.css";
import Axios from 'axios';
<<<<<<< HEAD
import Personaldetails from '../../../../Compositeviews/Personaldetails/Personaldetails';
import Familydetails from '../../../../Compositeviews/Familydetails/Familydetails';
import Addressdetails from '../../../../Compositeviews/Addressdetails/Addressdetails';
import Loandetails from '../../../../Compositeviews/Loandetails/Loandetails';
import Statementdetails from '../../../../Compositeviews/Statementdetails/Statementdetails';
import Dms from '../../../../Components/DMS/Dms3';
=======
import React, { Component } from 'react';
import Dms from '../../../../Components/DMS/Dms';
import Addressdetails from '../../../../Compositeviews/Addressdetails/Addressdetails';
>>>>>>> 58c3424f759923a86f64f1b6444997bc55f0387e
import Casehistory from '../../../../Compositeviews/Casehistory/Casehistory';
import DisbursementDetails from '../../../../Compositeviews/DisbursementDetails/DisbursementDetails';
import Identificationdetails from '../../../../Compositeviews/Identificationdetails/Identificationdetails';
import Loandetails from '../../../../Compositeviews/Loandetails/Loandetails';
import Personaldetails from '../../../../Compositeviews/Personaldetails/Personaldetails';
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
        console.dir(this.props.form);
       // let fieldvalues = this.props.form.getFieldsValue();
        
        //console.dir(fieldvalues);

         
      })
  }



  state = {
    size: "large",
    width: "150px",
    visible:false
  };
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
  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  completeTask = (taskId) => {

    let params = '{"applicationDetails":{"userAction":"Complete"}}';
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
          <TabPane tab="Disbursement Details" key="19">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header="Disbursement Details" key="1">
                  <DisbursementDetails></DisbursementDetails>
                </Panel>
              </Collapse>
            </TabPane>
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
            
            <TabPane tab="Document Details" key="6">
              <Dms></Dms>
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
