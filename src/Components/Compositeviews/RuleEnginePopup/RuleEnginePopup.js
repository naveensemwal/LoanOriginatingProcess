import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss'; 
import { Menu } from 'antd';

// You need to provide your own config. See below 'Config format'

const { SubMenu } = Menu;
const config = {
  ...BasicConfig,
  fields: {
    qty: {
      label: 'Document Category',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Applicant Form', title: 'Applicant Form' },
        { value: 'ID Proof', title: 'ID Proof' },
        { value: 'Address Proof', title: 'Address Proof' },
        { value: 'Income Documents', title: 'Income Documents' },
        { value: 'Banking Documents', title: 'Banking Documents' },
        { value: 'Property Documents', title: 'Property Documents' },
      ],
    },
    color: {
      label: 'Document Name',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Signed Application form', title: 'Signed Application form' },
        { value: 'Aadhar', title: 'Aadhar' },
        { value: 'PAN', title: 'PAN' },
        { value: 'Passport', title: 'Passport' },
        { value: 'Voter Id', title: 'Voter Id' },
        { value: 'Driving License', title: 'Driving License' },
        { value: 'Electricity Bill', title: 'Electricity Bill' },
        { value: '3 Salary Slips', title: '3 Salary Slips' },
        { value: 'Salary Certificate', title: 'Salary Certificate' },
        { value: 'Latest Form 16', title: 'Latest Form 16' },
        { value: 'Copy of Original Sale Deed', title: 'Copy of Original Sale Deed' },
        { value: 'Allotment-Possession', title: 'Allotment-Possession' },
        { value: 'NOC from Society', title: 'NOC from Society' },
        { value: 'Last 6 Months Bank Statement', title: 'Last 6 Months Bank Statement' }
      ],
    },
   }
};

// You can load query value from your backend storage (for saving see `Query.onChange()`)
const queryValue = { "id": QbUtils.uuid(), "type": "group" };

const data={"type":"group","id":"a8ab88a9-0123-4456-b89a-b1710c99926f","children1":{"a89b8888-cdef-4012-b456-71710c99b66b":{"type":"group","properties":{"conjunction":"AND"},"children1":{"8bb9b88b-89ab-4cde-b012-31710c99b66c":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Applicant Form"],"valueSrc":["value"],"valueType":["select"]}},"aab99bba-cdef-4012-b456-71711588bbe0":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Signed Application form"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"99ba9a89-cdef-4012-b456-71711599e248":{"type":"group","properties":{"conjunction":"AND"},"children1":{"89ab8a99-89ab-4cde-b012-31711599e249":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["ID Proof"],"valueSrc":["value"],"valueType":["select"]}},"9aa8bbbb-cdef-4012-b456-7171159aa051":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Aadhar","PAN","Passport","Voter Id","Driving License"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"bba989b9-89ab-4cde-b012-3171159b1cb5":{"type":"group","properties":{"conjunction":"AND"},"children1":{"89b9bab9-4567-489a-bcde-f171159b1ccc":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Address Proof"],"valueSrc":["value"],"valueType":["select"]}},"b8bba98b-0123-4456-b89a-b171159b5184":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Aadhar","Voter Id","Passport","Driving License","Electricity Bill"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"9ba9a8bb-cdef-4012-b456-7171159bcab4":{"type":"group","properties":{"conjunction":"AND"},"children1":{"8baa9a89-89ab-4cde-b012-3171159bcab5":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Income Documents"],"valueSrc":["value"],"valueType":["select"]}},"8a9abb9b-4567-489a-bcde-f171159bf552":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["3 Salary Slips","Salary Certificate","Latest Form 16"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"a989ab8a-0123-4456-b89a-b171159c5cdc":{"type":"group","properties":{"conjunction":"AND"},"children1":{"989abab9-cdef-4012-b456-7171159c5cdc":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Banking Documents"],"valueSrc":["value"],"valueType":["select"]}},"b8b8ab89-89ab-4cde-b012-3171159c8cfe":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Last 6 Months Bank Statement"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"ab8b8899-4567-489a-bcde-f171159cf3cb":{"type":"group","properties":{"conjunction":"AND"},"children1":{"98a88a9a-0123-4456-b89a-b171159cf3cc":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Property Documents"],"valueSrc":["value"],"valueType":["select"]}},"998a9988-cdef-4012-b456-7171159d21fd":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Copy of Original Sale Deed","Allotment-Possession","NOC from Society"]],"valueSrc":["value"],"valueType":["multiselect"]}}}}}};

const data2={"type":"group","id":"a8ab88a9-0123-4456-b89a-b1710c99926f","children1":{"a89b8888-cdef-4012-b456-71710c99b66b":{"type":"group","properties":{"conjunction":"AND"},"children1":{"8bb9b88b-89ab-4cde-b012-31710c99b66c":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Applicant Form"],"valueSrc":["value"],"valueType":["select"]}},"aab99bba-cdef-4012-b456-71711588bbe0":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Signed Application form"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"99ba9a89-cdef-4012-b456-71711599e248":{"type":"group","properties":{"conjunction":"AND"},"children1":{"89ab8a99-89ab-4cde-b012-31711599e249":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["ID Proof"],"valueSrc":["value"],"valueType":["select"]}},"9aa8bbbb-cdef-4012-b456-7171159aa051":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Aadhar","PAN","Passport","Voter Id","Driving License"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"bba989b9-89ab-4cde-b012-3171159b1cb5":{"type":"group","properties":{"conjunction":"AND"},"children1":{"89b9bab9-4567-489a-bcde-f171159b1ccc":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Address Proof"],"valueSrc":["value"],"valueType":["select"]}},"b8bba98b-0123-4456-b89a-b171159b5184":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Aadhar","Voter Id","Passport","Driving License","Electricity Bill"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"9ba9a8bb-cdef-4012-b456-7171159bcab4":{"type":"group","properties":{"conjunction":"AND"},"children1":{"8baa9a89-89ab-4cde-b012-3171159bcab5":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Income Documents"],"valueSrc":["value"],"valueType":["select"]}},"8a9abb9b-4567-489a-bcde-f171159bf552":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["3 Salary Slips","Salary Certificate","Latest Form 16"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"a989ab8a-0123-4456-b89a-b171159c5cdc":{"type":"group","properties":{"conjunction":"AND"},"children1":{"989abab9-cdef-4012-b456-7171159c5cdc":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Banking Documents"],"valueSrc":["value"],"valueType":["select"]}},"b8b8ab89-89ab-4cde-b012-3171159c8cfe":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Last 6 Months Bank Statement"]],"valueSrc":["value"],"valueType":["multiselect"]}}}}}};

export default class RuleEnginePopup extends Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
    tree: QbUtils.checkTree(QbUtils.loadTree((this.props.id==1)?data:data2), config),
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
    //console.log("data "+this.data);
    const jsonTree = QbUtils.getTree(immutableTree);
   // const jsonTree = this.data;
    console.log("json tree 123");
    console.log(JSON.stringify(jsonTree));
    // `jsonTree` can be saved to backend, and later loaded to `queryValue`
  }




  render = () => (
    <div>
         <Query
          {...config}
          value={this.state.tree}
          onChange={this.onChange}
          renderBuilder={this.renderBuilder}
        />
      
 </div>
  )


}