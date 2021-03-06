import { Col, DatePicker, Input, Row } from 'antd';
import "antd/dist/antd.css";
import React, { Component } from 'react';
import './Customerprofile.css';
import moment from 'moment';
export default class Customerprofile extends Component {
    render() {
        return (
            <div >
                <Row type='flex'>
                    <Col span={8} >
                    <div className='customer one' style={{ textAlign: 'center'}}>
                    </div>
                    <h5 style={{ textAlign: 'center'}}>Varghese Mathew</h5>
                    </Col>
                    <Col span={16}>
                        <Row gutter={[8,8]} type='flex'>
                            <Col span={6}>
                            <label>First Name:</label>
                            <Input disabled={true} id='firstName' value='Varghese'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Middle Name:</label>
                            <Input disabled={true} id='middleName' value='Parkadavil'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Last Name:</label>
                            <Input disabled={true} id='lastName' value='Mathew'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Customer ID</label>
                            <Input disabled={true} id='lastName' value='123456'></Input>
                            </Col>
                        </Row>
                        <Row gutter={[8,8]} type='flex'>
                            <Col span={6}>
                            <label>PAN#:</label>
                            <Input disabled={true} name='First Name' value='ATZPM0882C'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Mobile#:</label>
                            <Input disabled={true} name='First Name' value='9970692927'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Email ID:</label>
                            <Input disabled={true} name='First Name' value='Mathew.0303@gmail.com'></Input>
                            </Col>
                            <Col span={6}>
                            <label>Date of Birth</label>
                            <DatePicker disabled={true} name='First Name' style={{width:'100%'}} defaultValue={moment('03/03/1975', 'DD/MM/YYYY')} ></DatePicker>
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
