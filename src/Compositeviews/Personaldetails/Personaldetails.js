import React, { Component } from 'react';
import { Col, DatePicker, Input, Row, Select, InputNumber,Form} from 'antd';
import "antd/dist/antd.css";
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY';
export default class Personaldetails extends Component {
    render() {
        return (
            <div>
                <Row gutter={[8]}>
                    <Col span={8} >
                        <Form.Item label="Title :">
                            <Select defaultValue="mr">
                                <Select.Option value="mr">Mr.</Select.Option>
                                <Select.Option value="ms">Ms.</Select.Option>
                                <Select.Option value="mrs">Mrs.</Select.Option>
                                <Select.Option value="dr">Dr.</Select.Option>
                                <Select.Option value="other">Other</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col span={8} >
                        <Form.Item name="firstName" label='First Name :' rules={[{ required: true }]}>
                            <Input defaultValue="Varghese" />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item name="middleName" label='Middle Name :' rules={[{ required: true }]}>
                            <Input defaultValue="Parkadavil" />
                        </Form.Item>
                    </Col>

                </Row>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item name="lastName" label='Last Name :' rules={[{ required: true }]}>
                            <Input defaultValue="Mathew"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Gender :">
                            <Select defaultValue="male">
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="female">Female</Select.Option>
                                <Select.Option value="transgender">Gender</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Date of Birth:">
                            <DatePicker defaultValue={moment('03/03/1975', dateFormat)} format={dateFormat} placeholder='Select date of Birth' style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item name="age" label='Age :' rules={[{ required: true }]} >
                            <Input defaultValue="45" style={{ width: '100%' }}  />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Marital Status :">
                            <Select defaultValue="married">
                                <Select.Option value="married">Married</Select.Option>
                                <Select.Option value="divorced">Divorced</Select.Option>
                                <Select.Option value="single">Single</Select.Option>
                                <Select.Option value="livein">Live In</Select.Option>
                                <Select.Option value="widow">Widow</Select.Option>
                                <Select.Option value="widower">Widower</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item name="fatherName" label="Father's Name :" rules={[{ required: true }]}>
                            <Input defaultValue="Parkadavil"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item name="motherName" label="Mother's Name :" rules={[{ required: true }]}>
                            <Input defaultValue="Mathew"/>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        )
    }
}
