import React, { Component } from "react";
import { Form, Input, Select, Button } from "antd";
const { Option } = Select;
const onFinish = values => {
  console.log("Received values of form: ", values);
};

export default class CustFinancialDetails extends Component {
  render() {

    return (
      <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
      >
        {/* <Form.Item label="Username">
          <Form.Item
            name="Interest From FD/Dividend"
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
        </Form.Item> */}
       
        <Form.Item
          label="Assessment Year"
          labelCol={{span:4}}
          wrapperCol={{span:20}}
         
        >
         
          <Form.Item
          
            name="current Assessment Year (A.Y.)"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
            
              marginRight: 8
            }}
          >
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
         
            name="Previous Assessment Year (A.Y.)"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
           
              marginRight: 8
            }}
          >
            <Input placeholder="" />
          </Form.Item>
     
        </Form.Item>
     



        <Form.Item
          label="Date Of Filling ITR"
          labelCol={{span:4}}
          wrapperCol={{span:20}}
         
        >
          <Form.Item
            name="Date Of Filling ITR<sup>*</sup>"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              
              marginRight: 8
            }}
          >
            <Input placeholder="Date Of Filling ITR" />
          </Form.Item>
          <Form.Item
            name="Date Of Filling ITR<sup>*</sup>"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
            
              marginRight: 8
            }}
          >
            <Input placeholder="Date Of Filling ITR" />
          </Form.Item>
          <Form.Item
            name="Date Of Filling ITR<sup>*</sup>"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
            
              marginRight: 8
            }}
          >
            <Input placeholder="Date Of Filling ITR" />
          </Form.Item>
          <Form.Item
            name="Date Of Filling ITR<sup>*</sup>"
            rules={[{ required: true }]}
            style={{ display: "inline-block"}}
          >
            <Input placeholder="Date Of Filling ITR" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Rental Income" style={{ marginBottom: 0 }}>
          <Form.Item
            name=""
            style={{
              display: "inline-block",
              width: "calc(50% - 5px)",
              marginRight: 8
            }}
            rules={[{ required: true, message: "Rental Income" }]}
          >
            <Input />
          </Form.Item>
        </Form.Item>

       
  
        <Form.Item
          label="Mode of Payment" rules={[{required:true,message:'Mode of Payment is required'}]}
          style={{ marginBottom: 0 }}
        >
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 5px)",
              marginRight: 8
            }}
          >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          </Form.Item>
        
        </Form.Item>


        <Form.Item
          label="Interest From FD/Dividend"
          style={{ marginBottom: 0 }}
        >
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 5px)",
              marginRight: 8
            }}
          >
            <Input placeholder="Input birth year" />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: "calc(50% - 5px)" }}
          >
            <Input placeholder="Input birth month" />
          </Form.Item>
        </Form.Item>

        <Form.Item
          label="Agricultural Income"
          style={{ marginBottom: 0 }}
        >
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 5px)",
              marginRight: 8
            }}
          >
            <Input placeholder="Input birth year" />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: "calc(50% - 5px)" }}
          >
            <Input placeholder="Input birth month" />
          </Form.Item>
        </Form.Item>
        <Form.Item
          label="Gross Turnover"
          style={{ marginBottom: 0 }}
        >
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 5px)",
              marginRight: 8
            }}
          >
            <Input placeholder="Input birth year" />
          </Form.Item>
          <Form.Item
            name="month"
            rules={[{ required: true }]}
            style={{ display: "inline-block", width: "calc(50% - 5px)" }}
          >
            <Input placeholder="Input birth month" />
          </Form.Item>
        </Form.Item>
      
        <Form.Item
          label="Interest Expense"
          style={{ marginBottom: 0 }}
        >
          <Form.Item
            name="year"
            rules={[{ required: true }]}
            style={{
              display: "inline-block",
              width: "calc(50% - 5px)",
              marginRight: 8
            }}
          >
            <Input placeholder="Input birth year" />
          </Form.Item>
        
        </Form.Item>
            </Form> 
    );
  }
};