import React, { Component } from 'react';
import { Table, Typography,Select } from 'antd';
const { Text } = Typography;

const { Column } = Table;

const { Option } = Select;


const data =[
    {
        key: "1",
		SystemDeviationDescription: 'Shareholding norms not met',
		DeviationLevel: 'L2',
		Action: '',
		
    },
	{
        key: "2",
		SystemDeviationDescription: 'Marital Status is other than Married',
		DeviationLevel: 'L3',
		Action: '',
		
    },
	{
        key: "3",
		SystemDeviationDescription: 'Residence Verification Negative',
		DeviationLevel: 'L1',
		Action: '',
		
    },
   
    {
        key: "4",
		SystemDeviationDescription: 'Residence stability norms not met',
		DeviationLevel: 'L4',
		Action: '',
		
    },
   
];


export default class DeviationDetails extends Component{
    constructor(props){
        super(props);
    
        // this.state={
        //     showTable:false
        // }
    }
render(){
        return(
<div>
	<label>System Deviation</label>
     <Table dataSource={data}>

    <Column title="System Deviation Description" dataIndex="SystemDeviationDescription" key="SystemDeviationDescription" />
	<Column title="Deviation Level" dataIndex="DeviationLevel" key="DeviationLevel" />

    <Column
      title="Action"
      dataIndex="Action"
      key="Action"
      render={(text, record) => (
        <span>
          <Select style={{width:'14% !important'}}>
            <Select.Option value="1">Approve</Select.Option>
            <Select.Option value="2">Reject</Select.Option>
            
          </Select>
        </span>
      )}
    />
	
	</Table>

</div>

        )

    }

}