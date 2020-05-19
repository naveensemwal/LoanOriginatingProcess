import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { List, Avatar,Tooltip } from 'antd';
import { CheckOutlined,MoreOutlined,CaretRightFilled,InsuranceOutlined,LockOutlined,DollarOutlined } from '@ant-design/icons';
const data = [
  {
    title: 'Saving Account',
    description :'Active since Jan 2016',
    accName:'Account Name : Insta Saving Account',
    view: ( <DollarOutlined className="icon_ash"/>),
  },
  {
    title: 'Fixed Deposit Account',
    description :'Active since Jun 2018',
    accName:'Account Name :Fixed Tenor Premium FD Account',
    view: (<LockOutlined className="icon_ash"/>),
  },
  {
    title: 'Term Insurance',
    description :'Active since Aug 2012',
    accName:'Account Name : iProtect Smart',
    view: (<InsuranceOutlined className="icon_ash"/>),
  },
  
];
export default class CustomerRelationship extends Component{

render(){
 return (
   <div>
   <h4>Customer Relationship</h4>
   <List
     itemLayout="horizontal"
     dataSource={data}
     renderItem={item => (
       <List.Item actions={[<Tooltip  placement="topRight" title={item.accName}><MoreOutlined /></Tooltip>]}>
         <List.Item.Meta
           avatar={<Avatar style={{ backgroundColor: '#1890ff' }} icon={<LegacyIcon type={item.view} />} />}
           title={item.title}
           description={item.description}
         />
       </List.Item>
     )}
   />
   </div>
 );
  
    }
}