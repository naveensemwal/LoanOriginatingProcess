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
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item label="Username">
          <Form.Item
            name="Interest From FD/Dividend"
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input style={{ width: 160 }} placeholder="Please input" />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Address">
          <Input.Group compact>
            <Form.Item
              name={["address", "province"]}
              rules={[{ required: true, message: "Province is required" }]}
            >
              <Select placeholder="Select province">
                <Option value="Zhejiang">Zhejiang</Option>
                <Option value="Jiangsu">Jiangsu</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["address", "street"]}
              rules={[{ required: true, message: "Street is required" }]}
            >
              <Input style={{ width: "50%" }} placeholder="Input street" />
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item label="" style={{ marginBottom: 0 }}>
          <Form.Item
            name="Date of Filling ITR"
            rules={[
              { required: true, message: "Date of Filling ITR is mendatory" }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Financial Audited"
            rules={[
              { required: true, message: "Financial Audited is mendatory" }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Date of Filling ITR"
            rules={[
              { required: true, message: "Date of Filling ITR is mendatory" }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Financial Audited"
            rules={[
              { required: true, message: "Financial Audited is mendatory" }
            ]}
          >
            <Input />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Rental Income" style={{ marginBottom: 0 }}>
          <Form.Item
            name=""
            rules={[{ required: true, message: "Rental Income" }]}
          >
            <Input />
          </Form.Item>
        </Form.Item>

        <Form.Item
          name={["address", "province"]}
          rules={[{ required: true, message: "Province is required" }]}
        >
          <Select placeholder="Select province">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Mode of Payment" style={{ marginBottom: 0 }}>
          <Form.Item
            name=""
            rules={[{ required: true, message: "Mode of Payment is required" }]}
          >
            {/* <Select Placeholder="Mode of Payment">
            <Option Value='Debit'>Debit</Option>
            <Option Value='Credit'>Credit</Option>
        </Select> */}
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