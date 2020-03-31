import { Col, Form, Input, Row, Select } from 'antd';
import React, { Component } from 'react';

export default class Identificationdetails extends Component {
    render() {
        return (
            <div>
                <Row gutter={[8]}>
                    <Col span={8} >
                        <Form.Item name="panNumber" label='PAN # :' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={8} >
                        <Form.Item name="electricityBillNumber" label='Electricity Bill # :' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item name="passportNumber" label='Passport # :' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        )
    }
}
