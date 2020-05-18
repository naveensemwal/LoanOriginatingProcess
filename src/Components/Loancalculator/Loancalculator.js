import React, { Component } from "react";
import Display from "./Display";
import "./Loancalculator.css";
import { Slider, InputNumber, Row, Col } from 'antd';

class Loancalculator extends Component {
  state = {
    amountValue: 2500000,
    yearsValue: 20
  };

  handleAmountChange = value => {
    this.setState({ amountValue: value });
  };
  handleYearChange = value => {
    this.setState({ yearsValue: value });
  };

  render() {
    const { amountValue, yearsValue } = this.state;

    return (
      <div className="emicalculator">
        <h4>Loan Amount </h4>
        <h4><i className="fa fa-inr" /> {amountValue} </h4>
        <Slider
          min={10000}
          max={500000}
          onChange={this.handleAmountChange}
          value={typeof amountValue === 'number' ? amountValue : 0}
        />
        <h4>Tenure</h4>
        <h4>{yearsValue} year{yearsValue > 1 && "s"}</h4>
        <Slider
          min={1}
          max={25}
          onChange={this.handleYearChange}
          value={typeof yearsValue === 'number' ? yearsValue : 0}
        />
        <Display years={yearsValue} amount={amountValue} />
      </div>

    );
  }
}

export default Loancalculator;