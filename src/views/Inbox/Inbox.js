import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row, Table } from 'reactstrap';
import Tasklists from '../../Components/Tasklist/Tasklists';
import usersData from './UsersData';
import Widget04 from './Widget04';
import UserContext from '../../UserContext';

window.React = React;


class Inbox extends React.Component {
  static contextType = UserContext;


  constructor(){
    super();
    this.state={
      userN:'',
  
    }
    
    console.log("value of user state "+this.state.userN); 
  }

  componentDidMount() {
    const user = this.context;

    console.log(JSON.stringify(user)) ;
    console.log(user);
    console.log(user.user.name);
    this.setData(user.user.name);
  }
  
  setData = (e) =>{

    this.setState({
      userN : e,
    })
    console.log("value of user state2 "+this.state.userN); 
  }
  
  

  render() {
  
    const userList = usersData;
   
    return (
      <div className="animated fadeIn">
        
        {this.state.userN == 'Sales_1'?(
        <Row>
        <Col  xs="12" sm="6" lg="3"><Widget04 icon="icon-people" color="info" header="40" value="25">Group Task</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-user" color="success" header="20" value="25">My Task</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-pie-chart" color="primary" header="28%" value="25">OverDue(%)</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-speedometer" color="danger" header="18" value="25">OverDue</Widget04></Col>
        
        </Row>):(this.state.userN == 'Data_Entry_1'?(
          <Row>
          <Col  xs="12" sm="6" lg="3"><Widget04 icon="icon-people" color="info" header="30" value="25">Group Task</Widget04></Col>
          <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-user" color="success" header="25" value="25">My Task</Widget04></Col>
          <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-pie-chart" color="primary" header="38%" value="25">OverDue(%)</Widget04></Col>
          <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-speedometer" color="danger" header="28" value="25">OverDue</Widget04></Col>
          
          </Row>
        ):(this.state.userN == 'Underwriter_1'?(
          <Row>
        <Col  xs="12" sm="6" lg="3"><Widget04 icon="icon-people" color="info" header="20" value="25">Group Task</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-user" color="success" header="10" value="25">My Task</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-pie-chart" color="primary" header="58%" value="25">OverDue(%)</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-speedometer" color="danger" header="48" value="25">OverDue</Widget04></Col>
        
        </Row>
        ):(this.state.userN =='Disbursement_1'?(
          <Row>
        <Col  xs="12" sm="6" lg="3"><Widget04 icon="icon-people" color="info" header="50" value="25">Group Task</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-user" color="success" header="70" value="25">My Task</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-pie-chart" color="primary" header="32%" value="25">OverDue(%)</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-speedometer" color="danger" header="45" value="25">OverDue</Widget04></Col>
        
        </Row>
        ):(
          <Row>
        <Col  xs="12" sm="6" lg="3"><Widget04 icon="icon-people" color="info" header="42" value="25">Group Task</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-user" color="success" header="24" value="25">My Task</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-pie-chart" color="primary" header="54%" value="25">OverDue(%)</Widget04></Col>
        <Col xs="12" sm="6" lg="3"><Widget04 icon="icon-speedometer" color="danger" header="23" value="25">OverDue</Widget04></Col>
        
        </Row>
        ))))}
        
        
            <Tasklists></Tasklists>
         
        
        
      </div>
    )
  }
}

export default Inbox;
