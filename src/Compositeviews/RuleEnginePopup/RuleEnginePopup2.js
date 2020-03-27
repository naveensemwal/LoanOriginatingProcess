import React, { Component } from 'react';
import { Query, Builder, BasicConfig, Utils as QbUtils } from 'react-awesome-query-builder';
import "antd/dist/antd.css";
import 'react-awesome-query-builder/css/styles.scss';
import 'react-awesome-query-builder/css/compact_styles.scss'; 
import { Menu,Icon } from 'antd';

// You need to provide your own config. See below 'Config format'

const { SubMenu } = Menu;
const config = {
  ...BasicConfig,
  fields: {
    Category: {
      label: 'Customer Category',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Premium', title: 'Premium' },
        { value: 'Normal', title: 'Normal' },
      ],
    },
    Segment: {
      label: 'CustomerSegment & Employer Category',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'SalariedCatSA/A/B', title: 'Salaried Cat SA/A/B' },
        { value: 'SalariedCatC/D', title: 'Salaried Cat C/D' },
        { value: 'SelfEmployed', title: 'Self Employed' },
        { value: 'Salaried', title: 'Salaried' },
     ],
    },
	
   EmailId: {
      label: 'Official Email Id Verified?',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Yes', title: 'Yes' },
        { value: 'No', title: 'No' },
		{ value: 'Yes/No', title: 'Yes/No' },
      ],
    },
	Residence: {
      label: 'Residence Check',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Y', title: 'Y' },
        { value: 'N', title: 'N' },
		
      ],
    },
	
	Employment: {
      label: 'Employment Check',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Y', title: 'Y' },
        { value: 'N', title: 'N' },
		
      ],
    },
	
	BusinessRef: {
      label: 'Business Reference Check',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Y', title: 'Y' },
        { value: 'N', title: 'N' },
		
      ],
    },
	
	legal: {
      label: 'Property Legal Verification ',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Y', title: 'Y' },
        { value: 'N', title: 'N' },
		
      ],
    },
	Property: {
      label: 'Property Valuation',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Y', title: 'Y' },
        { value: 'N', title: 'N' },
		
      ],
    },
	LoanAmt: {
        label: 'Loan Amount',
        type: 'number',
        fieldSettings: {
          min: 10000000,
        },
        valueSources: ['value'],
        preferWidgets: ['number'],
      },
     }
     
	
};

// You can load query value from your backend storage (for saving see `Query.onChange()`)
const queryValue = { "id": QbUtils.uuid(), "type": "group" };

//const data={"type":"group","id":"a8ab88a9-0123-4456-b89a-b1710c99926f","children1":{"a89b8888-cdef-4012-b456-71710c99b66b":{"type":"group","properties":{"conjunction":"AND"},"children1":{"8bb9b88b-89ab-4cde-b012-31710c99b66c":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Applicant Form"],"valueSrc":["value"],"valueType":["select"]}},"aab99bba-cdef-4012-b456-71711588bbe0":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Signed Application form"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"99ba9a89-cdef-4012-b456-71711599e248":{"type":"group","properties":{"conjunction":"AND"},"children1":{"89ab8a99-89ab-4cde-b012-31711599e249":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["ID Proof"],"valueSrc":["value"],"valueType":["select"]}},"9aa8bbbb-cdef-4012-b456-7171159aa051":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Aadhar","PAN","Passport","Voter Id","Driving License"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"bba989b9-89ab-4cde-b012-3171159b1cb5":{"type":"group","properties":{"conjunction":"AND"},"children1":{"89b9bab9-4567-489a-bcde-f171159b1ccc":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Address Proof"],"valueSrc":["value"],"valueType":["select"]}},"b8bba98b-0123-4456-b89a-b171159b5184":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Aadhar","Voter Id","Passport","Driving License","Electricity Bill"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"9ba9a8bb-cdef-4012-b456-7171159bcab4":{"type":"group","properties":{"conjunction":"AND"},"children1":{"8baa9a89-89ab-4cde-b012-3171159bcab5":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Income Documents"],"valueSrc":["value"],"valueType":["select"]}},"8a9abb9b-4567-489a-bcde-f171159bf552":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["3 Salary slips","Salary Certificate","Latest form 16"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"a989ab8a-0123-4456-b89a-b171159c5cdc":{"type":"group","properties":{"conjunction":"AND"},"children1":{"989abab9-cdef-4012-b456-7171159c5cdc":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Banking Documents"],"valueSrc":["value"],"valueType":["select"]}},"b8b8ab89-89ab-4cde-b012-3171159c8cfe":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Last 6 months bank statement"]],"valueSrc":["value"],"valueType":["multiselect"]}}}},"ab8b8899-4567-489a-bcde-f171159cf3cb":{"type":"group","properties":{"conjunction":"AND"},"children1":{"98a88a9a-0123-4456-b89a-b171159cf3cc":{"type":"rule","properties":{"field":"qty","operator":"select_equals","value":["Property Documents"],"valueSrc":["value"],"valueType":["select"]}},"998a9988-cdef-4012-b456-7171159d21fd":{"type":"rule","properties":{"field":"color","operator":"select_any_in","value":[["Copy of original sale deed","Allotment-possession","NOC from society"]],"valueSrc":["value"],"valueType":["multiselect"]}}}}}}



export default class RuleEnginePopup2 extends Component {

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