import { Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    age: 32,
    address: 'New York No. 1 Lake Park',
    Action: this.menu,
  },
  
];

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

ReactDOM.render(
  <Table dataSource={data}>
    
    <Column title="Age" dataIndex="age" key="age" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column
      title="Action"
      key="action"
      render={(text, record) => (
        <Dropdown overlay={menu}>
			this.data.menu
		</Dropdown>
      )}
    />
  </Table>,
  mountNode,
);