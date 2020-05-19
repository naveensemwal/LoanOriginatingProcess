import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Col, Input, InputNumber, Row, Select } from 'antd';
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
<Row gutter={[8, 8]} disabled>

<Col span={8} >
    <Form.Item label="Unsecured to Secured Ratio" >
        <Input defaultValue="0.0" style={{width: '100%'}} disabled />
    </Form.Item>
</Col>
<Col span={8} >
    <Form.Item label="Current Radio">
        <Input defaultValue="0.935641111" style={{width: '100%'}} disabled />
    </Form.Item>
	
</Col>
<Col span={8} >
    <Form.Item label="Total Liabilities to Networth Ratio">
        <Input defaultValue="3.9010222211" style={{width: '100%'}} disabled/>
    </Form.Item>
</Col>


</Row>
<Row gutter={[8, 8]}>

<Col span={8} >
    <Form.Item label="Net Working Cycle(NWC)-Days">
        <Input defaultValue="1.5732111E21" style={{width: '100%'}} disabled/>
    </Form.Item>
</Col>
<Col span={8}>
        <Form.Item label="Debt Equity Ratio">
            <Input defaultValue="0.0" style={{width:'100%'}} disabled/>
        </Form.Item>
    </Col>
<Col span={8}>
        <Form.Item label="Debitors Turn-over- Days">
            <Input defaultValue="0.0" style={{width:'100%'}} disabled/>
        </Form.Item>
</Col>

</Row>
<Row gutter={[8,8]}>
    <Col span={8}>
        <Form.Item label="Interest Coverage Ratio">
            <Input  defaultValue="0.0" style={{width:'100%'}} disabled/>
        </Form.Item>
    </Col>
    <Col span={8}>
        <Form.Item label="Creditors Turn-over Days">
            <Input defaultValue="0.0" style={{width:'100%'}} disabled/>
        </Form.Item>
    </Col>
	<Col span={8}>
        <Form.Item label="Debt Service Coverage Ratio(DSCR)">
            <Input defaultValue="0.284567567" style={{width:'100%'}} disabled/>
        </Form.Item>
    </Col>
</Row>
<Row gutter={[8,8]}>
        <Col span={8}>
        <Form.Item label="Stock Turn-over Days">
            <Input defaultValue="1.577566576E3" style={{width:'100%'}} disabled/>
        </Form.Item>
		</Col>
		<Col span={8}>
        <Form.Item label="Banking Turn-over(BTO)">
            <Input defaultValue="0.0" style={{width:'100%'}} disabled/>
        </Form.Item>
		</Col>
   
</Row>
</div>
     
        )
}
}