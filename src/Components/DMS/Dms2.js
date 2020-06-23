import React, { Component } from 'react';
import { Avatar, Card, Col, Input, List, Row, Switch, Alert } from 'antd';
import {CheckOutlined,CloseOutlined} from '@ant-design/icons';
import "antd/dist/antd.css";

const data = [
  {
    docName: 'ApplicationForm.pdf',
    mimeType: 'pdf',
    docType: 'Signed Application Form',
    isExpired: false,
    createdOn: '15-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'PanCard.jpg',
    mimeType: 'jpg',
    docType: 'Pan Card',
    isExpired: false,
    createdOn: '15-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'Passport_VM.png',
    mimeType: 'png',
    docType: 'Passport',
    isExpired: false,
    createdOn: '15-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'Salary Slip_Jan 2019',
    mimeType: 'pdf',
    docType: 'Income Proof',
    isExpired: false,
    createdOn: '15-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'Salary Slip_Feb 2019',
    mimeType: 'pdf',
    docType: 'Income Proof',
    isExpired: false,
    createdOn: '15-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'Salary Slip_Mar 2019',
    mimeType: 'pdf',
    docType: 'Income Proof',
    isExpired: false,
    createdOn: '15-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'LAPEBill',
    mimeType: 'pdf',
    docType: 'Address Proof',
    isExpired: false,
    createdOn: '15-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'Saledeed.pdf',
    mimeType: 'pdf',
    docType: 'Copy of Original Sale Deed',
    isExpired: false,
    createdOn: '15-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
];

export default class Dms2 extends Component {
  render() {
    return (
      <div>
        <Card>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                 avatar={<Avatar src={require(`./`+item.mimeType+`.png`)} />}
                  title={<a href={item.url+item.docName} target="blank" >{item.docName}</a>}
                  description={item.docType+ "  | Created On: " +item.createdOn }
                />
                {/* {item.isExpired ? <Alert message="Document has expired." type="warning" showIcon banner={true} /> : null}
                <div style={{ padding: '2px' }} />
                <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked
                /> */}
              </List.Item>

            )}
          />
        </Card>
      </div>
    )
  }
}
