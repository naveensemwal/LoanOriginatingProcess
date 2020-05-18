import React, { Component } from 'react';
import { Table, Typography,Button,Modal,Divider,Tag,Collapse} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';

const { Column, ColumnGroup } = Table;
const { Panel } = Collapse;
  
const data = [
    {
    key: '1',
    CustomerProfile: 'Salaried',
    IncomeConsidered: 'Y',
    CustomerProfile1: 'Salaried',
    IncomeConsidered2: 'N',
    age: 'Applicant 1',
	},
    
	{
    key: '2',
    CustomerProfile: 'Salaried',
    IncomeConsidered: 'Y',
    CustomerProfile1: 'Salaried',
    IncomeConsidered2: 'Y',
    age: 'Applicant with greater age',
	},
    
	{
    key: '3',
    CustomerProfile: 'Salaried',
    IncomeConsidered: 'Y',
    CustomerProfile1: 'Non Income',
    IncomeConsidered2: 'N',
    age: 'Applicant 1',
	},
    

	{
    key: '4',
    CustomerProfile: 'Self Employed',
    IncomeConsidered: 'Y',
    CustomerProfile1: 'Non Income',
    IncomeConsidered2: 'N',
    age: 'Applicant 1',
	},
    

	{
    key: '5',
    CustomerProfile: 'Self Employed',
    IncomeConsidered: 'Y',
    CustomerProfile1: 'Self Employed',
    IncomeConsidered2: 'Y',
    age: 'Applicant with greater age',
	},
    

	{
    key: '6',
    CustomerProfile: 'Self Employed',
    IncomeConsidered: 'Y',
    CustomerProfile1: 'Self Employed',
    IncomeConsidered2: 'N',
    age: 'Applicant 1',
	},
    

	{
    key: '7',
    CustomerProfile: 'Salaried',
    IncomeConsidered: 'Y',
    CustomerProfile1: 'Pension Income',
    IncomeConsidered2: 'Y',
    age: 'Applicant 2',
	},
    

	{
    key: '8',
    CustomerProfile: 'Self Employed',
    IncomeConsidered: 'Y',
    CustomerProfile1: 'Pension Income',
    IncomeConsidered2: 'Y',
    age: 'Applicant 2',
	},
    

   
  ]
  
  
export default class MaxTen extends Component{
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
                <Panel header="Maximum Tenure" key="1" danger>
                <Table bordered dataSource={data}>
				 
                   <ColumnGroup title="Applicant 1">
				   <Column title="Customer Profile" dataIndex="CustomerProfile" key="CustomerProfile" />
				   <Column title="Income Considered" dataIndex="IncomeConsidered" key="IncomeConsidered" />
				   </ColumnGroup>

				   <ColumnGroup title="Applicant 2">
				   <Column title="Customer Profile" dataIndex="CustomerProfile1" key="CustomerProfile1" />
				   <Column title="Income Considered" dataIndex="IncomeConsidered2" key="IncomeConsidered2" />
				   </ColumnGroup>
				 
				   <Column title="Age to be considered for tenure calculation" dataIndex="age" key="age" />
					
				</Table>
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
