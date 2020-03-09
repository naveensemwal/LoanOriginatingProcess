import React, { Component } from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;


const columns = [
    {
        title :'Name',
        dataIndex:'name'
    },
    {
        title: 'Borrow',
        dataIndex: 'borrow',
      },
      {
        title: 'Repayment',
        dataIndex: 'repayment',
      },
];

const data =[
    {
        key :1,
        name:'john',
        borrow:10,
        repayment :33
    },
    {
        key :2,
        name:'john',
        borrow:10,
        repayment :33
    },
    {
        key :3,
        name:'john',
        borrow:10,
        repayment :33
    },
    {
        key :4,
        name:'john',
        borrow:10,
        repayment :33
    },
    {
        key :5,
        name:'john',
        borrow:10,
        repayment :33
    }
]

const columns2 = [
    {
        title :'Months',
        dataIndex:'Months',
    },
    {
        title: 'Credit',
        dataIndex: 'Credit',
        children: [
            {
                title:'Sum (in Rs.)',
                width:230,
                dataIndex: 'SumInRs',

            },
            {
                title:'No.',
                width:230,
                dataIndex: 'No',

            }
        ]
      },
      {
        title: 'Debit',
        dataIndex: 'Debit',
        children: [
            {
                title:'Sum (in Rs.)',
                width:230,
                dataIndex: 'SumInRs',

            },
            {
                title:'No.',
                width:230,
                dataIndex: 'No',

            }
        ]
      },
      {
        title: 'Cheque Returns',
        dataIndex: 'ChequeReturns',
        children: [
            {
                title:'Inward',
                width:230,
                dataIndex: 'Inward',

            },
            {
                title:'Outward.',
                width:230,
                dataIndex: 'Outward',

            }
        ]
      },
      {
        title: 'Monthly Average Bank Balance ',
        dataIndex: 'MonthlyAverageBankBalance ',
        children: [
            {
                title:'(In Rs.)',
                width:230,
                dataIndex: 'Inward',

            },
        ]
      },
];

const data2 =[
    {
        key :1,
        Months:'JUL',
        Credit:[10,2],
        Debit :33,
        ChequeReturns :'',
        MonthlyAverageBankBalance:'sss',

    },
    {
        key :2,
        Months:'AUG',
         Credit:[10,2],
        Debit :33,
        ChequeReturns :'',
        MonthlyAverageBankBalance:'sss',
    },
    {
        key :3,
        Months:'SEP',
         Credit:[10,2],
        Debit :33,
        ChequeReturns :'',
        MonthlyAverageBankBalance:'sss',
    },
    {
        key :4,
        Months:'OCT',
         Credit:[10,2],
        Debit :33,
        ChequeReturns :'',
        MonthlyAverageBankBalance:'sss',
    },
    {
        key :5,
        Months:'NOV',
         Credit:[10,2],
        Debit :33,
        ChequeReturns :'',
        MonthlyAverageBankBalance:'sss',
    },
    {
        key :6,
        Months:'DEC',
         Credit:[10,2],
        Debit :33,
        ChequeReturns :'',
        MonthlyAverageBankBalance:'sss',
    },
    {
        key :5,
        Months:'TOTAL',
         Credit:[10,2],
        Debit :33,
        ChequeReturns :'',
        MonthlyAverageBankBalance:'sss',
    },
    {
        key :5,
        Months:'AVERAGE',
         Credit:[10,2],
        Debit :33,
        ChequeReturns :'',
        MonthlyAverageBankBalance:'sss',
    }
]
export default class BankStatementViewTable extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     showTable:false
        // }
    }
    render() {
        if(this.props.showTable === true){
        return(
          
         <div>
             <Table className='table table-striped table-hover table-bordered' columns={(this.props.id==1)? columns:columns2}
          dataSource={(this.props.id==1)?data:data2} ></Table>
         </div>
       
         )
        }
        else{
            return '';
        }
    }
    
}