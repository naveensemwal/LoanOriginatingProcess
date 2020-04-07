import React, { Component } from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;


const columns = [
    {
        title :'Line of Business',
        dataIndex:'LineOfBusiness'
    },
    {
        title: 'Account Type',
        dataIndex: 'AccountType',
      },
      {
        title: 'Account Name',
        dataIndex: 'AccountName',
      },
      {
        title: 'Active Since',
        dataIndex: 'ActiveSince',
      },
      {
        title: 'Customer Category',
        dataIndex: 'CustomerCategory',
      },
];

const data =[
    {
        key :1,
        LineOfBusiness:'Retail CASA',
        AccountType:'Savings Account',
        AccountName :'Insta Saving Account',
        ActiveSince :'Jan 2016',
        CustomerCategory :'Bronze'
    },
    {
        key :2,
        LineOfBusiness:'Retail Deposits',
        AccountType:'Fixed Deposit Account',
        AccountName :'Fixed Tenor Premium FD Account',
        ActiveSince :'Jun 2018',
        CustomerCategory :'Premium'
    },
    {
        key :3,
        LineOfBusiness:'Insurance',
        AccountType:'Term Insurance',
        AccountName :'iProtect Smart',
        ActiveSince :'Aug 2012',
        CustomerCategory :'Premium'
    },
    
    
]


export default class CustomerRelationship extends Component{
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