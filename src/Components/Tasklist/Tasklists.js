import React, { Component } from 'react';
import { Tabs } from 'antd';
import "antd/dist/antd.css";
import Tasklist from './Tasklist';

export default class Tasklists extends Component {
  render() {
    const { TabPane } = Tabs;
    return (
      <div>
        <Tabs >
          <TabPane tab="All Active Tasks" key="1">
          <Tasklist></Tasklist>
          </TabPane>
          <TabPane tab="Sales Tasks" key="2">
          <Tasklist></Tasklist>
          </TabPane>
          <TabPane tab="Data Entry Tasks" key="3">
          <Tasklist></Tasklist>
          </TabPane>
          <TabPane tab="Underwriting Tasks" key="4">
          <Tasklist></Tasklist>
          </TabPane>
        </Tabs>
      </div>
          )
        }
      }
