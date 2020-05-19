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
                <Row gutter={[8, 8]}>
                    
                    <Col span={8} >
                        <Form.Item name="Eligibility" label='Eligibility:' rules={[{ required: true }]}>
                            <Input defaultValue="2500000" disabled />
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item name="FOIR based Eligibility" label='FOIR based Eligibility:' rules={[{ required: true }]}>
                            <Input defaultValue="2354322" disabled/>
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item name="ABB based Eligibility" label='ABB based Eligibility:' rules={[{ required: true }]}>
                            <Input defaultValue="2238478" disabled/>
                        </Form.Item>
                    </Col>
                    
                </Row>
				<Row gutter={[8, 8]}>
				     <Col span={8} >
                        <Form.Item name="FOIR%" label='FOIR% :' rules={[{ required: true }]}>
                            <Input defaultValue="33.95" disabled/>
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item name="LTV % for MV" label='LTV % for MV :' rules={[{ required: true }]}>
                            <Input defaultValue="68.47" disabled/>
                        </Form.Item>
                    </Col>

					<Col span={8} >
                        <Form.Item name="LTV % for AV" label='LTV % for AV :' rules={[{ required: true }]}>
                            <Input defaultValue="56.76" disabled/>
                        </Form.Item>
                    </Col>

				
				
				
				</Row>
                <Row gutter={[8, 8]}>

                <Col span={24} >
                        <Form.Item name="Observation" label='Observation :' rules={[{ required: true }]}>
                        <TextArea rows={8} />
                        </Form.Item>
                    </Col>


                </Row>
            </div>
        )
    }
}
