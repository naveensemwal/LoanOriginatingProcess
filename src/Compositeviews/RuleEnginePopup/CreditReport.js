import React, { Component } from 'react';
import { Table, Typography,Button,Modal,Collapse} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';
const { Panel } = Collapse;

const { Text } = Typography;
const columns = [
    
    {
    title:'Rule',
    dataIndex:'Rule',
    render: text => <a>{text}</a>,
    },
	{
    title: 'Action',
    dataIndex: 'Action',
    render: text => <a>{text}</a>,
    }
    
 
    
  ]
  
const data = [
    {
    key: '1',
    Rule:'If Payment history contains SUB,LSS,DBT and SMA in last 24 months',
    Action: 'reject',
    },
    
	{
    key: '2',
    Rule:'If Payment history 1 >=30 DPD in last 3 months',
    Action: 'reject',
    },
	{
    key: '3',
    Rule:'CIBIL score Negative',
    Action: 'reject',
    },
	
    
  ]
  
  
export default class CreditReport extends Component{
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
                <Panel header=" Credit Report" key="1" danger>
                <Table bordered
                    columns={columns} dataSource={data}
                
                />
			 <div class="text-right">
				
			<Modal 
				title="MODAL"
				visible={this.state.visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
				width={820}
         
			>
			{this.state.contents}
			</Modal>
			</div>
      </Panel>
      </Collapse>
            </div>



        )



    }


}
