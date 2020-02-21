import React, { Component } from 'react'
import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import "antd/dist/antd.css";

export default class IssueDetails extends Component {
    render() {
        return (
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={12} >
                        <Form.Item label="Complaints Category" >
                        
                            <Select disabled= {true}>
                                <Select.Option value="1">India</Select.Option>
                                <Select.Option value="2">US</Select.Option> 
                            </Select>
                        </Form.Item>
                    </Col>
					<Col span={12} >
                        <Form.Item label="Nature of Complaint">
                            <Select disabled= {true}>
                                <Select.Option value="1">Maharashtra</Select.Option>
                                <Select.Option value="2">Delhi</Select.Option> 
                            </Select>
                        </Form.Item>
                    </Col>
				</Row>
			
				<Row gutter={[8, 8]}>
                    <Col span={6} >
                        <Form.Item label="Txn Amount">
                            <Select disabled= {true}>
                                <Select.Option value="1">India</Select.Option>
                                <Select.Option value="2">US</Select.Option> 
                            </Select>
                        </Form.Item>
                    </Col>
					<Col span={6} >
                        <Form.Item label="Txn Reference No">
                            <Select disabled= {true}>
                                <Select.Option value="1">Maharashtra</Select.Option>
                                <Select.Option value="2">Delhi</Select.Option> 
                            </Select>
                        </Form.Item>
                    </Col>
					<Col span={6} >
                        <Form.Item label="Dispensed Amt">
                            <Select disabled= {true}>
                                <Select.Option value="1">Maharashtra</Select.Option>
                                <Select.Option value="2">Delhi</Select.Option> 
                            </Select>
                        </Form.Item>
                    </Col>
					<Col span={6} >
                        <Form.Item label="Txn Date">
                            <Select disabled= {true}>
                                <Select.Option value="1">Maharashtra</Select.Option>
                                <Select.Option value="2">Delhi</Select.Option> 
                            </Select>
                        </Form.Item>
                    </Col>
				</Row>
                <Row gutter={[8, 8]}>
                    <Col span={24} >
                        <Form.Item label="Issue Description">
                        <Input disabled= {true} />
                        </Form.Item>
                    </Col>
					
				</Row>
            </div>
        )
    }
}
