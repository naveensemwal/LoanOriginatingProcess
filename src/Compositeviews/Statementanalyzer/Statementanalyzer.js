import React, { Component } from 'react';
import { Avatar, Card, Col, Icon, Input, List, Row, Switch, Alert } from 'antd';
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import ChartCard from "./ChartCard";
import { incrementData, lineData } from "./data";
import Auxiliary from '../../Util/Auxiliary'
import Portfolio from "./Portfolio";
import BalanceHistory from "./BalanceHistory";
import BankStatmentDetails from '../BankStatementDetails/BankStatementDetails';
// import './Statement.css';
// import '../../styles/wieldy.less';


const data = [
    {
        docName: 'Statement_JAN.pdf',
        mimeType: 'pdf',
        docType: 'Bank Statement',
        isExpired: false,
    },
    {
        docName: 'Statement_FEB.pdf',
        mimeType: 'pdf',
        docType: 'Bank Statement',
        isExpired: false,
    },
    {
        docName: 'Statement_MAR.pdf',
        mimeType: 'pdf',
        docType: 'Bank Statement',
        isExpired: true,
    },
];

export default class Statementanalyzer extends Component {
    render() {
        return (
            <div className='cust_statementAnalyzer'>
            <Auxiliary>
              
                <Row gutter={[8,8]}>
                    {/* <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <Card>
                            <List
                                itemLayout="horizontal"
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar src={require(`./pdf-document.png`)} />}
                                            title={<a href="https://c.d">{item.docName}</a>}
                                            description={item.docType}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col> */}
                    <Col span={24}>
                        <Row gutter={[8,8]}>
                            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                                <ChartCard prize=" ₹16558345.16 " title="23" icon="bitcoin"
                                    children={<ResponsiveContainer width="100%" height={75}>
                                        <AreaChart data={incrementData}
                                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                            <Tooltip />
                                            <defs>
                                                <linearGradient id="color3" x1="0" y1="0" x2="1" y2="0">
                                                    <stop offset="5%" stopColor="#163469" stopOpacity={0.9} />
                                                    <stop offset="95%" stopColor="#FE9E15" stopOpacity={0.9} />
                                                </linearGradient>
                                            </defs>
                                            <Area dataKey='price' strokeWidth={0} stackId="2" stroke='#4D95F3' fill="url(#color3)"
                                                fillOpacity={1} />
                                        </AreaChart>
                                    </ResponsiveContainer>}
                                    styleName="up" desc="Average Credit Transaction Amount" />
                            </Col>
                            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                                <ChartCard prize=" ₹5158025.76" title="07" icon="etherium"
                                    children={<ResponsiveContainer width="100%" height={75}>
                                        <AreaChart data={incrementData}
                                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                            <Tooltip />
                                            <defs>
                                                <linearGradient id="color4" x1="0" y1="0" x2="1" y2="0">
                                                    <stop offset="5%" stopColor="#4ECDE4" stopOpacity={0.9} />
                                                    <stop offset="95%" stopColor="#06BB8A" stopOpacity={0.9} />
                                                </linearGradient>
                                            </defs>
                                            <Area dataKey='price' type='monotone' strokeWidth={0} stackId="2" stroke='#4D95F3'
                                                fill="url(#color4)"
                                                fillOpacity={1} />
                                        </AreaChart>
                                    </ResponsiveContainer>}
                                    styleName="up" desc="Average Debit Transaction Amount" />
                            </Col>
                            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                                <ChartCard prize=" ₹2264386.00" title="08" icon="ripple"
                                    children={<ResponsiveContainer width="100%" height={75}>
                                        <AreaChart data={incrementData}
                                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                            <Tooltip />
                                            <defs>
                                                <linearGradient id="color5" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#e81a24" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="#FEEADA" stopOpacity={0.8} />
                                                </linearGradient>
                                            </defs>
                                            <Area dataKey='price' strokeWidth={0} stackId="2" stroke='#FEEADA' fill="url(#color5)"
                                                fillOpacity={1} />
                                        </AreaChart>
                                    </ResponsiveContainer>}
                                    styleName="down" desc="Average EOD Balance" />
                            </Col>
                            <Col xl={6} lg={12} md={12} sm={12} xs={24}>
                                <ChartCard prize=" ₹704313.91" title="47" icon="litcoin"
                                    children={<ResponsiveContainer width="100%" height={75}>

                                        <LineChart data={lineData}
                                            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                            <Tooltip />
                                            <Line dataKey="price" stroke="#038FDE" dot={{ stroke: '#FEA931', strokeWidth: 2 }} />
                                        </LineChart>
                                    </ResponsiveContainer>}
                                    styleName="down" desc="Average Monthly Balance" />
                            </Col>
                            <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                                <Portfolio />
                            </Col>
                            <Col xl={12} lg={24} md={12} sm={24} xs={24}>
                                <BalanceHistory />
                            </Col>

                            {/*<Col xl={9} lg={24} md={24} sm={24} xs={24}>
                <SendMoney/>
              </Col>
              <Col xl={6} lg={12} md={12} sm={24} xs={24}>
                <RewardCard/>
              </Col>
              <Col xl={9} lg={12} md={12} sm={24} xs={24}>
                <CurrencyCalculator/>
              </Col>
      
              <Col xl={15} lg={24} md={24} sm={24} xs={24}>
                <CryptoNews/>
              </Col>
              <Col xl={9} lg={24} md={24} sm={24} xs={24}>
                <DownloadMobileApps/>
                <OrderHistory/>
              </Col> */}
                        </Row>
                    </Col>
                </Row>
            </Auxiliary>
            </div>
        )
    }
}
