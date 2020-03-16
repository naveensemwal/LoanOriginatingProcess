import React, { Component } from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;


const columns = [
    {
        title :'Product Type',
        dataIndex:'ProductType'
    },
    {
        title: 'Product Name',
        dataIndex: 'ProductName',
      },
      {
        title: 'Reason',
        dataIndex: 'Reason',
      },
      {
        title: 'Features',
        dataIndex: 'Features',
      },
     
];

const data =[
    {
        key :1,
        ProductType:'VISA Signature Credit Card',
        ProductName :'Credit Card',
        Reason :'Eligible as per net annual salary',
        Features :'Earn 2 PAYBACK points on every ₹ 100 spent, Waiver of 2.5% fuel surcharge on fuel purchases, Complimentary airport lounge access'
    },
    {
        key :2,
        ProductType:'Loan Protect Plan',
        ProductName :'Insurance',
        Reason :'Eligible as per monthly EMI 60% of monthly salary',
        Features :'Life insurance coverage, Assistance to repay a variety of loans, Coverage for co-borrowers'
    },
    
   
    
    
]


export default class CrossSellingRecommendation extends Component{
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