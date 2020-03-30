import React, { Component } from 'react';
import { Table, Typography,Button,Modal,Divider,Tag,Collapse} from 'antd';
import RuleEnginePopup2 from './RuleEnginePopup2';
const { Panel } = Collapse;
const { Column, ColumnGroup } = Table;

  
const data = [
    {
    key: '1',
    CustomerCategory: 'Premium',
    CustomerSeg: 'Salaried-Cat SA/A/B',
    LoanAmt: '< 1Cr',
    EmailId: 'Yes',
    Residence: 'Y',
	Employment: 'N',
	BusinessRef: 'N',
	legal: 'Y',
	Property: 'Y',
	
	},
    
	{
    key: '2',
    CustomerCategory: 'Premium',
    CustomerSeg: 'Salaried-Cat SA/A/B',
    LoanAmt: '< 1Cr',
    EmailId: 'No',
    Residence: 'Y',
	Employment: 'Y',
	BusinessRef: 'N',
	legal: 'Y',
	Property: 'Y',
	},
    
	{
    key: '3',
    CustomerCategory: 'Premium',
    CustomerSeg: 'Salaried-Cat SA/A/B',
    LoanAmt: '> 1Cr',
    EmailId: 'Yes/No',
    Residence: 'Y',
	Employment: 'N',
	BusinessRef: 'N',
	legal: 'Y',
	Property: 'Y',
	},
    

	{
    key: '4',
    CustomerCategory: 'Normal',
    CustomerSeg: 'Salaried-Cat SA/A/B',
    LoanAmt: '< 1Cr',
    EmailId: 'Yes/No',
    Residence: 'Y',
	Employment: 'Y',
	BusinessRef: 'N',
	legal: 'Y',
	Property: 'Y',
	},
    

	{
    key: '5',
    CustomerCategory: 'Normal',
    CustomerSeg: 'Salaried-Cat C/D',
    LoanAmt: '< 1Cr',
    EmailId: 'Yes/No',
    Residence: 'Y',
	Employment: 'N',
	BusinessRef: 'N',
	legal: 'Y',
	Property: 'Y',
	},
    

	{
    key: '6',
    CustomerCategory: 'Normal',
    CustomerSeg: 'Self Employed',
    LoanAmt: '< 1Cr',
    EmailId: '-',
    Residence: 'Y',
	Employment: 'N',
	BusinessRef: 'Y',
	legal: 'Y',
	Property: 'Y',
	},
    

	{
    key: '7',
    CustomerCategory: 'Normal',
    CustomerSeg: 'Salaried',
    LoanAmt: '> 1Cr',
    EmailId: 'Yes/No',
    Residence: 'Y',
	Employment: 'N',
	BusinessRef: 'N',
	legal: 'Y',
	Property: 'Y',
	},
    

	{
    key: '8',
    CustomerCategory: 'Normal',
    CustomerSeg: 'Self Employed',
    LoanAmt: '> 1Cr',
    EmailId: '-',
    Residence: 'Y',
	Employment: 'N',
	BusinessRef: 'Y',
	legal: 'Y',
	Property: 'Y',
	},
    

   
  ]
  
  
export default class VerificationRules extends Component{
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
      contents:<RuleEnginePopup2></RuleEnginePopup2>
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
            <div>
               <Collapse defaultActiveKey={["1"]}>
                <Panel header="Verifications" key="1" danger>
                <Table className='table table-striped table-hover table-bordered'dataSource={data} >
				   <Column title="Customer Category" dataIndex="CustomerCategory" key="CustomerCategory" />
                  
				  <Column title="Customer Segment & Employer category" dataIndex="CustomerSeg" key="CustomerSeg" />

				  <Column title="Loan Amount" dataIndex="LoanAmt" key="LoanAmt" />

				  <Column title="Official Email Id verified?" dataIndex="EmailId" key="EmailId" />

				  <ColumnGroup title="Required Verifications">
				   <Column title="Residence Check" dataIndex="Residence" key="Residence" />
				   <Column title="Employment Check" dataIndex="Employment" key="Employment" />
				   <Column title="Business Reference Check" dataIndex="BusinessRef" key="BusinessRef" />
                   <Column title="Property Legal Verification" dataIndex="legal" key="legal" />
                   <Column title="Property Valuation" dataIndex="Property" key="Property" />
				   </ColumnGroup>

				</Table>
			 <div class="text-right">
				<Button type="primary" onClick={this.showModal}>
					Edit
				</Button>

			<Modal 
				title="Rules"
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
