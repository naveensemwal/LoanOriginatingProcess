import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss'; 
import { Menu,Icon,Row,Col,Button,Layout } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RuleEnginePopup from '../../Compositeviews/RuleEnginePopup/RuleEnginePopup';
import DocumentChecklist1 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist1';
import DocumentChecklist2 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist2';
import DocumentChecklist3 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist3';

import MaxAge from '../../Compositeviews/RuleEnginePopup/MaxAge';
import CreditReport from '../../Compositeviews/RuleEnginePopup/CreditReport';
import PremiumClassification from '../../Compositeviews/RuleEnginePopup/PremiumClassification';
import MaxLoanAmt from '../../Compositeviews/RuleEnginePopup/MaxLoanAmt';
import VerificationRules from '../../Compositeviews/RuleEnginePopup/VerificationRules';
import MaxTen from '../../Compositeviews/RuleEnginePopup/MaxTen';
import PolicyComplianceRules from '../../Compositeviews/RuleEnginePopup/PolicyComplianceRules';
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
      <Menu.Item key="lap"><Link to="/DocumentChecklist1" /><span>Loan Against Property</span>
                                </Menu.Item>
      <Menu.Item key="businessloan"><Link to="/DocumentChecklist2" /><span>Business Loan</span>
           </Menu.Item>

      
      <Menu.Item key="personalLoan"><Link to="/DocumentChecklist2" /><span>Personal Loan</span></Menu.Item>
      <Menu.Item key="vehicleloan"><Link to="/DocumentChecklist2" /><span>Vehicle Loan</span></Menu.Item>
     
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

      <Menu.Item key="DataVerf"><Link to="/DocumentChecklist3" /><span>Data Verification and Consistency</span></Menu.Item>
           
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
            
      <Menu.Item key="CreditReport"><Link to="/CreditReport" /><span>Credit Report</span></Menu.Item>
      
      <Menu.Item key="MaxAge"><Link to="/MaxAge" /><span>Maximum age based customer profile</span></Menu.Item>
      <Menu.Item key="PremiumClassification"><Link to="/PremiumClassification" /><span>Premium Classification</span></Menu.Item>
      
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
            
      <Menu.Item key="MaxLoanAmt"><Link to="/MaxLoanAmt" /><span>Maximum Loan Amount</span></Menu.Item>
      
      <Menu.Item key="MaxTen"><Link to="/MaxTen" /><span>Maximum Tenure</span></Menu.Item>
      
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


          <Menu.Item key="VerificationRules"><Link to="/VerificationRules" /><span>Verification Rules</span></Menu.Item>
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
          <Menu.Item key="ComplianceRules"><Link to="/PolicyComplianceRules" /><span>Compliance Rules</span></Menu.Item>
      </SubMenu>

	  
    </Menu> 
                    </Sider>
                    <Layout>
                        
                        <Content style={{ paddingLeft:10, background: '#fff', minHeight: 500 }}>
                        <Route path="/DocumentChecklist1" component={DocumentChecklist1} />
                          
                         <Route path="/DocumentChecklist2" component={DocumentChecklist2} />

                         <Route path="/DocumentChecklist3" component={DocumentChecklist3} />
                         
                         <Route path="/CreditReport" component={CreditReport} />
                         
                         <Route path="/MaxAge" component={MaxAge} />
                         
                         <Route path="/PremiumClassification" component={PremiumClassification} />
                         
                         <Route path="/MaxLoanAmt" component={MaxLoanAmt} />
                         
                         <Route path="/PolicyComplianceRules" component={PolicyComplianceRules} />
                         
                         <Route path="/MaxTen" component={MaxTen} />
                         
                         <Route path="/VerificationRules" component={VerificationRules} />
                        </Content>

                    </Layout>

                </Layout>
            </Router>
 </div>
  )


}