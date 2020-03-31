import React, { Component } from 'react';
import { EyeOutlined } from '@ant-design/icons';
import { Table, Typography } from 'antd';
const { Text } = Typography;


const columns1 = [
    {
        title :'Applicant Name',
        dataIndex:'ApplicantName'
    },
    {
        title: 'Verification Agency',
        dataIndex: 'VerificationAgency',
      },
      {
        title: 'Comment',
        dataIndex: 'Comment',
      },
      {
        title: 'Result',
        dataIndex: 'Result',
      },
      {
        title: 'Status',
        dataIndex: 'Status',
      },
      {
        title: 'View',
        dataIndex: 'View',
		render: (text, record) => (
          <EyeOutlined />          
        ),
      },



];


const data1 =[
    {
        key :1,
        ApplicantName:'Varghese Mathew',
        VerificationAgency :'ABC Agency',
        Comment :'ABC Agency',
        Result :'Not Applicable',
        Status :'Not Applicable',
        View :'ABC Agency'
    },

]

const columns2 = [
    {
        title :'Applicant Name',
        dataIndex:'ApplicantName'
    },
    {
        title: 'Verification Agency',
        dataIndex: 'VerificationAgency',
      },
      {
        title: 'Comment',
        dataIndex: 'Comment',
      },
      {
        title: 'Result',
        dataIndex: 'Result',
      },
      {
        title: 'Status',
        dataIndex: 'Status',
      },
      {
        title: 'View',
        dataIndex: 'View',
        render: (text, record) => (
          <EyeOutlined />          
        ),
      },



];

const data2 =[
    {
        key :1,
        ApplicantName:'Varghese Mathew',
        VerificationAgency :'ABC Agency',
        Comment :'ABC Agency',
        Result :'Not Applicable',
        Status :'Not Applicable',
        View :'ABC Agency'
    },

]

const columns3 = [
    {
        title :'Applicant Name',
        dataIndex:'ApplicantName'
    },
    {
        title: 'Verification Agency',
        dataIndex: 'VerificationAgency',
      },
      {
        title: 'Comment',
        dataIndex: 'Comment',
      },
      {
        title: 'Result',
        dataIndex: 'Result',
      },
      {
        title: 'Status',
        dataIndex: 'Status',
      },
      {
        title: 'View',
        dataIndex: 'View',
        render: (text, record) => (
          <EyeOutlined />          
        ),
      },

];


const data3 =[
    {
        key :1,
        ApplicantName:'Varghese Mathew',
        VerificationAgency :'ABC Agency',
        Comment :'ABC Agency',
        Result :'Not Applicable',
        Status :'Not Applicable',
        View :'ABC Agency'
    },

]



export default class VerificationDetails extends Component{
    constructor(props){
        super(props);
    
        // this.state={
        //     showTable:false
        // }
    }
    render(){
        return(
        <div>
            <div>
				<label>Residence Check</label>
                <Table className='table table-striped table-hover table-bordered'
                    columns={columns1} dataSource={data1}
                
                />

            </div>
			
			
			<div>
				<label>Legal</label>
                <Table className='table table-striped table-hover table-bordered'
                    columns={columns2} dataSource={data2}
                
                />

            </div>


			<div>
				<label>Property Valuation</label>
                <Table className='table table-striped table-hover table-bordered'
                    columns={columns3} dataSource={data3}
                
                />

            </div>
        </div>
        )

    }

}