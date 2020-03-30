import React, { Component } from 'react';
import { Table, Typography,Select } from 'antd';
const { Text } = Typography;

const { Column } = Table;

const { Option } = Select;


const data =[
    {
        key: "1",
		ApplicantName: 'Singla sales',
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
          <Select style={{width:130}}>
            <Select.Option value="1">3G based field management</Select.Option>
            <Select.Option value="2">Dorupo financial service pvt ltd.</Select.Option>
            <Select.Option value="3">Hiranandani Associates</Select.Option>
            <Select.Option value="4">payal financial service pvt ltd.</Select.Option>
            <Select.Option value="5">Mehta and Associates</Select.Option>
            <Select.Option value="6">MONEYMALL001</Select.Option>
            <Select.Option value="7">D ASK FINANCIAL GROUP</Select.Option>
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
          <Select style={{width:130}}>
          <Select.Option value="1">3G based field management</Select.Option>
            <Select.Option value="2">Dorupo financial service pvt ltd.</Select.Option>
            <Select.Option value="3">Hiranandani Associates</Select.Option>
            <Select.Option value="4">payal financial service pvt ltd.</Select.Option>
            <Select.Option value="5">Mehta and Associates</Select.Option>
            <Select.Option value="6">MONEYMALL001</Select.Option>
            <Select.Option value="7">D ASK FINANCIAL GROUP</Select.Option>
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
          <Select style={{width:130}}>
          <Select.Option value="1">3G based field management</Select.Option>
            <Select.Option value="2">Dorupo financial service pvt ltd.</Select.Option>
            <Select.Option value="3">Hiranandani Associates</Select.Option>
            <Select.Option value="4">payal financial service pvt ltd.</Select.Option>
            <Select.Option value="5">Mehta and Associates</Select.Option>
            <Select.Option value="6">MONEYMALL001</Select.Option>
            <Select.Option value="7">D ASK FINANCIAL GROUP</Select.Option>
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
          <Select style={{width:130}}>
          <Select.Option value="1">3G based field management</Select.Option>
            <Select.Option value="2">Dorupo financial service pvt ltd.</Select.Option>
            <Select.Option value="3">Hiranandani Associates</Select.Option>
            <Select.Option value="4">payal financial service pvt ltd.</Select.Option>
            <Select.Option value="5">Mehta and Associates</Select.Option>
            <Select.Option value="6">MONEYMALL001</Select.Option>
            <Select.Option value="7">D ASK FINANCIAL GROUP</Select.Option>
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
          <Select style={{width:130}}>
          <Select.Option value="1">3G based field management</Select.Option>
            <Select.Option value="2">Dorupo financial service pvt ltd.</Select.Option>
            <Select.Option value="3">Hiranandani Associates</Select.Option>
            <Select.Option value="4">payal financial service pvt ltd.</Select.Option>
            <Select.Option value="5">Mehta and Associates</Select.Option>
            <Select.Option value="6">MONEYMALL001</Select.Option>
            <Select.Option value="7">D ASK FINANCIAL GROUP</Select.Option>
          </Select>
        </span>
      )}
			/>
	</Table>

</div>

        )

    }

}