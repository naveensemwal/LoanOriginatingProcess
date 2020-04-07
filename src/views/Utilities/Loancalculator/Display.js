import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayChild from "./DisplayChild";
import Icon from '@material-ui/core/Icon';

class Display extends Component {
  state = {
    APR: 0.08
  };

  componentDidMount() {
    this.calculateAPR();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateAPR();
    }
  }

  calculateAPR = () => {
    const { amount } = this.props;

    if (10000 < amount && amount < 50000) {
      this.setState({ APR: 0.08 });
    }
    if (50000 < amount && amount < 100000) {
      this.setState({ APR: 0.08 });
    }
    if (100000 < amount && amount < 150000) {
      this.setState({ APR: 0.08 });
    }
    if (150000 < amount && amount < 250000) {
      this.setState({ APR: 0.08 });
    }
    if (250000 < amount && amount < 350000) {
      this.setState({ APR: 0.08 });
    }
    if (350000 < amount && amount < 500000) {
      this.setState({ APR: 0.08 });
    }
  };

  calculateMonthlyRepayment = () => {
    const { amount, years } = this.props;

    const decimalFormat = this.state.APR + 1;
    const totalOwed = decimalFormat * amount;
    const monthlyRepayment = totalOwed / (years * 12);

    return <p> <Icon className="fa fa-inr" /> {Math.round(monthlyRepayment)}</p>;
  };

  percentageAPR = () => {
    return <p>{this.state.APR * 100}%</p>;
  };

  render() {
    return (
      <div className="flex">
        <DisplayChild func={this.percentageAPR()} text="interest rate" />
        <DisplayChild
          func={this.calculateMonthlyRepayment()}
          text=" monthly repayment"
        />
      </div>
    );
  }
}

Display.propTypes = {
  years: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

export default Display;