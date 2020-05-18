import React, { Component } from 'react';
import { Tabs } from 'antd';
import "antd/dist/antd.css";
import Tasklist from './Tasklist';
import Tasklist1 from './Tasklist1';
import Tasklist2 from './Tasklist2';
import Tasklist3 from './Tasklist3';
import Tasklist4 from './Tasklist4';
import UserContext from '../../UserContext';

export default class Tasklists extends Component {

  static contextType = UserContext;


  constructor() {
    super();
    this.state = {
      userN: '',

    }

    console.log("value of user state " + this.state.userN);
  }

  componentDidMount() {
    const user = this.context;

    console.log(JSON.stringify(user));
    console.log(user);
    console.log(user.user.name);
    this.setData(user.user.name);
  }

  setData = (e) => {

    this.setState({
      userN: e,
    })
    console.log("value of user state2 " + this.state.userN);
  }



  render() {
    const { TabPane } = Tabs;
    return (
      <div>

        {this.state.userN == 'Sales_1' ? (
          <Tabs >
            <TabPane tab="All Active Tasks" key="1">
              <Tasklist></Tasklist>
            </TabPane>
            <TabPane tab="New Tasks" key="2">
              <Tasklist></Tasklist>
            </TabPane>
            <TabPane tab="Returned Tasks" key="3">
              <Tasklist></Tasklist>
            </TabPane>
            <TabPane tab="Re-look Tasks" key="4">
              <Tasklist></Tasklist>
            </TabPane>
          </Tabs>


        ) : (this.state.userN == 'Data_Entry_1' ? (
          <Tabs >
            <TabPane tab="All Active Tasks" key="1">
              <Tasklist1></Tasklist1>
            </TabPane>
            <TabPane tab="New Tasks" key="2">
              <Tasklist1></Tasklist1>
            </TabPane>
            <TabPane tab="Returned Tasks" key="3">
              <Tasklist1></Tasklist1>
            </TabPane>

          </Tabs>

        ) : (this.state.userN == 'Underwriter_1' ? (
          <Tabs >
            <TabPane tab="All Active Tasks" key="1">
              <Tasklist2></Tasklist2>
            </TabPane>
            <TabPane tab="New Tasks" key="2">
              <Tasklist2></Tasklist2>
            </TabPane>
            <TabPane tab="Forwarded Tasks" key="3">
              <Tasklist2></Tasklist2>
            </TabPane>
            <TabPane tab="Returned Tasks" key="4">
              <Tasklist2></Tasklist2>
            </TabPane>
          </Tabs>
        ) : (this.state.userN == 'Disbursement_1' ? (
          <Tabs >
            <TabPane tab="All Active Tasks" key="1">
              <Tasklist3></Tasklist3>
            </TabPane>

          </Tabs>
        ) : (
            <Tabs >
              <TabPane tab="All Active Tasks" key="1">
                <Tasklist4></Tasklist4>
              </TabPane>

            </Tabs>

          )

          )
          )

          )}

      </div>
    )
  }
}
