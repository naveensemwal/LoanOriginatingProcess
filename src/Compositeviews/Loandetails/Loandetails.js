import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { Component } from 'react';



export default class Loandetails extends Component {
    render() {
        return (
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Loan Type :">
                            <Select defaultValue="personalLoan">
                                <Select.Option value="homeLoan">Home Loan</Select.Option>
                                <Select.Option value="autoLoan">Auto Loan</Select.Option>
                                <Select.Option value="personalLoan">Personal Loan</Select.Option>
                                <Select.Option value="mortgageLoan">Mortgage Loan</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Interest Type :">
                            <Select defaultValue="scheme2">
                                <Select.Option value="scheme1">Fixed</Select.Option>
                                <Select.Option value="scheme2">Floating</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="EMI :">
                            <InputNumber defaultValue="2000" style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 8]}>

                    <Col span={8} >
                        <Form.Item label="Interest Rate :">
                            <Input defaultValue="9"suffix="%" />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Total Expected Loan Amount :">
                            <Input defaultValue="2500000" prefix="₹" suffix="INR" />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Tenure in Months :">
                            <InputNumber defaultValue="24" style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 8]}>

                    <Col span={8} >
                        <Form.Item label="Scheme :">
                            <Select defaultValue="2">
                                <Select.Option value="1">No Income Proof Program</Select.Option>
                                <Select.Option value="2">Gross Profit</Select.Option>
                                <Select.Option value="3">Pure Rental Income Program</Select.Option>
                                <Select.Option value="4">Banking Program</Select.Option>
                                <Select.Option value="5">Salaried Program</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Loan Purpose :">
                            <Select defaultValue="2">
                                <Select.Option value="1">Purchase Of Vacant Plot</Select.Option>
                                <Select.Option value="2">Business Expansion </Select.Option>
                                <Select.Option value="3">Purchase Of Property</Select.Option>
                                <Select.Option value="4">Applying New Contract/Tender</Select.Option>
                                <Select.Option value="5">Purchase Of Property For Self Use</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        )
    }
}
