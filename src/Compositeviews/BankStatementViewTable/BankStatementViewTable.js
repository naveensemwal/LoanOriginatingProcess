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
                dataIndex: 'CreditSumInRs',

            },
            {
                title:'No.',
                width:230,
                dataIndex: 'CreditNo',

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
                dataIndex: 'DebitSumInRs',

            },
            {
                title:'No.',
                width:230,
                dataIndex: 'DebitNo',

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
                dataIndex: 'MonthlyAverageBankBalanceInRs',

            },
        ]
      },
];

const data2 =[
    {
        key :1,
        Months:'JULY',
        CreditSumInRs: 5790126.00,
        CreditNo: 6.00,
        DebitSumInRs: -5778964.00,
        DebitNo: 36.00, 
        Inward:0.00,
        Outward:0.00,
        MonthlyAverageBankBalanceInRs:754056.48


    },
    {
        key :2,
        Months:'AUG',
        CreditSumInRs: 7034664.00,
        CreditNo: 4.00,
        DebitSumInRs: -7120434.00,
        DebitNo: 50.00, 
        Inward:0.00,
        Outward:0.00,
        MonthlyAverageBankBalanceInRs:1009103.70

    },
    {
        key :3,
        Months:'SEP',
        CreditSumInRs: 78878888.00,
        CreditNo: 20.00,
        DebitSumInRs: -7917926.00,
        DebitNo: 54.00, 
        Inward:0.00,
        Outward:0.00,
        MonthlyAverageBankBalanceInRs:586577.49

    },
    {
        key :4,
        Months:'OCT',
        CreditSumInRs: 5264386.00,
        CreditNo: 16.00,
        DebitSumInRs: -5182132.00,
        DebitNo: 46.00, 
        Inward:0.00,
        Outward:0.00,
        MonthlyAverageBankBalanceInRs:674156.54
 },
    {
        key :5,
        Months:'NOV',
        CreditSumInRs: 1921366.96,
        CreditNo: 10.00,
        DebitSumInRs: -2982932.00,
        DebitNo: 46.00, 
        Inward:0.00,
        Outward:0.00,
        MonthlyAverageBankBalanceInRs:607524.09 },

    {
        key :6,
        Months:'DEC',
        CreditSumInRs: 1705178.00,
        CreditNo: 66.00,
        DebitSumInRs: -1965766.58,
        DebitNo: 32.00, 
        Inward:0.00,
        Outward:0.00,
        MonthlyAverageBankBalanceInRs:594365.18
    },
    {
        key :7,
        Months:'TOTAL',
       CreditSumInRs: 29603608.96,
        CreditNo: 66.00,
        DebitSumInRs: -30948154.58,
        DebitNo: 264.00, 
        Inward:0.00,
        Outward:0.00,
        MonthlyAverageBankBalanceInRs: 6787865.98,
     },
    {
        key :8,
        Months:'AVERAGE',
        CreditSumInRs: 4933934.83,
        CreditNo: 11.00,
        DebitSumInRs: -5158025.76,
        DebitNo: 44.00, 
        Inward:0.00,
        Outward:0.00,
        MonthlyAverageBankBalanceInRs:704313.91 }
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