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
     



];

const data =[
    {
        key :1,
        CustomerId:'5130404907',
        CustomerName :'Varghese Mathew',
        AadharNo :'1257479999',
        PanNo :'ATZPM0882C',
        DOB:'May 20, 1989'
    
    },
    {
        key :2,
        CustomerId:'5214438729',
        CustomerName :'SUMITHRA N',
        AadharNo :'592269933073',
        PanNo :'DRSPK9675K',
        DOB:'Jun 05, 1996'
    
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