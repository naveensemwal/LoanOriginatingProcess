import { Col, DatePicker, Input, Row } from 'antd';
import "antd/dist/antd.css";
import React, { Component } from 'react';
import './Customerprofile.css';
export default class Customerprofile extends Component {
    render() {
        return (
            <div >
                <Row type='flex'>
                    <Col span={8} >
                    <div className='customer one' style={{ textAlign: 'center'}}>
                    </div>
                    <h5 style={{ textAlign: 'center'}}>John Kevin Doe </h5>
                    </Col>
                    <Col span={16}>
                        <Row gutter={[8,8]} type='flex'>
                            <Col span={6}>
                            <label>First Name:</label>
                            <Input disabled={true} id='firstName'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Middle Name:</label>
                            <Input disabled={true} id='middleName'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Last Name:</label>
                            <Input disabled={true} id='lastName'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Customer ID</label>
                            <Input disabled={true} id='lastName'></Input>
                            </Col>
                        </Row>
                        <Row gutter={[8,8]} type='flex'>
                            <Col span={6}>
                            <label>PAN#:</label>
                            <Input disabled={true} name='First Name'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Mobile#:</label>
                            <Input disabled={true} name='First Name'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Email ID:</label>
                            <Input disabled={true} name='First Name'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Date of Birth</label>
                            <DatePicker disabled={true} name='First Name' style={{width:'100%'}}></DatePicker>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                </Row>
            </div>
        )
    }
}
