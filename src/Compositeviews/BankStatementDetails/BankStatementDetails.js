import React, { Component, useState, Fragment } from 'react';
import { Table, Radio, Divider } from 'antd';
import {Button } from 'antd';
import Cust_Modal from '../Cust_modal/Cust_modal';
import Modal from 'react-modal';
import { ModalProvider, ModalConsumer } from '../Cust_modal/ModalContext';
import ModalRoot from '../Cust_modal/ModalRoot';

const Modal1 = ({ onRequestClose, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div>I am a modal</div>
  </Modal>
);

const Modal2 = ({ onRequestClose, foo, ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps}>
    <button onClick={onRequestClose}>close</button>
    <div>second modal {foo}</div>
  </Modal>
);

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};


const Demo = () => {
  const columns = [
    {
      title: 'Bank Statement',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'View',
      dataIndex: 'view',
      render: () => <a class="btn" type="primary" > Eye</a>
      //onClick={Cust_Modal.showModal()}
    },
    
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      view: ' <Button type="primary" onClick={() => this.setModal1Visible(true)}> Display a modal dialog at 20px to Top</Button>'
      
    },
    {
      key: '2',
      name: 'Jim Green',
      view: ' <Button type="primary" onClick={() => this.setModal1Visible(true)}> Display a modal dialog at 20px to Top</Button>'
      
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
  

  const [selectionType, setSelectionType] = useState('checkbox');
  
    return (
/*reusable modal code start */

/**reusable model code end */

      <div>
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group>
  
        <Divider />
  
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
        <Cust_Modal></Cust_Modal>
        <ModalProvider>
    <ModalRoot />
    <ModalConsumer>
      {({ showModal }) => (
        <Fragment>
          <button onClick={() => showModal(Modal1)}>Open Modal</button>
          <button onClick={() => showModal(Modal2, { foo: 'bar' })}>
            Open Second Modal
          </button>
        </Fragment>
      )}
    </ModalConsumer>
  </ModalProvider>
      </div>
    );
};

export default class BankStatmentDetails extends Component {
/*modal code start*/
  state = {
    modalIsOpen: false,
    secondModalIsOpen: false
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  openSecondModal = () => {
    this.setState({ secondModalIsOpen: true });
  };

  closeSecondModal = () => {
    this.setState({ secondModalIsOpen: false });
  };

/**modal code end */

  constructor(props) {
    super(props);
    this.showModel = this.showModel.bind(this);
  }
  showModel (props) {
    // do something
    this.props.showModal();
  }
    render() {
        return (
          <Demo />
          )
    }
}