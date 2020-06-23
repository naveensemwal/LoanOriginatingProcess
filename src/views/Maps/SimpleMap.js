import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { Row, Col, Tabs, Checkbox, List, Icon,Switch } from 'antd';
import "antd/dist/antd.css";
import {CheckOutlined,CloseOutlined} from '@ant-design/icons';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Residence Verifier', 'Legal Verifier', 'Business Verifier', 'Employment Verifier'];

const residenceVerifier = [
  {
    title: '3G base Field Management',
    checked: true,
  },
  {
    title: 'Dorupo financial services pvt ltd',
    checked: false,
  }
];

const legalVerifier = [
  {
    title: 'Himadri Associates ',
    checked: true,
  },
  {
    title: 'Payal financial services pvt ltd',
    checked: false,
  }
];

const businessVerifier = [
  {
    title: 'PVR Financial Group ',
    checked: false,
  },
  {
    title: 'D Ask financial Group',
    checked: false,
  }
];

const employmentVerifier = [
  {
    title: 'Authbridge ltd ',
    checked: false,
  },
  {
    title: 'Dataflow',
    checked: true,
  }
];

const SimpleMap = (props) => {
  const [center, setCenter] = useState({ lat: 18.598257, lng: 73.806595 });
  const [zoom, setZoom] = useState(16);
  return (
    <Row >
      <Col span={13} >
        <Row>
          <Col>
            <div style={{ height: '70vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDQANR_ttzXwxD8GdFtBcb_RbeZ50h4pUc' }}
                defaultCenter={center}
                defaultZoom={zoom}
              >
                <Marker
                  lat={18.598263}
                  lng={73.806595}
                  name="Asset Location"
                  color="blue"
                />
                <Marker
                  lat={18.594000}
                  lng={73.806591}
                  name="Himadri Associates"
                  color="orange"
                />
                <Marker
                  lat={18.596000}
                  lng={73.806591}
                  name="3G base Field Management"
                  color="green"
                />
                <Marker
                  lat={18.5985}
                  lng={73.8085}
                  name="Payal financial services pvt ltd"
                  color="orange"
                />
                <Marker
                  lat={18.598257}
                  lng={73.802000}
                  name="Authbridge ltd"
                  color="yellow"
                />

                <Marker
                  lat={18.596000}
                  lng={73.802000}
                  name="Dorupo financial services pvt ltd"
                  color="green"
                />
                <Marker
                  lat={18.597257}
                  lng={73.801400}
                  name="Dataflow"
                  color="yellow"
                />
                <Marker
                  lat={18.596787}
                  lng={73.80800}
                  name="PVR Financial Group"
                  color="red"
                />
              </GoogleMapReact>
            </div>
            <div>
              {/* <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                <Checkbox
                  checked={true}
                >
                  Check all
          </Checkbox>
              </div> */}
              <br />
              <CheckboxGroup
                options={plainOptions}
                value={plainOptions}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>

          </Col>
          <Col span={24}>

          </Col>
        </Row>
      </Col>
      <Col span={11}>
        <Tabs defaultActiveKey="1" >
          <Tabs.TabPane tab="Residence Verification" key="1">
            <List
              itemLayout="horizontal"
              dataSource={residenceVerifier}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Icon type="pushpin" theme="filled" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    // description="Learner"
                  />
                     <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked={item.checked}
                />
                </List.Item>
             
              )}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Legal Verification" key="2">
          <List
              itemLayout="horizontal"
              dataSource={legalVerifier}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Icon type="pushpin" theme="filled" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    // description="Learner"
                  />
                     <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked={item.checked}
                />
                </List.Item>
             
              )}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Business Reference Verification" key="3">
          <List
              itemLayout="horizontal"
              dataSource={businessVerifier}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Icon type="pushpin" theme="filled" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    // description="Learner"
                  />
                     <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked={item.checked}
                />
                </List.Item>
             
              )}
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Employment Verification" key="4">
          <List
              itemLayout="horizontal"
              dataSource={employmentVerifier}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Icon type="pushpin" theme="filled" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    // description="Learner"
                  />
                     <Switch
                  checkedChildren={<CheckOutlined />}
                  unCheckedChildren={<CloseOutlined />}
                  defaultChecked={item.checked}
                />
                </List.Item>
             
              )}
            />
          </Tabs.TabPane>
         </Tabs>
      </Col>
    </Row>
  );
}

export default SimpleMap;