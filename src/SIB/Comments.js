import React, { Component } from 'react'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Col, Input, InputNumber, Row, Select, Button } from 'antd';
import "antd/dist/antd.css";

export default class Comments extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={24} >

                        <Form.Item label='Vendor Comments'>
                            {getFieldDecorator('vendorComments', {
                                rules: [{ required: true, message: 'Please input your comments...', whitespace: true }],
                            })(<Input.TextArea />)}
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 12, offset: 22 }}>
                            <Button type="primary" htmlType="submit" shape="round">
                                Submit
                        </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </div>
        )
    }
}
