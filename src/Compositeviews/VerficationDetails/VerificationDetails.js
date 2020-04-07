import React, { Component } from 'react';
import { Table, Typography,Icon,Button } from 'antd';
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
      <Button   onClick={() => window.open('http://localhost:8080/viewone/Document/Residence_Check_Report.pdf', "_blank")} icon="eye" />    
        ),
      },



];


const data1 =[
    {
        key :1,
        ApplicantName:'Varghese Mathew',
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
           <Button   onClick={() => window.open('http://localhost:8080/viewone/Document/Residence_Check_Report.pdf', "_blank")} icon="eye" />         
        ),
      },



];

const data2 =[
    {
        key :1,
        ApplicantName:'Varghese Mathew',
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
           <Button   onClick={() => window.open('http://localhost:8080/viewone/Document/Residence_Check_Report.pdf', "_blank")} icon="eye" />         
        ),
      },

];


const data3 =[
    {
        key :1,
        ApplicantName:'Varghese Mathew',
        VerificationAgency :'B Kakkar and CO',
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
         <Button   onClick={() => window.open('http://localhost:8080/viewone/Document/Residence_Check_Report.pdf', "_blank")} icon="eye" />         
      ),
    },



];


const data4 =[
  {
      key :1,
      ApplicantName:'Varghese Mathew',
      VerificationAgency :'PVP Financial Group',
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