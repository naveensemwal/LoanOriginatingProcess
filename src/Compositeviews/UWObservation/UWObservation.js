import React, { Component } from 'react';
import { Col, DatePicker, Form, Input, Row, Select, InputNumber } from 'antd';
import "antd/dist/antd.css";

const { TextArea } = Input;

export default class UWObservation extends Component {
    

    render() {
        return (
            <div>
                <Row gutter={[8, 8]}>
                    
                    <Col span={8} >
                        <Form.Item name="Elgibility" label='Elgibility:' rules={[{ required: true }]}>
                            <Input disabled />
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item name="FOIR based Elgibility" label='FOIR based Elgibility:' rules={[{ required: true }]}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item name="ABB based Elgibility" label='ABB based Elgibility:' rules={[{ required: true }]}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>
                    
                </Row>
				<Row gutter={[8, 8]}>
				     <Col span={8} >
                        <Form.Item name="FOIR%" label='FOIR% :' rules={[{ required: true }]}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item name="LTV % for MV" label='LTV % for MV :' rules={[{ required: true }]}>
                            <Input disabled/>
                        </Form.Item>
                    </Col>

					<Col span={8} >
                        <Form.Item name="LTV % for AV" label='LTV % for AV :' rules={[{ required: true }]}>
                            <Input disabled/>
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
