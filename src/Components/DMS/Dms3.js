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
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'PanCard.jpg',
    mimeType: 'jpg',
    docType: 'Pan Card',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'Passport_VM.png',
    mimeType: 'png',
    docType: 'Passport',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'Salary_Slip_Oct_Mar.pdf',
    mimeType: 'pdf',
    docType: 'Salary Slip',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'Saledeed.pdf',
    mimeType: 'pdf',
    docType: 'Copy of Original Sale Deed',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'RVReport.pdf',
    mimeType: 'pdf',
    docType: 'Residence Verification Report',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'EMPReport.pdf',
    mimeType: 'pdf',
    docType: 'Employment Verification Report',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'LegalReport.pdf',
    mimeType: 'pdf',
    docType: 'Legal Verification Report',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'PVReport.pdf',
    mimeType: 'pdf',
    docType: 'Property Valuation Report',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'CIBIL.pdf',
    mimeType: 'pdf',
    docType: 'Credit Report',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
  {
    docName: 'AccountStatement.pdf',
    mimeType: 'pdf',
    docType: 'Income Proof',
    isExpired: false,
    createdOn: '14-Apr-2020',
    url:'http://localhost:8080/viewone/index.html?docName='
  },
];

export default class Dms3 extends Component {
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
                   avatar={<Avatar src={require("./"+item.mimeType+".png")} />}
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
