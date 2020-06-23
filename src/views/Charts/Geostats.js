import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { Row, Col } from 'antd';
import "antd/dist/antd.css";
import './geo.css'


export default class Geostats extends Component {
  render() {
    return (
      <Row>
        <Col span={20}>
          <Iframe url='http://localhost:8080/viewone/india.html'
            id="myId"
            allowFullScreen
            width='100%'
            height='600px'
          />
        </Col>
        <Col span={4}>
          <div className='my-legend'>
            <div className='legend-title'>Statewise Loan Consumption</div>
            <div className='legend-scale'>
              <ul className='legend-labels'>
                <li><span style={{background:'#306596'}}></span>High</li>
                <li><span style={{background:'#0fa0fa'}}></span>Moderate</li>
                <li><span style={{background:'#b3dbf3'}}></span>Low</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    )
  }
}
