import React, { Component } from 'react';
import { Table, Typography,Icon } from 'antd';
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
          <Icon type="eye" />          
        ),
      },



];


const data1 =[
    {
        key :1,
        ApplicantName:'Singla sales',
        VerificationAgency :'3G based field management',
        Comment :'Satisfactory',
        Result :'Positive',
        Status :'Completed',
        View :''
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
          <Icon type="eye" />          
        ),
      },



];

const data2 =[
    {
        key :1,
        ApplicantName:'Singla sales',
        VerificationAgency :'Hiranandani Associates',
        Comment :'Part property is constructed on projections which is on MCD land.',
        Result :'Positive',
        Status :'Completed',
        View :''
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
          <Icon type="eye" />          
        ),
      },

];


const data3 =[
    {
        key :1,
        ApplicantName:'Singla sales',
        VerificationAgency :'MONEYMALL001',
        Comment :'Satisfactory',
        Result :'Positive',
        Status :'Completed',
        View :''
    },

]

const columns4 = [
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
        <Icon type="eye" />          
      ),
    },



];


const data4 =[
  {
      key :1,
      ApplicantName:'Singla sales',
      VerificationAgency :'PVP FINANCIAL GROUP',
      Comment :'Satisfactory',
      Result :'Positive',
      Status :'Completed',
      View :''
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
				        <label>Employment Check</label>
                <Table className='table table-striped table-hover table-bordered'
                    columns={columns4} dataSource={data4}
                
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