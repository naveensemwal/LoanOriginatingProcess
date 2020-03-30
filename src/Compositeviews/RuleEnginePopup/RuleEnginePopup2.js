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
      label: 'CustomerSegment',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'SelfEmployed', title: 'Self Employed'},
        { value: 'Salaried', title: 'Salaried' },
     ],
    },
	
	EmpCat: {
      label: 'Employer Category',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'SalariedCatSA', title: 'Salaried Cat SA'},
        { value: 'SalariedCatA', title: 'Salaried Cat A' },
        { value: 'SalariedCatB', title: 'Salaried Cat B' },
		{ value: 'SalariedCatC', title: 'Salaried Cat C' },
		{ value: 'SalariedCatD', title: 'Salaried Cat D' },
     ],
    },
	

   EmailId: {
      label: 'Official Email Id Verified?',
      type: 'select',
      valueSources: ['value'],
      listValues: [
        { value: 'Yes', title: 'Yes' },
        { value: 'No', title: 'No' },
		
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

const data={"id":"988889ab-cdef-4012-b456-717129d0f35f","type":"group","children1":{"aa8888ab-0123-4456-b89a-b17129d2ca48":{"type":"group","properties":{"conjunction":"AND"},"children1":{"9a899bbb-cdef-4012-b456-717129d2ca5f":{"type":"rule","properties":{"field":"Category","operator":"select_equals","value":["Premium"],"valueSrc":["value"],"valueType":["select"]}},"b898a99b-4567-489a-bcde-f17129d3944d":{"type":"rule","properties":{"field":"EmpCat","operator":"select_any_in","value":[["SalariedCatSA","SalariedCatA","SalariedCatB"]],"valueSrc":["value"],"valueType":["multiselect"]}},"bb88b988-0123-4456-b89a-b17129d3f5ba":{"type":"rule","properties":{"field":"LoanAmt","operator":"less","value":[10000000],"valueSrc":["value"],"valueType":["number"]}},"b8abbaa9-cdef-4012-b456-717129d448d5":{"type":"rule","properties":{"field":"EmailId","operator":"select_equals","value":["Yes"],"valueSrc":["value"],"valueType":["select"]}},"8a88ba88-89ab-4cde-b012-317129d4d999":{"type":"rule","properties":{"field":"Residence","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"88ab9aa9-4567-489a-bcde-f17129d50b2b":{"type":"rule","properties":{"field":"Employment","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"b8b9999b-0123-4456-b89a-b17129d53821":{"type":"rule","properties":{"field":"BusinessRef","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"b99a9bb9-cdef-4012-b456-717129d570c2":{"type":"rule","properties":{"field":"legal","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"89a988bb-89ab-4cde-b012-317129d5ca35":{"type":"rule","properties":{"field":"Property","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}}}},"9b98b88b-4567-489a-bcde-f17129d6257a":{"type":"group","properties":{"conjunction":"AND"},"children1":{"aba89ba8-0123-4456-b89a-b17129d62592":{"type":"rule","properties":{"field":"Category","operator":"select_equals","value":["Premium"],"valueSrc":["value"],"valueType":["select"]}},"9ba89a88-cdef-4012-b456-717129d664b4":{"type":"rule","properties":{"field":"EmpCat","operator":"select_any_in","value":[["SalariedCatSA","SalariedCatA","SalariedCatB"]],"valueSrc":["value"],"valueType":["multiselect"]}},"a999abbb-89ab-4cde-b012-317129d74c9d":{"type":"rule","properties":{"field":"LoanAmt","operator":"less","value":[10000000],"valueSrc":["value"],"valueType":["number"]}},"aa888a8b-4567-489a-bcde-f17129d7eb61":{"type":"rule","properties":{"field":"EmailId","operator":"select_equals","value":["No"],"valueSrc":["value"],"valueType":["select"]}},"9aa9a9bb-0123-4456-b89a-b17129d82688":{"type":"rule","properties":{"field":"Residence","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"9baa9898-cdef-4012-b456-717129d857e1":{"type":"rule","properties":{"field":"Employment","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"a9ba9a89-89ab-4cde-b012-317129d882e1":{"type":"rule","properties":{"field":"BusinessRef","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"aa888aab-4567-489a-bcde-f17129d90436":{"type":"rule","properties":{"field":"legal","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"8a9ab99b-0123-4456-b89a-b17129d9465d":{"type":"rule","properties":{"field":"Property","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}}}},"8aa8989b-cdef-4012-b456-717129d9dfc0":{"type":"group","properties":{"conjunction":"AND"},"children1":{"a9a9ba9a-89ab-4cde-b012-317129d9dfd8":{"type":"rule","properties":{"field":"Category","operator":"select_equals","value":["Premium"],"valueSrc":["value"],"valueType":["select"]}},"a8bb8baa-4567-489a-bcde-f17129da0fb9":{"type":"rule","properties":{"field":"EmpCat","operator":"select_any_in","value":[["SalariedCatSA","SalariedCatA","SalariedCatB"]],"valueSrc":["value"],"valueType":["multiselect"]}},"a88a88b8-0123-4456-b89a-b17129da7d42":{"type":"rule","properties":{"field":"LoanAmt","operator":"greater","value":[10000000],"valueSrc":["value"],"valueType":["number"]}},"8ba99bab-cdef-4012-b456-717129dacb3f":{"type":"rule","properties":{"field":"EmailId","operator":"select_any_in","value":[["Yes"]],"valueSrc":["value"],"valueType":["multiselect"]}},"b9aa9b8a-89ab-4cde-b012-317129db4e1f":{"type":"rule","properties":{"field":"Residence","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"889b8aab-4567-489a-bcde-f17129db8797":{"type":"rule","properties":{"field":"Employment","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"89aba89b-0123-4456-b89a-b17129dbb56a":{"type":"rule","properties":{"field":"BusinessRef","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"a898aba9-cdef-4012-b456-717129dbe075":{"type":"rule","properties":{"field":"legal","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"b88ab988-89ab-4cde-b012-317129dc22d9":{"type":"rule","properties":{"field":"Property","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}}}},"89a98bba-4567-489a-bcde-f17129dc57e0":{"type":"group","properties":{"conjunction":"AND"},"children1":{"baaa98a8-0123-4456-b89a-b17129dc57f7":{"type":"rule","properties":{"field":"Category","operator":"select_equals","value":["Normal"],"valueSrc":["value"],"valueType":["select"]}},"99b9999a-cdef-4012-b456-717129dce36a":{"type":"rule","properties":{"field":"EmpCat","operator":"select_any_in","value":[["SalariedCatA","SalariedCatB","SalariedCatSA"]],"valueSrc":["value"],"valueType":["multiselect"]}},"99aa8ba9-89ab-4cde-b012-317129dd4fb7":{"type":"rule","properties":{"field":"LoanAmt","operator":"less","value":[10000000],"valueSrc":["value"],"valueType":["number"]}},"a8bbaa9a-4567-489a-bcde-f17129dd9c68":{"type":"rule","properties":{"field":"EmailId","operator":"select_any_in","value":[["Yes","No"]],"valueSrc":["value"],"valueType":["multiselect"]}},"9a998b89-0123-4456-b89a-b17129de06cd":{"type":"rule","properties":{"field":"Residence","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"b98ba8b8-cdef-4012-b456-717129de2865":{"type":"rule","properties":{"field":"Employment","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"ba9baab8-89ab-4cde-b012-317129de4e87":{"type":"rule","properties":{"field":"BusinessRef","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"8b88b98a-4567-489a-bcde-f17129de7739":{"type":"rule","properties":{"field":"legal","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"bb9aba9b-0123-4456-b89a-b17129de9b1d":{"type":"rule","properties":{"field":"Property","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}}}},"8aa9b989-cdef-4012-b456-717129dee007":{"type":"group","properties":{"conjunction":"AND"},"children1":{"98babaab-89ab-4cde-b012-317129dee01d":{"type":"rule","properties":{"field":"Category","operator":"select_equals","value":["Normal"],"valueSrc":["value"],"valueType":["select"]}},"8aa9b98b-cdef-4012-b456-717129df7ab6":{"type":"rule","properties":{"field":"EmpCat","operator":"select_any_in","value":[["SalariedCatC","SalariedCatD"]],"valueSrc":["value"],"valueType":["multiselect"]}},"b899a9bb-89ab-4cde-b012-317129dfd1ea":{"type":"rule","properties":{"field":"LoanAmt","operator":"less","value":[10000000],"valueSrc":["value"],"valueType":["number"]}},"89b8baa9-4567-489a-bcde-f17129e03e2d":{"type":"rule","properties":{"field":"EmailId","operator":"select_any_in","value":[["No","Yes"]],"valueSrc":["value"],"valueType":["multiselect"]}},"ba9b8998-0123-4456-b89a-b17129e08058":{"type":"rule","properties":{"field":"Residence","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"ab99a89b-cdef-4012-b456-717129e0e9a6":{"type":"rule","properties":{"field":"Employment","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"8b8b8a99-89ab-4cde-b012-317129e118db":{"type":"rule","properties":{"field":"BusinessRef","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"b8ba8abb-4567-489a-bcde-f17129e13f4e":{"type":"rule","properties":{"field":"legal","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"abaa98bb-0123-4456-b89a-b17129e166ad":{"type":"rule","properties":{"field":"Property","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}}}},"9bab99a9-4567-489a-bcde-f17129def6cf":{"type":"group","properties":{"conjunction":"AND"},"children1":{"988ba8bb-0123-4456-b89a-b17129def6d0":{"type":"rule","properties":{"field":"Category","operator":"select_equals","value":["Normal"],"valueSrc":["value"],"valueType":["select"]}},"9a88abbb-cdef-4012-b456-717129e1e0da":{"type":"rule","properties":{"field":"Segment","operator":"select_equals","value":["SelfEmployed"],"valueSrc":["value"],"valueType":["select"]}},"b989b899-89ab-4cde-b012-317129e2284c":{"type":"rule","properties":{"field":"LoanAmt","operator":"less","value":[10000000],"valueSrc":["value"],"valueType":["number"]}},"9bb8a899-4567-489a-bcde-f17129e2c2b2":{"type":"rule","properties":{"field":"Residence","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"b9a8898b-0123-4456-b89a-b17129e31fc7":{"type":"rule","properties":{"field":"Employment","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"9899abaa-cdef-4012-b456-717129e342ca":{"type":"rule","properties":{"field":"BusinessRef","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"8898aa88-89ab-4cde-b012-317129e369f9":{"type":"rule","properties":{"field":"legal","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"998b9bab-4567-489a-bcde-f17129e39028":{"type":"rule","properties":{"field":"Property","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}}}},"89b8bb88-0123-4456-b89a-b17129e3d56e":{"type":"group","properties":{"conjunction":"AND"},"children1":{"b9b88b8b-cdef-4012-b456-717129e3d584":{"type":"rule","properties":{"field":"Category","operator":"select_equals","value":["Normal"],"valueSrc":["value"],"valueType":["select"]}},"9aba8ab9-89ab-4cde-b012-317129e41aac":{"type":"rule","properties":{"field":"Segment","operator":"select_equals","value":["Salaried"],"valueSrc":["value"],"valueType":["select"]}},"aab9a8a9-4567-489a-bcde-f17129e43dce":{"type":"rule","properties":{"field":"LoanAmt","operator":"greater","value":[10000000],"valueSrc":["value"],"valueType":["number"]}},"bbbbaaa9-0123-4456-b89a-b17129e4ac6a":{"type":"rule","properties":{"field":"EmailId","operator":"select_any_in","value":[["Yes","No"]],"valueSrc":["value"],"valueType":["multiselect"]}},"9aaaa9a8-cdef-4012-b456-717129e50ce9":{"type":"rule","properties":{"field":"Residence","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"babbab9b-89ab-4cde-b012-317129e535ba":{"type":"rule","properties":{"field":"Employment","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"b8a8bbba-4567-489a-bcde-f17129e55b5d":{"type":"rule","properties":{"field":"BusinessRef","operator":"select_equals","value":["N"],"valueSrc":["value"],"valueType":["select"]}},"bb9b9b89-0123-4456-b89a-b17129e5931f":{"type":"rule","properties":{"field":"legal","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}},"99aba9a9-cdef-4012-b456-717129e59896":{"type":"rule","properties":{"field":"Property","operator":"select_equals","value":["Y"],"valueSrc":["value"],"valueType":["select"]}}}}}}



export default class RuleEnginePopup2 extends Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
    tree: QbUtils.checkTree(QbUtils.loadTree(data), config),
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