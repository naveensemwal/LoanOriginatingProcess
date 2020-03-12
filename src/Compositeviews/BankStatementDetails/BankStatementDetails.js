import React, { Component } from 'react';
import { Table, Radio, Divider, Button, Modal,Icon } from 'antd';
import "antd/dist/antd.css";
import BankStatementViewTable  from "../BankStatementViewTable/BankStatementViewTable";

const CustomModalStyle={

  
    left                  : '0%',
    right                 : '0%',
    bottom                : 'auto',  
 


}

export default class BankStatmentDetails extends Component {

  constructor(props) {
    super(props);

    this.columns = [
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
          <Icon type="eye"  onClick={(e) => { this.onView (record, e); }} />
          
        ),
      },
      
    ];
    
    this.data = [
      {
        key: '1',
        name: 'John Brown',
        view: ' amita singh',
    
        
      },
      {
        key: '2',
        name: 'Jim Green',
        view: ' '
        
      },
      {
        key: '3',
        name: 'Joe Black',
        view: ' <Button type="primary" onClick={() => this.setModal1Visible(true)}> Display a modal dialog at 20px to Top</Button>'
       
      },
      {
        key: '4',
        name: 'Disabled User',
        view: ' <Button type="primary" onClick={() => this.setModal1Visible(true)}> Display a modal dialog at 20px to Top</Button>'
      
      },
    ];
    

  this.state = {
    showTable:false,
    title:'',
    data: this.data,
    showModal: false,
    content:<div>Initiatl</div>
  };
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

 

  render() {
    return (
         
      <div>
       
        <Divider />
        <BankStatementViewTable/>
      
        <Table
          columns={this.columns}
          dataSource={this.state.data}
        />
        <Modal
          title={this.state.title}
          visible={this.state.showModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          style={CustomModalStyle}
          width='70%'
        >
          {this.state.content}
        </Modal>
      </div>
    )
  }
}

