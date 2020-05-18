import { Avatar, Card, Col, Input, List, Row, Switch, Alert } from 'antd';
import "antd/dist/antd.css";
import React, { Component } from 'react';
import Customerprofile from './Customerprofile';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';


const tabList = [
  {
    key: 'customerProfile',
    tab: 'Customer Profile',
  },
  {
    key: 'customerDocuments',
    tab: 'Customer Documents',
  },
];

const data = [
  {
    docName: 'PAN.pdf',
    mimeType: 'pdf',
    docType: 'Identity Proof',
    isExpired: false,
  },
  {
    docName: 'Aadhar.pdf',
    mimeType: 'pdf',
    docType: 'Address Proof',
    isExpired: false,
  },
  {
    docName: 'Bank Statement.pdf',
    mimeType: 'pdf',
    docType: 'Supporting Document',
    isExpired: true,
  },
  {
    docName: 'Salary Slip.pdf',
    mimeType: 'pdf',
    docType: 'Income Proof',
    isExpired: true,
  },
  {
    docName: 'High School Certificate.pdf',
    mimeType: 'pdf',
    docType: 'Age Proof',
    isExpired: false,
  },
  {
    docName: 'Driving License.pdf',
    mimeType: 'pdf',
    docType: 'Supporting Documents',
    isExpired: false,
  },
];

const contentList = {
  customerProfile: <Customerprofile></Customerprofile>,
  customerDocuments: <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={require(`./pdf-document.png`)} />}
          title={<a href="https://c.d">{item.docName}</a>}
          description={item.docType}
        />
        {item.isExpired ? <Alert message="Document has expired." type="warning" showIcon banner={true} /> : null}
        <div style={{ padding: '2px' }} />
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          defaultChecked
        />
      </List.Item>
    )}
  />,
};


export default class StickyNotes extends Component {

  state = {
    key: 'customerProfile',
    titleKey: 'customerProfile',
    isExistingCustomer: false,
    showDetails: false,
    fetchingProfile: false,
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  handleSearch = (info) => {
    this.setState({ fetchingProfile: true });
    setTimeout(function () { this.setState({ fetchingProfile: false, showDetails: true }); }.bind(this), 30);

  };
  render() {
    return (
      <div>
        <Row gutter={[12, 12]}>
          <Col span={24}>
            <Switch checkedChildren="Yes" unCheckedChildren="No"
              onChange={e => this.setState({ isExistingCustomer: e })}
              checked={this.state.isExistingCustomer} />
          </Col>
          <Col span={6}>{this.state.isExistingCustomer ? <Input.Search placeholder="Enter customer ID" loading={this.state.fetchingProfile} onSearch={this.handleSearch} /> : null}
          </Col>
        </Row>
        {this.state.showDetails ?
          <Row style={{ paddingTop: '5px' }}>
            <Card style={{ width: '100%' }} tabList={tabList} activeTabKey={this.state.titleKey} onTabChange={key => { this.onTabChange(key, 'titleKey'); }}>
              {contentList[this.state.titleKey]}
            </Card>
          </Row> : null
        }
      </div>
    )
  }
}
