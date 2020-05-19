import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Col, Input, Row, Select } from 'antd';
import React, { Component }  from 'react';


export default class Identificationdetails extends Component {
    
    render() {
        return (
            <div>
			<Form>
                <Row gutter={[8]}>
                    <Col span={8} >
                        <Form.Item  name="panNumber" label='PAN No :' rules={[{ required: true }]}>
                            <Input defaultValue="ATZPM0882C"/>
                        </Form.Item>
                    </Col>

                    <Col span={8} >
                        <Form.Item name="AadharNo" label='Aadhar No  :' rules={[{ required: true }]}>
                            <Input defaultValue="1257479999"/>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item name="passportNumber" label='Passport No :' rules={[{ required: true }]}>
                            <Input defaultValue= "J1224212"/>
                        </Form.Item>
                    </Col>
                </Row>
			</Form>
            </div>
        )
    }
}
