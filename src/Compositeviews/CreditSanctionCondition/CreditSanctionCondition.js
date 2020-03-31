import React, { Component } from 'react';
import { useContext, useState, useEffect, useRef } from 'react';
import 'antd/dist/antd.css';
import { Table, Input, Button, Popconfirm, Form,Select} from 'antd';


const EditableContext = React.createContext();

const EditableRow = ({ form,index, ...props }) => (
<EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>

)
  
const EditableFormRow = Form.create()(EditableRow);
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};




export default class  CreditSanctionCondition extends Component {

   constructor(props) {
    super(props);
    this.columns = [
     
      {
        title: 'CovenantCondition',
        dataIndex: 'CovenantCondition',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <span>
          <Select style={{width:'25% !important'}}>
            <Select.Option value="1">Program Norms Not Met</Select.Option>
            <Select.Option value="2">Banking not satisfactory</Select.Option>
            <Select.Option value="3">Low eligibility </Select.Option>
            <Select.Option value="4">Derogatory history </Select.Option>
            <Select.Option value="5">Others Reasons(Sanction Conditions)</Select.Option>
          </Select>
        </span>
          ) : null,
        
      },
      
      {
        title: 'Operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          CovenantCondition: 'Program Norms Not Met',
        },
        
      ],
      count: 1,
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      CovenantCondition: '',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        
        
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>
      </div>
    );
  }
}

