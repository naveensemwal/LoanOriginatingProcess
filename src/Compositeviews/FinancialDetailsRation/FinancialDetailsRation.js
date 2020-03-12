import React, { Component } from 'react';
import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
const layout={
    labelCol:{
        span:8

    },
    wrapperCol:{
        span:16
    },
};
const validateMessages={
    required:'This Field is required',
    types:{
        email: 'Not a validate email!',
        number: 'Not a validate number!',
    },
    number:{
        range:'Must be between ${min} and ${max}',
    },
};

const onFinish = values => {
    console.log(values);
  };


export default class FinancialDetailsRation extends  Component{
 
    render(){
        return(
    <div>        
<Row gutter={[12, 12]}>

<Col span={12} >
    <Form.Item label="Unsecured to Secured Ratio">
        <Input style={{width: '100%'}} />
    </Form.Item>
</Col>
<Col span={12} >
    <Form.Item label="Current Radio">
        <Input style={{width: '100%'}} />
    </Form.Item>
</Col>

</Row>
<Row gutter={[12, 12]}>

<Col span={12} >
    <Form.Item label="Total Liabilitiesto Networth Ratio">
        <Input style={{width: '100%'}} />
    </Form.Item>
</Col>
<Col span={12} >
    <Form.Item label="Net Working Cycle(NWC)-Days">
        <Input style={{width: '100%'}} />
    </Form.Item>
</Col>

</Row>
<Row gutter={[12,12]}>
    <Col span={12}>
        <Form.Item label="Debt Equity Ratio">
            <Input style={{width:'100%'}} />
        </Form.Item>
    </Col>
    <Col span={12}>
        <Form.Item label="Debitors Turn-over- Days">
            <Input style={{width:'100%'}} />
        </Form.Item>
    </Col>
</Row>
<Row gutter={[12,12]}>
    <Col span={12}>
        <Form.Item label="Interest Coverage Ratio">
            <Input style={{width:'100%'}} />
        </Form.Item>
    </Col>
    <Col span={12}>
        <Form.Item label="Creditors Turn-over Days">
            <Input style={{width:'100%'}} />
        </Form.Item>
    </Col>
</Row>
<Row gutter={[12,12]}>
    <Col span={12}>
        <Form.Item label="Debt Service Coverage Ratio(DSCR)">
            <Input style={{width:'100%'}} />
        </Form.Item>
    </Col>
    <Col span={12}>
        <Form.Item label="Stock Turn-over Days">
            <Input style={{width:'100%'}} />
        </Form.Item>
    </Col>
</Row>
<Row gutter={[24]}>
    <Col span={12}>
        <Form.Item label="Banking Turn-over(BTO)">
            <Input style={{width:'100%'}} />
        </Form.Item>
    </Col>
   
</Row>
</div>
     
        )
}
}