import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import './Search.css';
import { UpOutlined, DownOutlined } from '@ant-design/icons'

export default class Search extends Component {
    state = {
        expand: false,
    };

    // To generate mock Form.Item



    getFields() {
        const count = this.state.expand ? 10 : 6;
        const { getFieldDecorator } = this.props.form;
        const children = [];
        const field = ['CRN', 'Loan Number', 'First Name', 'Middle Name', 'Last Name', 'PAN #', 'Aadhar #', 'Mobile #', 'Email', 'Date of Birth'];
        for (let i = 0; i < field.length; i++) {
            children.push(
                <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
                    <Form.Item label={`${field[i]}`}>
                        {getFieldDecorator(`field-${i}`, {
                            rules: [
                                {
                                    required: true,
                                    message: `Input ${field[i]}`,
                                },
                            ],
                        })(<Input placeholder="" />)}
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    }

    handleSearch = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    };

    handleReset = () => {
        this.props.form.resetFields();
    };

    toggle = () => {
        const { expand } = this.state;
        this.setState({ expand: !expand });
    };

    render() {
        return (
            <div>
                <div>
                    <Form className="ant-advanced-search-form" layout="vertical" onSubmit={this.handleSearch}>
                        <Row gutter={24}>{this.getFields()}</Row>
                        <Row>
                            <Col span={24} style={{ textAlign: 'right' }}>
                                <Button type="primary" htmlType="submit">
                                    Search
                </Button>
                                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                                    Clear
                </Button>
                                <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                                    Collapse {this.state.expand ? (<UpOutlined />) : (<DownOutlined />)}
                                </a>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className="search-result-list">Search Result List</div>
            </div>


        );
    }
}


Search = Form.create({ name: "searchForm" })(Search)