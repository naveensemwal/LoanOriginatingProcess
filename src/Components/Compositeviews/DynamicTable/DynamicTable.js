import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Container, Row, Col, Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input } 
from 'reactstrap';

class DynamicTable extends Component {
 
    constructor(props) {
        super(props);
        this.defaultOption = { "id": "-1", "value": "" };
        this.state = {
            startDate: moment(),
            question: "",
            options: [this.defaultOption]
        }        
          this.handleChange = this.handleChange.bind(this);
        }
 
 
    handleChange = (e) => {
        let { id, value } = e.target;
        this.setState({ [id]: value })
    }
 
    handleOptionsChange = (index, e, date,dateString) => {
        this.setState({
            startDate: date
          });
          console.log(this.state.startDate);
       //  let { id, value } = e.target;
      //let value=e.format();
         console.log(index);
        console.log(e);
        console.log(e.format());
     
         let stateOptionsClone = JSON.parse(JSON.stringify(this.state.options));
         console.log(stateOptionsClone);
       //  stateOptionsClone[index].value = value;
         //this.setState({ options: stateOptionsClone });
    }
 
    handleSave = (e) => {
        e.preventDefault();
    }
 
    resetQuestion = () => {
        let emptyQuestion = "";
        return emptyQuestion
    }
 
    resetOptions = (options) => {
        let emptyOptions = options.map(
            (data) => {
                data.value = '';
                return data;
            }
        )
        return emptyOptions;
    }
 
    handleReset = (e) => {
        let stateClone = JSON.parse(JSON.stringify(this.state));
        let emptyQuestion = this.resetQuestion();
        let emptyOptions = this.resetOptions(stateClone.options);
        this.setState({ question: emptyQuestion, options: emptyOptions });
        e.preventDefault();
    }
 
    handleDelete = (index, e) => {
        let stateClone = JSON.parse(JSON.stringify(this.state.options));
        stateClone.splice(index, 1);
        this.setState({ options: stateClone });
        e.preventDefault();
    }
 
    handleClick = (e) => {
        let stateClone = JSON.parse(JSON.stringify(this.state));
        stateClone.options.push(this.defaultOption);
        this.setState({ options: stateClone.options });
        e.preventDefault();
    }
 
    customRow = (options) => {
        const listItems = options.map((cusRow, index) =>
            <FormGroup row key={index}>
                <Label for="options" sm={3} className="text-right">Options {index + 1}</Label>
                <Col sm={7}>
                    {/* <Input type="text" name="options" id="options" value={cusRow.value} 
onChange={(e) => this.handleOptionsChange(index, e)} /> */}
  {/* <DatePicker  name="options" id="options" value={cusRow.value} 
onChange={(e) => this.handleOptionsChange(index, e)} style={{width:'100%'}}></DatePicker> */}

<DatePicker
          placeholderText="Click to select a date" 
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="LLL"
          timeCaption="time"          
  maxDate={moment().add(5, "months")}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          todayButton={"TODAY"}
          />
    
                </Col>
                


                <Col sm={1}>
                    <Button color="primary" onClick={(e) => this.handleDelete(index, e)}>X</Button>
                </Col>
 
            </FormGroup>
        );
        return (
            listItems
        )
    }
 
    render() {
        let { question, options } = this.state;
        return (
            <Container>
                <Row>
                    <Col sm="10">
                        <Card>
                            <CardBody>
                                <CardTitle className="text-center">
                                        Question Bank
                                </CardTitle>
                            </CardBody>
                            <CardBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="question" sm={3} className="text-right">
Question</Label>
                                        <Col sm={7}>
                                            <Input type="text" name="question" id="question" 
value={question} onChange={this.handleChange} />
                                        </Col>
                                    </FormGroup>
 
                                    {this.customRow(options)}
 
                                    <FormGroup row>
                                        <Col sm={{ size: 10 }}>
                                            <Button color="primary" className="float-right" 
onClick={this.handleClick} >Add</Button>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="options" sm={3}></Label>
                                        <Col sm={7}>
                                            <Button color="primary" onClick={this.handleSave}>
Save</Button> &nbsp;
                            <Button color="primary" onClick={this.handleReset}>Reset</Button>
                                        </Col>
                                    </FormGroup>
 
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
 
export default DynamicTable;