import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import { Table, Radio, Divider, Button, Modal } from 'antd';
import "antd/dist/antd.css";
import BankStatementViewTable  from "../BankStatementViewTable/BankStatementViewTable";
import Statementanalyzer from '../Statementanalyzer/Statementanalyzer';
import Statementdetails from '../Statementdetails/Statementdetails';
import {EyeOutlined,PieChartOutlined,DownloadOutlined} from '@ant-design/icons';
//import TrialTable from '../TrialTable/TrialTable';
//import DynamicTable from '../DynamicTable/DynamicTable'
const CustomModalStyle={
    left                  : '0%',
    right                 : '0%',
    bottom                : 'auto',  
}



export default class BankStatmentDetails extends Component {
   
  constructor(props) {
    super(props);
    this.state= {
      dataBank:[],
      loading:true,
      columnData:[],
      showTable:false,
      title:'',
      data: this.data,
      showModal: false,
      content:<div>Initiatl</div>
   
    };
  }
    componentDidMount() {
      const columns = [
        {
          title: 'Bank Statement',
          dataIndex: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'View',
          dataIndex: 'view',
          // render: text => <Icon type="eye"  onClick={(e) => { this.onView (record.key, e); }} />
          render: (text, record) => (
            <EyeOutlined className='ant-btn ant-btn-primary ant-btn-circle ant-btn-icon-only' onClick={(e) => { this.onView (record, e); }} />          
          ),
        },
        {
          title:'Download',
          dataIndex:'download',
       //  render: <Icon type="download" className='ant-btn ant-btn-primary ant-btn-circle ant-btn-icon-only' onClick={(e) => { this.onView (record, e); }} /> 
        render: text=><DownloadOutlined className='ant-btn ant-btn-primary ant-btn-circle ant-btn-icon-only'/> 
        // <Link  to='../../../../public/assets/img/Sample_Doc.pdf'
        // onClick={(event) => { event.preventDefault(); window.open('../../../public/assets/img/Sample_Doc.pdf');}}>Download</Link>
        },
        {
          title:'Statement Analyzer',
          dataIndex:'statementAnalyzer',
          render: (text, record) => (
            <PieChartOutlined className='ant-btn ant-btn-primary ant-btn-circle ant-btn-icon-only' onClick={(e) => { this.onViewCStatement (record, e); }} />          
          ),
        }
      
        
      ];
      const data= [{
          "key": "1",
          "name": "KOTAK MAHINDRA BANK LTD - 00897897114",
          "view": "View",
          "download": "Download",
          "statementAnalyzer":"StatementAnalyzer"
        }, {
          "key": "2",
          "name": "KOTAK MAHINDRA BANK LTD - 65470157872",
          "view": "View",
          "download": "Download",
          "statementAnalyzer":"StatementAnalyzer"
        }];
        this.setState({
          loading:true,
          dataBank:data,
          columns:columns
        })

        /**Fetching data using api*/
      // fetch("http://localhost:4231/bankstatementDetails.php").
      // then(response=>response.json()).
      // then((responseJson)=>{
      //   console.log(responseJson);
      //   this.setState({
      //     loading:true,
      //     dataBank:responseJson,
      //     columns:columns
      //   })
      // })
      // .catch(error=>console.log(error))
    }
    
    
  onView = (data, e) => {
    e.preventDefault();
    var id= data.key;
    this.setState({ 
      showModal:true,
      showTable:true,
    title:<div>{data.name}</div>,
    content: <BankStatementViewTable showTable={true} id={id}/> 
      
    });
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      showModal: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      showModal: false,
    });
  };



  onViewCStatement = (data, e) => {
    e.preventDefault();
    var id= data.key;
    this.setState({ 
      showModal:true,
      showTable:true,
 
    title:<div>{data.name}</div>,
      content:<Statementanalyzer showTable={true} id={id}/>
      
    });
  }


 

  render() {
    if(this.state.loading){
    return (

      <div>
       
        <Divider />
     {/* <DynamicTable/>  */}
        <BankStatementViewTable/>
     
        <Table 
          columns={this.state.columns}
          dataSource={this.state.dataBank}
          bordered 
        />
<div class="text-center">
        <a href='#' className='ant-btn mar-rig-10 ant-btn-primary ant-btn-lg'>Upload</a>
        </div>
        <Modal
          title={this.state.title}
          visible={this.state.showModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={CustomModalStyle}
          width='98%'
         
        >
          {this.state.content}
        </Modal>
   
      </div>
    )}
  }
}


