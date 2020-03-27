import React, { Component } from 'react';
import { Table, Typography,Button,Modal} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';


const { Text } = Typography;
const columns = [
    {
    title: 'Document Category',
    dataIndex: 'DocumentCategory',
    render: text => <a>{text}</a>,
    },
    
    {
    title:'Document Name',
    dataIndex:'DocumentName',
    render: text => <a>{text}</a>,
    }
 
    
  ]
  
const data = [
    {
    key: '1',
    DocumentCategory: 'Application Form',
    
    DocumentName:'Signed Application form',
    
    },
    {
    key: '2',
    DocumentCategory: 'ID Proof',
    
    DocumentName:'Aadhar/Passport/PAN/Voter ID/Driving License',
    
    },
    {
    key: '3',
    DocumentCategory: 'Address Proof',
    
    DocumentName:'Aadhar/Passport/Voter ID/Driving License/Electricity Bill',
    
    },
    {
    key: '4',
    DocumentCategory: 'Income Documents',
    
    DocumentName:'3 salary slips/salary certificate/Latest form 16',
    
    },
    {
    key: '5',
    DocumentCategory: 'banking Documents',
    
    DocumentName:'Latest 6 months bank statement',
    
    },
    
    
  ]
  
  
export default class DocumentChecklist2 extends Component{
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
    var id ='2';
    this.setState({
      visible: true,
      // data: this.data,
      contents:<RuleEnginePopup id={id}></RuleEnginePopup>
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
