import { Col, Form, Input, InputNumber, Row, Select, DatePicker, Table, Tag  } from 'antd';
import React, { Component } from 'react';

const onChange = (date,dateString) => {
    console.log(date,dateString);

}
const columns = [
    {
        title:'Installment Number',
        dateIndex:'InstallmentNumber',
        key:'Installment Number',
        render : text => <a>{text}</a>
    },
    {
        title:'Due Date',
        dateIndex:'DueDate',
        key:'Due Date',
        render : text => <a>{text}</a>
    },
    {
        title:'Opening Principal (Rs.)',
        dateIndex:'OpeningPrincipalRs',
        key:'Opening Principal (Rs.)',
       
    },
    {
        title:'InstallmentAmountRs',
        dateIndex:'InstallmentAmountRs',
        key:'Installment Amount (Rs.)',
       
    },
    {
        title:'Principal Component of Installment (Rs.)',
        dateIndex:'PrincipalComponentofInstallmentRs',
        key:'Principal Component of Installment (Rs.)',
        
    },
    {
        title:'Interes',
        dateIndex:'DueDate',
        key:'Due Date',
        render : text => <a>{text}</a>
    },
];
const data=[
    {
        key:'1',
        InstallmentNumber:'12',
        DueDate:'2feb',
        OpeningPrincipalRs:"aa",
        InstallmentAmountRs:'120',
        PrincipalComponentofInstallmentRs:"hh",
        DueDate:'10-Feb-2019',

    }
]
export default class DisbursementDetails extends Component {
    render() {
        return (
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Disbursement Type">
                            <Select>
                                <Select.Option value="homeLoan">Single</Select.Option>
                                <Select.Option value="autoLoan">Multiple</Select.Option>                             
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Final documentation status ">
                            <Select>
                                <Select.Option value="scheme1">Documentation Complete</Select.Option>
                                <Select.Option value="scheme2">Customer’s Signature Pending</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="No of Tranches  :">
                            <InputNumber style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={[8, 8]}>

                    <Col span={8} >
                        <Form.Item label="Pre EMI ">
                            <Input suffix="%" />
                        </Form.Item>
                    </Col>
                    <Col span={8} >
                        <Form.Item label="Expected disbursement date ">
                           <DatePicker onchange={onChange} style={{width:'100%'}}></DatePicker>
                        </Form.Item>
                    </Col>
                    
                </Row>
                

                <table columns={columns} dataSource={data} ></table>
            </div>
        )
    }
}
