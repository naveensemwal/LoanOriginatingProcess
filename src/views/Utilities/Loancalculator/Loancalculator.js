import React, { Component } from "react";
import InputRange from "react-input-range";
import Display from "./Display";
import "./Loancalculator.css";
import "react-input-range/lib/css/index.css";
import Icon from '@material-ui/core/Icon';

class Loancalculator extends Component {
  state = {
    amountValue: 500000,
    yearsValue: 5
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
       
        <div className="col-lg-12 col-sm-12 col-xs-12 row">
        <div className="col-md-3 col-sm-3 col-xs-3">  
        <label className='emilabel'>Loan Amount </label>
        </div>
       
        <div className="col-md-7 col-sm-7 col-xs-7"> 
        <InputRange
          step={10000}
          maxValue={500000}
          minValue={10000}
          value={amountValue}
         
          onChange={this.handleAmountChange}
        />
        </div>
        <div className="col-md-2 col-sm-2 col-xs-2">  
        <label className="emilabel_val"><Icon className="fa fa-inr" /> {amountValue} </label>
        </div>
        </div>
       
       
        <div className="col-lg-12 col-sm-12 col-xs-12 row">
        <div className="col-md-3 col-sm-3 col-xs-3">  
         <label className='emilabel'>Tenure</label>
         </div>
         <div className="col-md-7 col-sm-7 col-xs-7"> 
        <InputRange
          step={0.5}
          maxValue={5}
          minValue={1}
         
          value={yearsValue}
          onChange={this.handleYearChange}
        />
        </div>
         <div className="col-md-2 col-sm-2 col-xs-2"> 
        <label className='emilabel_val'>{yearsValue} year{yearsValue > 1 && "s"}</label>
        </div>
       
        </div>
      
        <Display years={yearsValue} amount={amountValue} />
      </div>
      
    );
  }
}

export default Loancalculator;