import React, { Component } from 'react'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Col, Input, InputNumber, Row, Select, DatePicker } from 'antd';
import "antd/dist/antd.css";

export default class IssueDetails extends Component {
    render() {
    
		 const { getFieldDecorator } = this.props.form;
        return (
            <div>
                 <Row gutter={[8, 8]}>
                    <Col span={12} >
                    <Form.Item label="Complaint Category" >
                        {getFieldDecorator('ComplaintCategory')(<Select disabled={true}>
                                <Select.Option value="1" >India</Select.Option>
                                <Select.Option value="2">US</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
					<Col span={12} >
                        <Form.Item label="Nature of Complaint">
                            {getFieldDecorator('NatureOfComplaint')(<Select disabled={true}>
                                <Select.Option value="1" >India</Select.Option>
                                <Select.Option value="2">US</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
				</Row>
			
				<Row gutter={[8, 8]}>
                    <Col span={6} >
                        <Form.Item label="Txn Amount">
                            {getFieldDecorator('TxnAmount')(<Select disabled={true}>
                                <Select.Option value="1" >India</Select.Option>
                                <Select.Option value="2">US</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
					<Col span={6} >
                        <Form.Item label="Txn Reference No">
                            {getFieldDecorator('TxnReferenceNo')(<Select disabled={true}>
                                <Select.Option value="1" >India</Select.Option>
                                <Select.Option value="2">US</Select.Option>
                            </Select>)} 
                        </Form.Item>
                    </Col>
					<Col span={6} >
                        <Form.Item label="Dispensed Amt">
                            {getFieldDecorator('DispensedAmt')(<Select disabled={true}>
                                <Select.Option value="1" >India</Select.Option>
                                <Select.Option value="2">US</Select.Option>
                            </Select>)}
                        </Form.Item>
                    </Col>
					<Col span={6} >
                        <Form.Item label="Txn Date">
                        {getFieldDecorator('TxnDate')(<DatePicker  style ={{width:'100%'}}disabled={true}/>)}  
                        
                        </Form.Item>
                    </Col>
				</Row>
                <Row gutter={[8, 8]}>
                    <Col span={24} >
                        <Form.Item label="Issue Description">
                        {getFieldDecorator('IssueDescription')(<Input disabled={true} />)} 
                        </Form.Item>
                    </Col>
					
				</Row>
            </div>
        )
    }
}
