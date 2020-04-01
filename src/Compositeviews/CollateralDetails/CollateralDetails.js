import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { Component } from 'react';



export default class CollateralDetails extends Component {
    render() {
        return (
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Property Type :">
                            <Select>
							
							    <Select.Option value="1">FLAT</Select.Option>
                                <Select.Option value="2">HOSPITAL</Select.Option>
                                <Select.Option value="3">HOTEL</Select.Option>
                                <Select.Option value="4">INDUSTRIAL</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Property Description :">
                            <Select>
                                <Select.Option value="1">FREEHOLD</Select.Option>
                                <Select.Option value="2">LEASEHOLD</Select.Option>
								<Select.Option value="3">PLOT</Select.Option>
								<Select.Option value="4">READY</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Primary Property Value :">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
				<Row gutter={[8, 8]}>

                    <Col span={8} >
                        <Form.Item label="Total Area:">
                            <Input suffix="%" />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Measurement Unit :">
                            <Select>
                            <Select.Option value="1">Ft</Select.Option>
                            <Select.Option value="2">Mtr</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Value :">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 8]}>

                    <Col span={8} >
                        <Form.Item label="Property Cost Financed :">
                            <Input suffix="%" />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Age Of Property :">
                            <Input prefix="₹" suffix="INR" />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Residual Age of the Property :">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 8]}>

                    <Col span={8} >
                        <Form.Item label="Current Usage :">
                            <Select>
                                <Select.Option value="1">SCHOOL/COLLEGE</Select.Option>
                                <Select.Option value="2">INDUSTRIAL PLOT</Select.Option>
                                <Select.Option value="3">COMMERCIAL PLOT</Select.Option>
                                <Select.Option value="4">SELF OCCUPIED INDUSTRIAL PROPERTY</Select.Option>
                                <Select.Option value="5">Hospital-Nursing Home</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Property Valuation Type :">
                            <Select>
                                <Select.Option value="1">APPRAISAL</Select.Option>
                                <Select.Option value="2">ESTIMATION</Select.Option>
                                <Select.Option value="3">VALUATION AWAITED</Select.Option>
                                
                            </Select>
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item label="Remedial Age">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
				<Row gutter={[8, 8]}>
					<Col span={8} >
                        <Form.Item label="Address Line 1">
                            <Input style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
				    <Col span={8} >
                        <Form.Item label="Address Line 2">
                            <Input style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
				    <Col span={8} >
                        <Form.Item label="Address Line 3">
                            <Input style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
				
				</Row>
				<Row gutter={[8, 8]}>
					<Col span={8} >
                        <Form.Item label="Country :">
                            <Select>
                                <Select.Option value="1">India</Select.Option>
                                <Select.Option value="2">USA</Select.Option>
                                <Select.Option value="3">Germany</Select.Option>
                                
                            </Select>
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item label="State :">
                            <Select>
                                <Select.Option value="1">Maharashtra</Select.Option>
                                <Select.Option value="2">Karnataka</Select.Option>
                                <Select.Option value="3">KERALA</Select.Option>
                                
                            </Select>
                        </Form.Item>
                    </Col>
					<Col span={8} >
                        <Form.Item label="City :">
                            <Select>
                                <Select.Option value="1">Mumbai</Select.Option>
                                <Select.Option value="2">Pune</Select.Option>
                                <Select.Option value="3">Nagpur</Select.Option>
                                
                            </Select>
                        </Form.Item>
                    </Col>
				
				</Row>
				<Row gutter={[8, 8]}>
					<Col span={8} >
				        <Form.Item label="Pincode">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
				
					</Col>
					<Col span={8} >
                        <Form.Item label="Property Usage :">
                            <Select>
                                <Select.Option value="1">RENTED</Select.Option>
                                <Select.Option value="2">SELF OCCUPIED</Select.Option>
                                <Select.Option value="3">VACANT</Select.Option>
                                
                            </Select>
                        </Form.Item>
					</Col>
				</Row>
				
            </div>
        )
    }
}
