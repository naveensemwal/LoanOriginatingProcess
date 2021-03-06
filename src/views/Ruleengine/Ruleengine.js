import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss'; 
import { Menu,Row,Col,Button,Layout ,Tooltip} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RuleEnginePopup from '../../Compositeviews/RuleEnginePopup/RuleEnginePopup';
import DocumentChecklist1 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist1';
import DocumentChecklist12 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist12';
import DocumentChecklist2 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist2';
import DocumentChecklist21 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist21';
import DocumentChecklist22 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist22';

import DocumentChecklist3 from '../../Compositeviews/RuleEnginePopup/DocumentChecklist3';

import MaxAge from '../../Compositeviews/RuleEnginePopup/MaxAge';
import CreditReport from '../../Compositeviews/RuleEnginePopup/CreditReport';
import PremiumClassification from '../../Compositeviews/RuleEnginePopup/PremiumClassification';
import MaxLoanAmt from '../../Compositeviews/RuleEnginePopup/MaxLoanAmt';
import VerificationRules from '../../Compositeviews/RuleEnginePopup/VerificationRules';
import MaxTen from '../../Compositeviews/RuleEnginePopup/MaxTen';
import PolicyComplianceRules from '../../Compositeviews/RuleEnginePopup/PolicyComplianceRules';
import { SettingOutlined } from '@ant-design/icons';
const RulesEngineModalstyle={

  
  left                  : '0%',
  right                 : '0%',
  bottom                : 'auto',  
  width                 : '100% !important',
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

                    <Sider classname='RulesEngineLeftAsidebar'style={{ backgroundColor: '#f8f8f8 !important', borderColor: '#e7e7e7'}}>
                        
                    <Menu
                           mode="inline" >
      <SubMenu
            key="documentCheckList"
            title={
              <span>
               <SettingOutlined />
                <Tooltip title="Document Checklist Rules">
                <span>Document Checklist Rules</span>
                </Tooltip>

              </span>
            }
          >
      <Menu.Item key="homeLoan">
      <Tooltip title="Home Loan"> <Link to="/DocumentChecklist1"><span>Home Loan</span></Link></Tooltip></Menu.Item>
      <Menu.Item key="lap"><Tooltip title="Loan Against Property"><Link to="/DocumentChecklist12" ><span>Loan Against Property</span></Link></Tooltip>
                                </Menu.Item>
      <Menu.Item key="businessloan"><Tooltip title="Business Loan"><Link to="/DocumentChecklist2"><span>Business Loan</span></Link></Tooltip>
           </Menu.Item>


      <Menu.Item key="personalLoan"><Tooltip title="Personal Loan"><Link to="/DocumentChecklist21" ><span>Personal Loan</span></Link></Tooltip></Menu.Item>
      <Menu.Item key="vehicleloan"><Tooltip title="Vehicle Loan"><Link to="/DocumentChecklist22" ><span>Vehicle Loan</span></Link></Tooltip></Menu.Item>

      </SubMenu>

	  <SubMenu
            key="documentVerification"
            title={
              <span>
               <SettingOutlined /><Tooltip title="Document Verification Rules"><span>Document Verification Rules</span></Tooltip>

              </span>
            }
          >

      <Menu.Item key="DataVerf"><Tooltip title="Data Verification and Consistency"><Link to="/DocumentChecklist3" ><span>Data Verification and Consistency</span></Link></Tooltip></Menu.Item>

      </SubMenu>

	  <SubMenu
            key="custprescreening"
            title={
              <span>
                <SettingOutlined />
				<Tooltip title="Customer Pre-Screening Rules"><span>Customer Pre-Screening Rules</span></Tooltip>

              </span>
            }
          >

      <Menu.Item key="CreditReport"><Tooltip title="Credit Report"><Link to="/CreditReport" ><span>Credit Report</span></Link></Tooltip></Menu.Item>

      <Menu.Item key="MaxAge"><Tooltip title="Maximum age based customer profile"><Link to="/MaxAge" ><span>Maximum age based customer profile</span></Link></Tooltip></Menu.Item>
      <Menu.Item key="PremiumClassification"><Tooltip title="Premium Classification"><Link to="/PremiumClassification" ><span>Premium Classification</span></Link></Tooltip></Menu.Item>

      </SubMenu>

	  <SubMenu
            key="Eligibility"
            title={
              <span>
               <SettingOutlined />
				<Tooltip title="Eligibility Rules"><span>Eligibility Rules</span></Tooltip>

              </span>
            }
          >

      <Menu.Item key="MaxLoanAmt"><Tooltip title="Maximum Loan Amount"><Link to="/MaxLoanAmt" ><span>Maximum Loan Amount</span></Link></Tooltip></Menu.Item>

      <Menu.Item key="MaxTen"><Tooltip title="Maximum Tenure"><Link to="/MaxTen" ><span>Maximum Tenure</span></Link></Tooltip></Menu.Item>

      </SubMenu>

	  <SubMenu
            key="Verifications"
            title={
              <span>
                <SettingOutlined />
				<Tooltip title="Verifications Rules"><span>Verifications Rules</span></Tooltip>

              </span>
            }
          >


          <Menu.Item key="VerificationRules"><Tooltip title="Verifications"><Link to="/VerificationRules" ><span>Verifications</span></Link></Tooltip></Menu.Item>
      </SubMenu>

	  <SubMenu
            key="Policy"
            title={
              <span>
                <SettingOutlined />
                <Tooltip title="Policy Compliance Rules"> <span>Policy Compliance Rules</span></Tooltip>

              </span>

            }
          >
          <Menu.Item key="ComplianceRules"> <Tooltip title="Compliance Rules"><Link to="/PolicyComplianceRules" >
		  <span>Compliance Rules</span></Link></Tooltip></Menu.Item>
      </SubMenu>


    </Menu>
                    </Sider>
                    <Layout>

                        <Content style={{ paddingLeft:10, background: '#fff', minHeight: 500 }}>
                        <Route path="/DocumentChecklist1" component={DocumentChecklist1} />

                        <Route path="/DocumentChecklist12" component={DocumentChecklist12} />

                         <Route path="/DocumentChecklist2" component={DocumentChecklist2} />

                         <Route path="/DocumentChecklist21" component={DocumentChecklist21} />
                         <Route path="/DocumentChecklist22" component={DocumentChecklist22} />

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
