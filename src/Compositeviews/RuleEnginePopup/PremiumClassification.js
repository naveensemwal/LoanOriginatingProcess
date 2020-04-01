import React, { Component } from 'react';
import { Table, Typography,Button,Modal,Collapse} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';
const { Panel } = Collapse;

const { Text } = Typography;
const columns = [
    
	{
    title: 'Customer Profile',
    dataIndex: 'CustomerProfile',
    render: text => <a>{text}</a>,
    },
	
    {
    title:'Employer Category',
    dataIndex:'EmployerCategory',
    render: text => <a>{text}</a>,
    },
	
	{
    title:'Monthly Income',
    dataIndex:'MonthlyIncome',
    render: text => <a>{text}</a>,
    },
 
    {
    title:'CIBIL Score',
    dataIndex:'CIBILScore',
    render: text => <a>{text}</a>,
    },
  ]
  
const data = [
    {
    key: '1',
    CustomerProfile: 'Salaried',
	EmployerCategory:'CAT SA',
	MonthlyIncome :'>50K',
	CIBILScore :'>700'
	
    },
    
    {
    key: '2',
    CustomerProfile: 'Salaried',
	EmployerCategory:'CAT A',
	MonthlyIncome :'>50K',
	CIBILScore :'>700'
	
    },
	
	{
    key: '3',
    CustomerProfile: 'Salaried',
	EmployerCategory:'CAT B',
	MonthlyIncome :'>50K',
	CIBILScore :'>700'
	
    },
  ]
  
  
export default class PremiumClassification extends Component{
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
                <Panel header="Premium Classification" key="1" danger>
                <Table bordered
                    columns={columns} dataSource={data}
                
                />
			 <div class="text-right">
				<Button type="primary" onClick={this.showModal} disabled>
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
