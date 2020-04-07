import React, { Component } from 'react';
import { Table, Typography,Select } from 'antd';
const { Text } = Typography;

const { Column } = Table;

const { Option } = Select;


const data =[
    {
        key: "1",
		SystemDeviationDescription: 'Dev for waiver of processing charges',
		DeviationLevel: 'L1',
		Action: '',
		
    },
	{
        key: "2",
		SystemDeviationDescription: 'Average bank balance less than proposed EMI',
		DeviationLevel: 'L2',
		Action: '',
		
    },
	{
        key: "3",
		SystemDeviationDescription: 'More than equal to  30 DPD in last 12 months',
		DeviationLevel: 'L3',
		Action: '',
		
    },
   
    {
        key: "4",
		SystemDeviationDescription: 'Greater than 5 enquiries on bureau in the last 3 months for any unsecured loan for Applicant/ Guarantor/ Director/ Partner cc',
		DeviationLevel: 'L2',
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
	
     <Table dataSource={data}>

    <Column  width={250} title="Deviation Description" dataIndex="SystemDeviationDescription" key="SystemDeviationDescription" />
	<Column width={100} title="Deviation Level" dataIndex="DeviationLevel" key="DeviationLevel" />

    <Column
      title="Action"
      dataIndex="Action"
      key="Action"
      width={5}
      render={(text, record) => (
        <span>
          <Select >
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