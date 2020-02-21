import React, { Component } from 'react'
import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import "antd/dist/antd.css";

export default class Comments extends Component {
    render() {
        return (
            <div>
                <Row gutter={[8,8]}>
                    <Col span={24} >
                        <Form.Item>
                            <Input />
                        </Form.Item>
                    </Col>
				</Row>
            </div>
        )
    }
}
