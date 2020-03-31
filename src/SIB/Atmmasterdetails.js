import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Col, Input, InputNumber, Row, Select } from 'antd';
import "antd/dist/antd.css";

export default class Atmmasterdetails extends Component {
    render() {
        
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Country" >
                        {getFieldDecorator('country')(<Select disabled={true}>
                                <Select.Option value="1" >India</Select.Option>
                                <Select.Option value="2">US</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="State">
                        {getFieldDecorator('state')(<Select disabled={true}>
                                <Select.Option value="1">Maharashtra</Select.Option>
                                <Select.Option value="2">Delhi</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="City">
                        {getFieldDecorator('city')(<Select disabled={true}>
                                <Select.Option value="1">Mumbai</Select.Option>
                                <Select.Option value="2">Pune</Select.Option>
                                <Select.Option value="3">Nashik</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Branch Name">
                        {getFieldDecorator('branchName')(<Select disabled={true}>
                                <Select.Option value="1">Salaried</Select.Option>
                                <Select.Option value="2">Self Employed</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Machine Make">
                        {getFieldDecorator('machineMake')(<Input disabled={true} />)} 
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="ATM Address">
                        {getFieldDecorator('atmAddress')(<Input disabled={true} />)} 
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="ATM Location">
                        {getFieldDecorator('atmLocation')(<Select disabled={true}>
                                <Select.Option value="1">Salaried</Select.Option>
                                <Select.Option value="2">Self Employed</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Custodian">
                        {getFieldDecorator('custodian')(<Select disabled={true}>
                                <Select.Option value="1">Engineer</Select.Option>
                                <Select.Option value="2">Architect</Select.Option>
                                <Select.Option value="3">Doctor</Select.Option>
                                <Select.Option value="4">Others</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Custodian Name">
                        {getFieldDecorator('custodianName')( <Input disabled={true} />)} 
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Email Id">
                        {getFieldDecorator('emailId')( <Input disabled={true} />)} 
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Custodian Mobile">
                        {getFieldDecorator('country')( <Input disabled={true} />)} 
                        </Form.Item>
                    </Col>
                </Row>


            </div>
        )
    }
}
