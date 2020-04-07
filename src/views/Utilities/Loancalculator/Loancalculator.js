import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import "./Loancalculator.css";
import "react-input-range/lib/css/index.css";
import Icon from '@material-ui/core/Icon';

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
        <h4><Icon className="fa fa-inr" /> {amountValue} </h4>
        <InputRange
          step={10000}
          maxValue={500000}
          minValue={10000}
          value={amountValue}
          onChange={this.handleAmountChange}
        />
        <h4>Tenure</h4>
        <h4>{yearsValue} year{yearsValue > 1 && "s"}</h4>
        <InputRange
          step={0.5}
          maxValue={25}
          minValue={1}
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        <Display years={yearsValue} amount={amountValue} />
      </div>
      
    );
  }
}

export default Loancalculator;