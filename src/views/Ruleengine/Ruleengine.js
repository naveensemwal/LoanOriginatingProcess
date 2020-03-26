import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss'; 
import { Menu,Icon,Row,Col,Table,Button,Modal } from 'antd';
import RuleEnginePopup from '../../Compositeviews/RuleEnginePopup/RuleEnginePopup';

const RulesEngineModalstyle={

  
  left                  : '0%',
  right                 : '0%',
  bottom                : 'auto',  
  width                 : '170% !important',
  top                   : '500px'


}


const { SubMenu } = Menu;

export default class Ruleengine extends Component {

 
  constructor(props) {
  super(props);

   
   this.columns = [
    {
    title: 'Document Category',
    dataIndex: 'DocumentCategory',
    render: text => <a>{text}</a>,
    },
    
    {
    title:'Document Name',
    dataIndex:'DocumentName',
    render: text => <a>{text}</a>,
    }
 
    
  ];
  
  this.data = [
    {
    key: '1',
    DocumentCategory: 'Application Form',
    
    DocumentName:'Signed Application form',
    
    },
    {
    key: '2',
    DocumentCategory: 'ID Proof',
    
    DocumentName:'Aadhar/Passport/PAN/Voter ID/Driving License',
    
    },
    {
    key: '3',
    DocumentCategory: 'Address Proof',
    
    DocumentName:'Aadhar/Passport/Voter ID/Driving License/Electricity Bill',
    
    },
    {
    key: '4',
    DocumentCategory: 'Income Documents',
    
    DocumentName:'3 salary slips/salary certificate/Latest form 16',
    
    },
    {
    key: '5',
    DocumentCategory: 'banking Documents',
    
    DocumentName:'Latest 6 months bank statement',
    
    },
    {
    key: '6',
    DocumentCategory: 'Property Documents',
    
    DocumentName:'Copy of original sale deed/Allotment-possession letter/NOC from Society',
    
    },
    
  ];
  

  this.state = {
  visible: false,
  
  contents : <div>Initial</div>,
  data: this.data,
 
  
  };
}

  
  showModal = () => {
   
    this.setState({
      visible: true,
      // data: this.data,
      contents:<RuleEnginePopup></RuleEnginePopup>
    });
  }

  handleOk = e => {
  console.log(e);
  this.setState({
    visible: false,
   
  });
  };

  handleCancel = e => {
  console.log(e);
  this.setState({
    visible: false,
   
  });
  };

 


  render = () => (
  <div>
  <Row  gutter={[8, 8]}>
    <Col span={6}>
    <Menu
      mode="inline"
      
      style={{ width: 256 }}
    >
      <SubMenu
            key="documentCheckList"
            title={
              <span>
                <Icon type="setting" />
                <span>Document Checklist Rules</span>
              </span>
            }
          >
      <Menu.Item key="homeLoan">Home Loan</Menu.Item>
      <Menu.Item key="lap">Loan Against Property</Menu.Item>
      <Menu.Item key="businessloan">Business Loan</Menu.Item>
      <Menu.Item key="personalLoan">Personal Loan</Menu.Item>
      <Menu.Item key="vehicleloan">Vehicle Loan</Menu.Item>
     
      </SubMenu>
      
    </Menu>
    </Col>
    <Col span={18} >
    
    <Table className="table table-hover table-stacked "
      columns={this.columns}
      dataSource={this.state.data}
    />
    <div class="text-right">
    <Button type="primary" onClick={this.showModal}>
           Edit
        </Button>

    <Modal
          title="MODAL"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={{width: 520}}
         
        >
         {this.state.contents}
        </Modal>
    </div>
    
    </Col>
  </Row>
 </div>
  )


}