import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import {
  Button,
  DatePicker,
  Input,
  Radio,
  Select,
  TimePicker,
  InputNumber,
  message,
  PageHeader,
} from 'antd';
import "antd/dist/antd.css";
import React, { Component } from 'react';
import Axios from 'axios';

const { Option } = Select;

export default class Registercomplaint extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // if (!err) {
        const requestParam = { ...values };
        delete requestParam.countryCode;
        console.log(JSON.stringify(requestParam));
        message.config({ top: 100, });
        message.loading('Registering Complaint..',60).then(
            Axios.post(`/rest/bpm/wle/v1/service/SIBATMP@Launch and Insert?action=start&params=` + JSON.stringify(requestParam) + `&createTask=false&parts=all`, {
              auth: {
                username: 'naveen',
                password: 'Password123'
              }
            })
              .then(res => {
                console.log(res.data.data.data.caseIdentifier);
                message.destroy();
                message.success(`Complaint CRN: ${res.data.data.data.caseIdentifier.split("_").pop()}  Registered Successfully!`, 5);
                // message.success({});
                this.props.form.resetFields()
              })
              .catch(function (error) {
                message.destroy();
                message.error('Complaint could not be registered.Please try again!', 5);
              })
          )
      // }
    });
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
      <div>
      
    <br></br>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item label='Bank Name'>
          {getFieldDecorator('bankName', {
            rules: [{ required: true, message: 'Please input your branch name...', whitespace: true }],
            initialValue: 'South Indian Bank',
          })(<Input disabled={true} />)}
        </Form.Item>

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
          {getFieldDecorator('accountNo', {
            rules: [{ required: true, message: 'Please input account number...', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Debit Card/ATM Card No.'>
          {getFieldDecorator('debitCardNo', {
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
          {getFieldDecorator('mobileNo', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label='ATM ID/Location, if ID is not available'>
          {getFieldDecorator('atmId', {
            rules: [{ required: true, message: 'Please input ATM ID or Location...', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label='Name of the ATM Bank'>
          {getFieldDecorator('atmBank', {
            rules: [{ required: true, message: 'Please input ATM bank name...', whitespace: true }],
          })(<Input />)}
        </Form.Item>

        <Form.Item label="Nature of the Complaint">
          {getFieldDecorator('complaintType', {
            initialValue: 'cashWithdrawal'
          })(
            <Radio.Group >
              <Radio value="cashWithdrawal">Cash withdrawal </Radio>
              <Radio value="cardCaptured">Card Captured </Radio>
              <Radio value="otherComplaint">Other Complaint </Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        {(this.props.form.getFieldValue('complaintType') === undefined || this.props.form.getFieldValue('complaintType') === 'cashWithdrawal') ?
          <div>
            <Form.Item label='Amount requested for withdrawal '>
              {getFieldDecorator('amtRequested', {
                rules: [{ required: true, message: 'Please input requested amount!' }],
              })(<InputNumber style={{ width: '100%' }} />)}
            </Form.Item>
            <Form.Item label='Amount actually disbursed at ATM '>
              {getFieldDecorator('amtDisbursed', {
                rules: [{ required: true, message: 'Please input disbursed amount!' }],
              })(<InputNumber style={{ width: '100%' }} />)}
            </Form.Item>
            <Form.Item label='Amount to the account debited '>
              {getFieldDecorator('amtDebited', {
                rules: [{ required: true, message: 'Please input debited amount!' }],
              })(<InputNumber style={{ width: '100%' }} />)}
            </Form.Item>
            <Form.Item label='Date Time of transaction '>
              {getFieldDecorator('txnDate', {
                rules: [{ type: 'object', required: true, message: 'Please select Date!' }],
              })(<DatePicker showTime format="DD/MM/YYYY hh:mm A" use12Hours/>)}
            </Form.Item>
          </div> : null}
        {this.props.form.getFieldValue('complaintType') === 'cardCaptured' ?
          <Form.Item label="Card Captured Details">
            {getFieldDecorator('cardCaptured', {
              rules: [{ required: true, message: '' }],
            })(<Input.TextArea rows={4}
            />)}
          </Form.Item> :
          null}

        {this.props.form.getFieldValue('complaintType') === 'otherComplaint' ?
          <Form.Item label="Other Complaints ">
            {getFieldDecorator('otherComplaints', {
              rules: [{ required: true, message: '' }],
            })(<Input.TextArea
              rows={4}
            />)}
          </Form.Item> : null}

        <Form.Item wrapperCol={{ span: 1, offset: 12 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

Registercomplaint = Form.create({ name: "ATMComplaint" })(Registercomplaint)