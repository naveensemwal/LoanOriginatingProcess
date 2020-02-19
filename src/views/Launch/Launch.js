import React, { Component } from 'react'
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  message,
  Input,
} from 'antd';
import "antd/dist/antd.css";

const { Option } = Select;


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default class Launch extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

 

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const panButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">PAN</div>
      </div>
    );

    const { imageUrl } = this.state;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '91',
    })(
      <Select style={{ width: 70 }}>
        <Option value="91">+91</Option>
        <Option value="971">+971</Option>
      </Select>,
    );
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 6,
        },
      },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Upload
                name="PAN"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : panButton}
              </Upload>
        </Form.Item>
        <Form.Item label="Are you an existing Bank customer?">
          {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch />)}
        </Form.Item>
        <Form.Item
          label='Name'
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
        </Form.Item>
        <Form.Item label="Salaried">
          {getFieldDecorator('switch', { valuePropName: 'salaried' })(<Switch />)}
        </Form.Item>
        <Form.Item label="Net Monthly Income" hasFeedback>
          {getFieldDecorator('monthlyIncome', {
            rules: [{ required: true, message: 'Please select monthly income!' }],
          })(
            <Select placeholder="Net Monthly Income">
              <Option value="1">20,000-40,000</Option>
              <Option value="2">40,000-60,000</Option>
              <Option value="3">60,000-80,000</Option>
              <Option value="4">80,000 and Above</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="Loan Type" hasFeedback>
          {getFieldDecorator('loanType', {
            rules: [{ required: true, message: 'Select Loan Type!' }],
          })(
            <Select placeholder="Loan Type">
              <Option value="1">Home Loan</Option>
              <Option value="2">Personal Loan</Option>
              <Option value="3">Car Loan</Option>
              <Option value="4">Mortgage Loan</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {
            valuePropName: 'checked',
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

Launch = Form.create({ name: "yourFormName" })(Launch)