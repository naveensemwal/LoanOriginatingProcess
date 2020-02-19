import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss'; //optional, for more compact styles
import { Menu, Icon,Row,Col } from 'antd';

// You need to provide your own config. See below 'Config format'

const { SubMenu } = Menu;
const config = {
  ...BasicConfig,
  fields: {
    qty: {
      label: 'Loan Amount',
      type: 'number',
      fieldSettings: {
        min: 0,
      },
      valueSources: ['value'],
      preferWidgets: ['number'],
    },
    price: {
      label: 'Tenure',
      type: 'number',
      valueSources: ['value'],
      fieldSettings: {
        min: 10,
        max: 30,
      },
      preferWidgets: ['slider', 'rangeslider'],
    },
    color: {
      label: 'Color',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'yellow', title: 'Yellow' },
        { value: 'green', title: 'Green' },
        { value: 'orange', title: 'Orange' }
      ],
    },
    is_promotion: {
      label: 'PEP?',
      type: 'boolean',
      operators: ['equal'],
      valueSources: ['value'],
    },
  }
};

// You can load query value from your backend storage (for saving see `Query.onChange()`)
const queryValue = { "id": QbUtils.uuid(), "type": "group" };


export default class Ruleengine extends Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
    tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
    config: config
  };


  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };



  renderBuilder = (props) => (
    <div className="query-builder-container" style={{ padding: '10px' }}>
      <div className="query-builder qb-lite">
        <Builder {...props} />
      </div>
    </div>
  )

  renderResult = ({ tree: immutableTree, config }) => (
    <div className="query-builder-result">
      <div>Query string: <pre>{JSON.stringify(QbUtils.queryString(immutableTree, config))}</pre></div>
      <div>MongoDb query: <pre>{JSON.stringify(QbUtils.mongodbFormat(immutableTree, config))}</pre></div>
      <div>SQL where: <pre>{JSON.stringify(QbUtils.sqlFormat(immutableTree, config))}</pre></div>
      <div>JsonLogic: <pre>{JSON.stringify(QbUtils.jsonLogicFormat(immutableTree, config))}</pre></div>
    </div>
  )

  onChange = (immutableTree, config) => {
    // Tip: for better performance you can apply `throttle` - see `examples/demo`
    this.setState({ tree: immutableTree, config: config });

    const jsonTree = QbUtils.getTree(immutableTree);
    console.log(jsonTree);
    // `jsonTree` can be saved to backend, and later loaded to `queryValue`
  }




  render = () => (
    <div>
    <Row  gutter={[8, 8]}>
      <Col span={6}>
      <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="setting" />
                <span>Loan Eligibility Rules</span>
              </span>
            }
          >
            <Menu.Item key="1">Home Loan Eligibility</Menu.Item>
            <Menu.Item key="2">Auto Loan Eligibility </Menu.Item>
            <Menu.Item key="3">Personal Loan Eligibility</Menu.Item>
            <Menu.Item key="4">Mortgage Loan Eligibility</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={
              <span>
                <Icon type="setting" />
                <span>Loan Dispersal Rules</span>
              </span>
            }
          >
            <Menu.Item key="5">Home Loan Dispersal</Menu.Item>
            <Menu.Item key="6">Auto Loan Dispersal </Menu.Item>
            <Menu.Item key="7">Personal Loan Dispersal</Menu.Item>
            <Menu.Item key="8">Mortgage Loan Dispersal</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>Loan Rejection Rules</span>
              </span>
            }
          >
            <Menu.Item key="9">Home Loan Rejection</Menu.Item>
            <Menu.Item key="10">Home Loan Rejection</Menu.Item>
            <Menu.Item key="11">Home Loan Rejection</Menu.Item>
            <Menu.Item key="12">Home Loan Rejection</Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col span={18} >
      <Query
          {...config}
          value={this.state.tree}
          onChange={this.onChange}
          renderBuilder={this.renderBuilder}
        />
      </Col>
    </Row>
 </div>
  )


}