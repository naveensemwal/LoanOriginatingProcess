import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss'; 
import { Menu,Icon,Row,Col,Button,Layout } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RuleEnginePopup from '../../Compositeviews/RuleEnginePopup/RuleEnginePopup';
import DocumentChecklist1 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist1';

const RulesEngineModalstyle={

  
  left                  : '0%',
  right                 : '0%',
  bottom                : 'auto',  
  width                 : '170% !important',
  top                   : '500px'


}

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Ruleengine extends Component {

 
  constructor(props) {
  super(props);

   
   
  this.state = {
  visible: false,
  
  contents : <div>Initial</div>,
  
 
  
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
  
    <Router>
                <Layout >

                    <Sider style={{background:'#ffffff'}}>
                        
                       <Menu
                           mode="inline" >
      <SubMenu
            key="documentCheckList"
            title={
              <span>
                <Icon type="setting" />
                <span>Document Checklist Rules</span>
              </span>
            }
          >
      <Menu.Item key="homeLoan"><Link to="/DocumentChecklist1" /><span>Home Loan</span></Menu.Item>
      <Menu.Item key="lap"><Link to="/RuleEnginePopup" /><span>Loan Against Property</span>
                                </Menu.Item>
      <Menu.Item key="businessloan">Business Loan</Menu.Item>
      <Menu.Item key="personalLoan">Personal Loan</Menu.Item>
      <Menu.Item key="vehicleloan">Vehicle Loan</Menu.Item>
     
      </SubMenu>
      
	  <SubMenu
            key="documentVerification"
            title={
              <span>
                <Icon type="setting" />
                <span>Document Verification</span>
              </span>
            }
          >
      <Menu.Item key="DataVerf">Data Verification and Consistency</Menu.Item>
           
      </SubMenu>

	  <SubMenu
            key="custprescreening"
            title={
              <span>
                <Icon type="setting" />
                <span>Customer Pre-Screening</span>
              </span>
            }
          >
      <Menu.Item key="CreditReport">Credit Report</Menu.Item>
      <Menu.Item key="MaxAge">Maximum age based customer profile</Menu.Item>
      <Menu.Item key="PremiumClassification">Premium Classification</Menu.Item>
      
      </SubMenu>

	  <SubMenu
            key="Eligibility"
            title={
              <span>
                <Icon type="setting" />
                <span>Eligibility</span>
              </span>
            }
          >
      <Menu.Item key="MaxLoanAmt">Maximum Loan Amount</Menu.Item>
      <Menu.Item key="MaxTen">Maximum Tenure</Menu.Item>
      
      </SubMenu>

	  <SubMenu
            key="Verifications"
            title={
              <span>
                <Icon type="setting" />
                <span>Verifications</span>
              </span>
            }
          >
      </SubMenu>

	  <SubMenu
            key="Policy"
            title={
              <span>
                <Icon type="setting" />
                <span>Policy Compliance Rules</span>
              </span>
            }
          >
      </SubMenu>

	  
    </Menu> 
                    </Sider>
                    <Layout>
                        
                        <Content style={{ paddingLeft:71, background: '#fff', minHeight: 500 }}>
                        <Route path="/DocumentChecklist1" component={DocumentChecklist1} />
                        
                            <Route path="/RuleEnginePopup" component={RuleEnginePopup} />
                        </Content>

                    </Layout>

                </Layout>
            </Router>
 </div>
  )


}