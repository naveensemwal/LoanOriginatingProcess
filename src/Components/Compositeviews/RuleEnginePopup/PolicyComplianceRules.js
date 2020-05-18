import React, { Component } from 'react';
import { Table, Typography,Button,Modal,Collapse} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';
const { Panel } = Collapse;

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
    Deviation: 'Deviation for <51 per Stake Holder taken as Coapplicant',
	ApprovalLevel:'L4',
	
    },

	{
    key: '7',
    Deviation: 'Dev for waiver of Processing Charges',
	ApprovalLevel:'L1',
	
    },

	{
    key: '8',
    Deviation: 'Property outside Geo limits',
	ApprovalLevel:'L4',
	
    },

	{
    key: '9',
    Deviation: 'Average Bank Balance less than Proposed EMI',
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
    Deviation: '1 to 30 DpD in any of the Open TradeLine',
	ApprovalLevel:'L1',
	
    },

	{
    key: '13',
    Deviation: 'Bureau Score 675-700',
	ApprovalLevel:'L2',
	
    },

	{
    key: '14',
    Deviation: 'Minimum Norms for debit/credit entries not met',
	ApprovalLevel:'L2',
	
    },

	{
    key: '15',
    Deviation: 'Proposed EMI upto 30% of ABB',
	ApprovalLevel:'L2',
	
    },

	{
    key: '16',
    Deviation: 'More than equals to 5 unsecured Live Loans',
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
    Deviation: 'Greater than 5 enquiries on Bureau in the last 3 months for any Unsecured Loan for Applicant/Guarantor/Director/Partner cc',
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
            <div clasName="RulesEnginerightSidebar">
                 <Collapse defaultActiveKey={["1"]}>
                <Panel header="Compliance Rules" key="1" danger>
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
