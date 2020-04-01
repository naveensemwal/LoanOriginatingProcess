import { Col, Form, Input, InputNumber, Row, Select } from 'antd';
import React, { Component } from 'react';



export default class Employmentdetails extends Component {
	
	constructor(props) {
    super(props);
       this.state = {
         CheckVis: false
       };
    
    }
	 CustCatChange =e =>{
		 console.log("cust cat "+e);
		 if (e == "1") {
			this.setState({
			CheckVis: false
         });
         } else {
            this.setState({ CheckVis: true });
         }
		 
	 }
	
    render() {
        return (
            <div>
                <Row gutter={[8, 8]}>
                    <Col span={8} >
                        <Form.Item label="Customer Category :">
                            <Select
							defaultValue="1"
							onChange={this.CustCatChange}
							hidden="CheckVis"
							>
                                <Select.Option value="1">Salaried</Select.Option>
                                <Select.Option value="2">Self Employed</Select.Option> 
                            </Select>
                        </Form.Item>
                    </Col>
					{!this.state.CheckVis ?(
					 <Col span={8} >
                        <Form.Item label="Current Employer Name :">
                            <Input defaultValue="Singhla Sales"/>
                        </Form.Item>
                      </Col>):(
                          <Col span={8} >
                          <Form.Item label="Business Name :">
                              <Input defaultValue="xyz" />
                          </Form.Item>
                      </Col>
                      )}
                    {!this.state.CheckVis ?( 
                    <Col span={8} >
                        <Form.Item label="Nature of Business :">
                            <Select defaultValue="3">
                                <Select.Option value="1">AGRICULTURAL</Select.Option>
                                <Select.Option value="2">ANESTHETIST</Select.Option>
                                <Select.Option value="3">ARCHITECT</Select.Option>
                                <Select.Option value="4">FARMER / AGRICULTURE</Select.Option>
                                <Select.Option value="5">CONSULTANTS OPERATING FROM RESIDENCE</Select.Option>
                                <Select.Option value="6">BAMS</Select.Option>
                                <Select.Option value="7">FILM INDUSTRY RELATED PEOPLE</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>                   
					
					):(
                        <Col span={8} >
                        <Form.Item label="Gross Turnover :">
                            <InputNumber defaultValue="450000" style={{width:'100%'}}/>
                        </Form.Item>
                    </Col>
                    )}
                    
                </Row>
				
				 <Row gutter={[8, 8]}>
                 {!this.state.CheckVis ?(
                   <Col span={8} >
                        <Form.Item label="Declared Net Monthly income :">
                            <Input defaultValue="50000" prefix="₹" suffix="INR" />
                        </Form.Item>
                    </Col>):
                    (<Col span={8} >
                        <Form.Item label="Date of Inception :">
                            <Input defaultValue="09/07/2020"/>
                        </Form.Item>
                    </Col>)}
                    {!this.state.CheckVis ?(
                    <Col span={8} >
                        <Form.Item label="Years in Present Job :">
                            <InputNumber defaultValue="6" style={{width:'100%'}}/>
                        </Form.Item>
                    </Col>):("")}
                    {!this.state.CheckVis ?(
                    <Col span={8} >
                        <Form.Item label="Designation :">
                            <Select defaultValue="1">
                                <Select.Option value="1">JUNIOR MANAGEMENT</Select.Option>
                                <Select.Option value="2">Chairman</Select.Option>
                                <Select.Option value="3">MANAGING DIRECTOR</Select.Option>
                                <Select.Option value="4">OFFICER CADRE</Select.Option>
                                <Select.Option value="5">PARTNER</Select.Option>
                                <Select.Option value="6">VICE PRESIDENT</Select.Option>
                                <Select.Option value="7">SENIOR MANAGEMENT</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>   
                    ):("")}                 
                </Row>
				
            </div>
        )
    }
}
