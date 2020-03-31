import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Col, Input, InputNumber, Row, Select } from 'antd';
import React, { Component } from 'react';



export default class Employmentdetails extends Component {
    render() {
        return (
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Customer Category :">
                            <Select>
                                <Select.Option value="1">Salaried</Select.Option>
                                <Select.Option value="2">Self Employed</Select.Option> 
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Current Employer Name :">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Nature of Business :">
                            <Select>
                                <Select.Option value="1">Engineer</Select.Option>
                                <Select.Option value="2">Architect</Select.Option>
                                <Select.Option value="3">Doctor</Select.Option>
                                <Select.Option value="4">Others</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>                   
                </Row>
                <Row gutter={[8, 8]}>
                <Col span={8} >
                        <Form.Item label="Declared Net Monthly income :">
                            <Input prefix="₹" suffix="INR" />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Years in Present Job :">
                            <InputNumber style={{width:'100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Designation :">
                            <Select>
                                <Select.Option value="1">CEO</Select.Option>
                                <Select.Option value="2">Chairman</Select.Option>
                                <Select.Option value="3">Director</Select.Option>
                                <Select.Option value="4">Consultant</Select.Option>
                                <Select.Option value="5">Senior Manager</Select.Option>
                                <Select.Option value="6">Manager</Select.Option>
                                <Select.Option value="7">Trainee</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>                    
                </Row>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Business Name :">
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Gross Turnover :">
                            <InputNumber style={{width:'100%'}}/>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Date of Inception :">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        )
    }
}
