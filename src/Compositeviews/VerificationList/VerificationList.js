import React, { Component } from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;


const columns = [
    {
        title :'Applicant Name',
        dataIndex:'ApplicantName'
    },
    {
        title: 'Residence Check',
        dataIndex: 'ResidenceCheck',
      },
      {
        title: 'Legal',
        dataIndex: 'Legal',
      },
      {
        title: 'Business Reference Check',
        dataIndex: 'BusinessReferenceCheck',
      },
      {
        title: 'Employment Check',
        dataIndex: 'EmploymentCheck',
      },
      {
        title: 'Property Valuation',
        dataIndex: 'PropertyValuation',
      },



];

const data =[
    {
        key :1,
        ApplicantName:'Varghese Mathew',
        ResidenceCheck :'ABC Agency',
        Legal :'ABC Agency',
        BusinessReferenceCheck :'Not Applicable',
        EmploymentCheck:'Not Applicable',
        PropertyValuation:'ABC Agency'
    },
   
    
   
    
    
]


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
                <Table className='table table-striped table-hover table-bordered'
                    columns={columns} dataSource={data}
                
                />

            </div>



        )



    }


}