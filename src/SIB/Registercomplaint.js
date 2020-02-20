import { Button, DatePicker, Form, Input, Radio, Select, TimePicker } from 'antd';
import "antd/dist/antd.css";
import React, { Component } from 'react';

const { Option } = Select;

export default class Registercomplaint extends Component {

  handleSubmit = e => {
    console.dir(this)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      complaintForm: {
        branchName: "Zoho Branch",
        city: "1",
      }
    };

  }

  state = {
    loading: false,
    complaintForm: {
      branchName: "Zoho Branch",
      city: "1",

    }
  };

  render() {

    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const prefixSelector = getFieldDecorator('countryCode', {
      initialValue: '91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="971">+971</Option>
      </Select>,
    );
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label='Branch Name'>
          {getFieldDecorator('branchName', {
            rules: [{ required: true, message: 'Please input your branch name...', whitespace: true }],
          })(<Input />)}
        </Form.Item>


        <Form.Item label="City">
          {getFieldDecorator('city', {
            rules: [{ required: true, message: 'Select Loan Type!' }],
          })(
            <Select placeholder="City">
              <Option value="1">Kochi</Option>
              <Option value="2">Ernakulam</Option>
              <Option value="3">Kozhikode</Option>
              <Option value="4">Kovalam</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label='Name of the Customer'>
          {getFieldDecorator('customerName', {
            rules: [{ required: true, message: 'Please input customer name...', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Account Number'>
          {getFieldDecorator('accountNumber', {
            rules: [{ required: true, message: 'Please input account number...', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Debit Card/ATM Card No.'>
          {getFieldDecorator('cardNumber', {
            rules: [{ required: true, message: 'Please input card number...', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('mobileNumber', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Nature of the Complaint">
          {getFieldDecorator('complaintType',{
            initialValue:'cashWithdrawal'
          })(
            <Radio.Group >
              <Radio value="cashWithdrawal">Cash withdrawal </Radio>
              <Radio value="cardCaptured">Card Captured </Radio>
              <Radio value="otherComplaint">Other Complaint </Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        { (this.props.form.getFieldValue('complaintType')===undefined || this.props.form.getFieldValue('complaintType')==='cashWithdrawal') ? 
        <div>
        <Form.Item label='Amount requested for withdrawal '>
          {getFieldDecorator('requestedAmount', {
            rules: [{ required: true, message: 'Please input requested amount!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Amount actually disbursed at ATM '>
          {getFieldDecorator('disbursedAmount', {
            rules: [{ required: true, message: 'Please input disbursed amount!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Amount to the account debited '>
          {getFieldDecorator('debitedAmount', {
            rules: [{ required: true, message: 'Please input debited amount!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Date Time of transaction '>
          {getFieldDecorator('transactionDate', {
            rules: [{ type: 'object', required: true, message: 'Please select Date!' }],
          })(<DatePicker />)}
        </Form.Item>
        <Form.Item label='Time of transaction'>
          {getFieldDecorator('transactionTime', {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
          })( <TimePicker use12Hours format="h:mm a"/>)}
        </Form.Item>
        </div> : null }
        
    
  
        { this.props.form.getFieldValue('complaintType')==='cardCaptured' ?
       <Form.Item label="Card Captured Details">
          {getFieldDecorator('cardCapturedComplaints', {
            rules: [{ required: true, message: '' }],
          })(<Input.TextArea rows={4}
          />)}
        </Form.Item>:
         null }
        
         { this.props.form.getFieldValue('complaintType')==='otherComplaint' ? 
          <Form.Item label="Other Complaints ">
          {getFieldDecorator('otherComplaint', {
            rules: [{ required: true, message: '' }],
          })(<Input.TextArea
            rows={4}
          />)}
        </Form.Item>: null }
        
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

Registercomplaint = Form.create({ name: "ATMComplaint" })(Registercomplaint)