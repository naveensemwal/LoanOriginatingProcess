import React, { Component } from 'react';
import { Table, Typography,Button,Modal} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';


const { Text } = Typography;
const columns = [
    
	{
    title: 'Deviation',
    dataIndex: 'Deviation',
    render: text => <a>{text}</a>,
    },
	
    {
    title:'Approval Level',
    dataIndex:'ApprovalLevel',
    render: text => <a>{text}</a>,
    },
	]
  
const data = [
    {
    key: '1',
    Deviation: 'Residence Check Negative- Entry Not allowed & TPC not done',
	ApprovalLevel:'L3',
	
    },
    
	{
    key: '2',
    Deviation: 'Residence Check Negative- Door Locked',
	ApprovalLevel:'L3',
	
    },

	{
    key: '3',
    Deviation: 'Employment Check Negative- Applicant does not work here or does not exist',
	ApprovalLevel:'L4',
	
    },

	{
    key: '4',
    Deviation: 'Residence Check Negative- Address does not exist/Not traceable',
	ApprovalLevel:'L3',
	
    },

	{
    key: '5',
    Deviation: 'Dev for takeover cases where competition had earlier sanctioned higher limits',
	ApprovalLevel:'L5',
	
    },

	{
    key: '6',
    Deviation: 'Deviation for <51 per stake holder taken as coapplicant',
	ApprovalLevel:'L4',
	
    },

	{
    key: '7',
    Deviation: 'Dev for waiver of processing charges',
	ApprovalLevel:'L1',
	
    },

	{
    key: '8',
    Deviation: 'Property outside geo limits',
	ApprovalLevel:'L4',
	
    },

	{
    key: '9',
    Deviation: 'Average bank Balance less than proposed Emi',
	ApprovalLevel:'L2',
	
    },

	{
    key: '10',
    Deviation: 'Stock Turn over >90days',
	ApprovalLevel:'L2',
	
    },

	{
    key: '11',
    Deviation: 'Negative PAT',
	ApprovalLevel:'L3',
	
    },

	{
    key: '12',
    Deviation: '1 to 30 DpD in any of the Open tradeLine',
	ApprovalLevel:'L1',
	
    },

	{
    key: '13',
    Deviation: 'Bureau Score 675-700',
	ApprovalLevel:'L2',
	
    },

	{
    key: '14',
    Deviation: 'Minimum norms for debit/credit entries not met',
	ApprovalLevel:'L2',
	
    },

	{
    key: '15',
    Deviation: 'Proposed EMI upto 30% of ABB',
	ApprovalLevel:'L2',
	
    },

	{
    key: '16',
    Deviation: 'More than equals to 5 unsecured live loans',
	ApprovalLevel:'L3',
	
    },

	{
    key: '17',
    Deviation: 'More than equals to 30 DPD in last 12 months',
	ApprovalLevel:'L3',
	
    },

	{
    key: '18',
    Deviation: 'Proposed EMI upto 30% of ABB',
	ApprovalLevel:'L2',
	
    },

	{
    key: '19',
    Deviation: 'Greater than 5 Enquiries on bureau in the last 3 months for any unsecured loan for Applicant/Guarantor/Director/Partner cc',
	ApprovalLevel:'L2',
	
    },

	{
    key: '20',
    Deviation: 'Bureau Score <675',
	ApprovalLevel:'L3',
	
    },

   
  ]
  
  
export default class PolicyComplianceRules extends Component{
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
            <div>
                <Table className='table table-striped table-hover table-bordered'
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

            </div>



        )



    }


}
