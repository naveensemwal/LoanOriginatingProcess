import React, { Component } from 'react';
import { Collapse, Form, Tabs, Card } from 'antd';
import Atmmasterdetails from './Atmmasterdetails';
import Comments from './Comments';
import IssueDetails from './IssueDetails';
import Axios from 'axios';
import "antd/dist/antd.css";

const { Panel } = Collapse;



export default class Complaintdetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params.id;
    // console.dir("id " + this.props.match.params.id);
    this.getData();


  }

  getData = () => {
    console.dir("id " + this.props.match.params.id);
    Axios.get('/rest/bpm/wle/v1/task/'+this.props.match.params.id+'?action=getData&fields=atmSIB', {
      auth: {
        username: 'p8admin',
        password: 'Password123'
      }
    })
      .then(res => {
        
        console.dir(res);
        const complaintData = JSON.parse(res.data.data.result);
        console.dir(complaintData);
        // this.setState({ data: res.data.data.items, isLoading: false, count: res.total });
      })
  }

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

  render() {

    return (

      <Form onSubmit={this.handleSubmit} layout="horizontal" >
        <div className="card-container">
          <Collapse defaultActiveKey={['1']}>
            <Panel header="ATM Master Details" key="1" danger>
              <Atmmasterdetails></Atmmasterdetails>
            </Panel>
            <Panel header="Issue Details" key="2" >
              <IssueDetails></IssueDetails>
            </Panel>
            <Panel header="Comments" key="3" >
              <Comments></Comments>
            </Panel>
          </Collapse>

        </div>
      </Form>
    )
  }
}
