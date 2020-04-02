import React, { Component } from 'react';
import { Table, Typography,Select,Tooltip } from 'antd';
const { Text } = Typography;

const { Column } = Table;

const { Option } = Select;


const data =[
    {
        key: "1",
		ApplicantName: 'Varghese Mathew',
		ResidenceCheck: '',
		Legal: '',
		BusinessReferenceCheck:'',
		EmploymentCheck:'',
		PropertyValuation:''
    },
   
];


export default class VerificationList extends Component{
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

    <Column title="ApplicantName" dataIndex="ApplicantName" key="ApplicantName" />
    <Column
      title="ResidenceCheck"
      dataIndex="ResidenceCheck"
      key="ResidenceCheck"
      render={(text, record) => (
        <span >
          <Select defaultValue="1" style={{width:150}}>
            <Select.Option value="1"><Tooltip title="3G based field management">3G based field management</Tooltip></Select.Option>
            <Select.Option value="2"><Tooltip title="Dorupo financial service pvt ltd.">Dorupo financial service pvt ltd.</Tooltip></Select.Option>
            
          </Select>
        </span>
      )}
    />
	 <Column
      title="Legal"
      dataIndex="Legal"
      key="Legal"
      render={(text, record) => (
        <span >
          <Select defaultValue="1" style={{width:150}}>

            <Select.Option value="1"><Tooltip title="Hiranandani Associates">Hiranandani Associates</Tooltip></Select.Option>
            <Select.Option value="2"><Tooltip title="Payal financial service pvt ltd.">Payal financial service pvt ltd.</Tooltip></Select.Option>            

          </Select>
        </span>
      )}
    />
	<Column
      title="BusinessReferenceCheck"
      dataIndex="BusinessReferenceCheck"
      key="BusinessReferenceCheck"
      render={(text, record) => (
        <span>
          <Select style={{width:150}} disabled>
          
            <Select.Option value="1"><Tooltip title="Mehta and Associates">Mehta and Associates</Tooltip></Select.Option>
            <Select.Option value="2"><Tooltip title="MONEYMALL001">MONEYMALL001</Tooltip></Select.Option>            
           
            
          </Select>
        </span>
      )}
    />
	<Column
      title="EmploymentCheck"
      dataIndex="EmploymentCheck"
      key="EmploymentCheck"
      render={(text, record) => (
        <span>
          <Select defaultValue="2" style={{width:150}}>
          
            <Select.Option value="1"><Tooltip title="D ASK FINANCIAL GROUP">D ASK FINANCIAL GROUP</Tooltip></Select.Option>
            <Select.Option value="2"><Tooltip title="PVP FINANCIAL GROUP">PVP FINANCIAL GROUP</Tooltip></Select.Option>            
          </Select>
        </span>
      )}
    />
	<Column
      title="PropertyValuation"
      dataIndex="PropertyValuation"
      key="PropertyValuation"
      render={(text, record) => (
        <span>
          <Select defaultValue="2" style={{width:150}}>
          <Select.Option value="1"><Tooltip title="ARGUS INC">ARGUS INC</Tooltip></Select.Option>
            <Select.Option value="2"><Tooltip title="B KAKKAR AND CO">B KAKKAR AND CO</Tooltip></Select.Option>            
            
          </Select>
        </span>
      )}
			/>
	</Table>

</div>

        )

    }

}