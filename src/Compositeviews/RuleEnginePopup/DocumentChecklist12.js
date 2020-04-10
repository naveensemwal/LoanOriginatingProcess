import React, { Component } from 'react';
import { Table, Typography,Button,Modal,Collapse} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';
const { Panel } = Collapse;

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
    
    DocumentName:'3 Salary Slips/Salary Certificate/Latest Form 16',
    
    },
    {
    key: '5',
    DocumentCategory: 'Banking Documents',
    
    DocumentName:'Latest 6 Months Bank Statement',
    
    },
    {
    key: '6',
    DocumentCategory: 'Property Documents',
    
    DocumentName:'Copy of Original Sale Deed/Allotment-Possession Letter/NOC from Society',
    
    },
    
  ]
  
  
export default class DocumentChecklist1 extends Component{
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
    var id ='1';
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
            <div clasName="RulesEnginerightSidebar">
              <Collapse defaultActiveKey={["1"]}>
                <Panel header=" Loan against Property" key="1" danger>
                <Table bordered
                    columns={columns} dataSource={data}
                
                />
			           <div class="text-right">
				          <Button type="primary" onClick={this.showModal}>Edit</Button>
                    <Modal 
				            title="Rules"
				            visible={this.state.visible}
				            onOk={this.handleOk}
				            onCancel={this.handleCancel}
                    width={1020}
                    height={200}
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
