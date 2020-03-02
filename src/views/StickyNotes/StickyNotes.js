import React, { Component } from 'react';
import { Switch, Row, Col, Card } from 'antd';
import "antd/dist/antd.css";

export default class StickyNotes extends Component {
  render() {
    return (
      <div>
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Card hoverable title="What Documents are required ?">

            </Card>
          </Col>
          <Col span={12}>
          <Card hoverable>


            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
