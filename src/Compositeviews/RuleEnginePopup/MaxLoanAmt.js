import React, { Component } from 'react';
import { Table, Typography,Button,Modal,Collapse} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';
const { Panel } = Collapse;

const { Text } = Typography;
const columns = [
    
	{
    title: 'Property Type',
    dataIndex: 'PropertyType',
    render: text => <a>{text}</a>,
    },
	
    {
    title:'Category A',
    dataIndex:'CategoryA',
    render: text => <a>{text}</a>,
    },

	{
    title:'Category B',
    dataIndex:'CategoryB',
    render: text => <a>{text}</a>,
    },
	
	{
    title:'Category C',
    dataIndex:'CategoryC',
    render: text => <a>{text}</a>,
    },
	


	]
  
const data = [
    {
    key: '1',
    PropertyType: 'Ready Property',
	CategoryA:'50',
	CategoryB :'50',
	CategoryC :'30'
	
    },
    
    {
    key: '2',
    PropertyType: 'Under Construction',
	CategoryA:'50',
	CategoryB :'50',
	CategoryC :'30'
	
    },
	{
    key: '3',
    PropertyType: 'Self Construction',
	CategoryA:'20',
	CategoryB :'15',
	CategoryC :'15'
	
    },
	{
    key: '4',
    PropertyType: 'Plots+Construction',
	CategoryA:'50',
	CategoryB :'20',
	CategoryC :'20'
	
    },
  ]
  
  
export default class MaxLoanAmt extends Component{
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
                <Panel header="Maximum Loan Amount" key="1" danger>
                <Table bordered
                    columns={columns} dataSource={data}
                
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
