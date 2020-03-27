import React, { Component } from 'react';
import { Table, Typography } from 'antd';
const { Text } = Typography;


const columns = [
    {
        title :'Customer Id',
        dataIndex:'CustomerId'
    },
    {
        title: 'Customer Name',
        dataIndex: 'CustomerName',
      },
      {
        title: 'Aadhar No',
        dataIndex: 'AadharNo',
      },
      {
        title: 'Pan No',
        dataIndex: 'PanNo',
      },
      {
        title: 'DOB',
        dataIndex: 'DOB',
      },
      {
        title: 'Match',
        dataIndex: 'Match',
      },



];

const data =[
    {
        key :1,
        CustomerId:'Varghese Mathew',
        CustomerName :'ABC Agency',
        AadharNo :'ABC Agency',
        PanNo :'Not Applicable',
        DOB:'Not Applicable',
        Match:'ABC Agency'
    },
   
    
   
    
    
]


export default class DedupeResult extends Component{
    constructor(props){
        super(props);
    
        // this.state={
        //     showTable:false
        // }
    }
    render(){
        return(
            <div>
                <Table bordered 
                    columns={columns} dataSource={data}
                
                />

            </div>



        )



    }


}