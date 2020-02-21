import React, { Component } from 'react';
import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import "antd/dist/antd.css";

export default class Atmmasterdetails extends Component {
    render() {
        return (
            <div>


                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Country" >
                            <Select disabled={true}>
                                <Select.Option value="1" >India</Select.Option>
                                <Select.Option value="2">US</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="State">
                            <Select disabled={true}>
                                <Select.Option value="1">Maharashtra</Select.Option>
                                <Select.Option value="2">Delhi</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="City">
                            <Select disabled={true}>
                                <Select.Option value="1">Mumbai</Select.Option>
                                <Select.Option value="2">Pune</Select.Option>
                                <Select.Option value="3">Nashik</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Branch Name">
                            <Select disabled={true}>
                                <Select.Option value="1">Salaried</Select.Option>
                                <Select.Option value="2">Self Employed</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Machine Make">
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="ATM Address">
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="ATM Location">
                            <Select disabled={true}>
                                <Select.Option value="1">Salaried</Select.Option>
                                <Select.Option value="2">Self Employed</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Custodian">
                            <Select disabled={true}>
                                <Select.Option value="1">Engineer</Select.Option>
                                <Select.Option value="2">Architect</Select.Option>
                                <Select.Option value="3">Doctor</Select.Option>
                                <Select.Option value="4">Others</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Custodian Name">
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Email Id">
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Custodian Mobile">
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                </Row>


            </div>
        )
    }
}
