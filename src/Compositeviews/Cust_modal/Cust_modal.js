import React, { Component, useState } from 'react';
import { Modal, Button } from 'antd';
//import BankStatmentDetails from '../BankStatementDetails/BankStatementDetails';

export default class Cust_modal extends React.Component {
    constructor() {
        super();
//        this.showModal = this.showModal.bind(this);
    }
    
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title={this.props.modalTitle}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
         {this.props.modalBodyData}
        </Modal>
      </div>
    );
  }
}
