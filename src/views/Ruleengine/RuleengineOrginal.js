import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss'; 
import { Menu,Icon,Row,Col } from 'antd';

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
            key="documentCheckList"
            title={
              <span>
                <Icon type="setting" />
                <span>Document Checklist Rules</span>
              </span>
            }
          >
            <Menu.Item key="homeLoan">Home Loan</Menu.Item>
            <Menu.Item key="autoLoan">Auto Loan</Menu.Item>
            <Menu.Item key="personalLoan">Personal Loan</Menu.Item>
            <Menu.Item key="mortgageLoan">Mortgage Loan</Menu.Item>
          </SubMenu>
          <SubMenu key="documentConsistency" title={
              <span>
                <Icon type="setting" />
                <span>Document Consistency Rules</span>
              </span>
            }
          >
            <Menu.Item key="homeLoan">Home Loan</Menu.Item>
            <Menu.Item key="autoLoan">Auto Loan</Menu.Item>
            <Menu.Item key="personalLoan">Personal Loan</Menu.Item>
            <Menu.Item key="mortgageLoan">Mortgage Loan</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="customerClassification" />
                <span>Loan Rejection Rules</span>
              </span>
            }
          >
            <Menu.Item key="homeLoan">Home Loan</Menu.Item>
            <Menu.Item key="autoLoan">Auto Loan</Menu.Item>
            <Menu.Item key="personalLoan">Personal Loan</Menu.Item>
            <Menu.Item key="mortgageLoan">Mortgage Loan</Menu.Item>
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