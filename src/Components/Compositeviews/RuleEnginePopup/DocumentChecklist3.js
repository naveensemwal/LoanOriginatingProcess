import React, { Component } from 'react';
import { Table, Typography,Button,Modal,Collapse} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';
const { Panel } = Collapse;

const { Text } = Typography;
const columns = [
    {
    title: 'Document Type',
    dataIndex: 'DocumentType',
    render: text => <a>{text}</a>,
    },
    
    {
    title:'Rule',
    dataIndex:'Rule',
    render: text => <a>{text}</a>,
    }
 
    
  ]
  
const data = [
    {
    key: '1',
    DocumentType: 'Application Form',
    
    Rule:'100% Insurance mandatory if no coapplicants/guarantor in the application',
    
    },
    {
    key: '2',
    DocumentType: 'Income Documents',
    
    Rule:'If declared Income not consistent with last 3 Salary Slips,Latest Salary Certificate is mandatory',
    
    },
	{
    key: '3',
    DocumentType: 'Bank Documents',
    
    Rule:'Last 6 months bank-statements of Salary account mandatory for Salaried Customers',
    
    },
	{
    key: '4',
    DocumentType: 'Application Form',
    
    Rule:'At-least One applicant should be Salaried/Self-Employed',
    
    },
    
    
  ]
  
  
export default class DocumentChecklist3 extends Component{
    constructor(props){
        super(props);
    
        // this.state={
        //     showTable:false
        // }
    
	
	
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

    render(){
        return(
            <div clasName="RulesEnginerightSidebar">
               <Collapse defaultActiveKey={["1"]}>
                <Panel header=" Data Verification and Consistency" key="1" danger>
                <Table bordered
                    columns={columns} dataSource={data}
                
                />
			 <div class="text-right">
				
			<Modal 
				title="Rulesś"
				visible={this.state.visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
				width={820}
         
			>
			{this.state.contents}
			</Modal>
			</div>
         </Panel></Collapse>
            </div>



        )



    }


}
