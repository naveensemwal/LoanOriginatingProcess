import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Col, DatePicker, Input, Row, Select, InputNumber } from 'antd';
import "antd/dist/antd.css";

const { TextArea } = Input;

export default class UWObservation extends Component {
    

    render() {
        return (
            <div>
                <Row gutter={[8]}>
                    
                    <Col span={12} >
                        <Form.Item name="Elgibility" label='Elgibility:' rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={12} >
                        <Form.Item name="Observation" label='Observation :' rules={[{ required: true }]}>
                        <TextArea rows={8} />
                        </Form.Item>
                    </Col>
                </Row>
                 
            </div>
        )
    }
}
