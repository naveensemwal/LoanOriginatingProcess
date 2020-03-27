import React, { Component } from 'react';
import { Table, Typography,Button,Modal} from 'antd';
import RuleEnginePopup from './RuleEnginePopup';


const { Text } = Typography;
const columns = [
    
    {
    title:'Max Age of Applicant/Co-applicant',
    dataIndex:'Max_age',
    render: text => <a>{text}</a>,
    },
	{
    title: 'Customer Profile',
    dataIndex: 'CustomerProfile',
    render: text => <a>{text}</a>,
    }
    
 
    
  ]
  
const data = [
    {
    key: '1',
    Max_age:'60',
    CustomerProfile: 'Salaried',
    },
    
	{
    key: '2',
    Max_age:'70',
    CustomerProfile: 'Self-Employed',
    },
	{
    key: '3',
    Max_age:'70',
    CustomerProfile: 'Pension Income',
    },
	{
    key: '4',
    Max_age:'75',
    CustomerProfile: 'Non-Income',
    },
    
  ]
  
  
export default class MaxAge extends Component{
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
