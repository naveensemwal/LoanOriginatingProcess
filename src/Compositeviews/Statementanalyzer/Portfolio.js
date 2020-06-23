import React from "react";
import Widget from "./index";
import {Button, Col, Row} from "antd";
import LineIndicator from "./LineIndicator";

const Portfolio = () => {
  return (
    <Widget>
      <h2 className="h4 gx-mb-3">Your Statement Analysis</h2>
      <Row>
        <Col lg={12} md={12} sm={12} xs={24}>

          <div className="ant-row-flex">
            <h2 className="gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium">₹704313.91</h2>
            <h4 className="gx-pt-2 gx-chart-up">64% <i className="icon icon-menu-up gx-fs-sm"/></h4>
          </div>
          <p className="gx-text-grey">Average balance</p>
          {/* <div className="ant-row-flex gx-mb-3 gx-mb-md-2">
            <Button className="gx-mr-2" type="primary">Deposit</Button>
            <Button className="gx-btn-cyan">Withdraw</Button>
          </div>

          <p className="gx-text-primary gx-pointer gx-d-none gx-d-sm-block gx-mb-1">
            <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/> Add New Wallet</p> */}
        </Col>
        <Col lg={12} md={12} sm={12} xs={24}>
          <div className="gx-site-dash">
            <h5 className="gx-mb-3">Transaction Distribution</h5>
            <ul className="gx-line-indicator gx-fs-sm gx-pb-1 gx-pb-sm-0">
              <li>
                <LineIndicator width="17%" title="Credit Transaction"  title2="66" color="primary" value="17%"/>
              </li>
              <li>
                <LineIndicator width="70%" title="Debit Transaction" title2="264" color="pink" value="70%"/>
              </li>
              <li>
                <LineIndicator width="4%" title="Cash Transaction" title2="10" color="orange" value="4%"/>
              </li>
              <li>
                <LineIndicator width="8%" title="Cheque Transaction" title2="30" color="green" value="8%"/>
              </li>
              <li>
                <LineIndicator width="1%" title="Loan Debit Transaction" title2="2" color="yellow" value="1%"/>
              </li>
            </ul>
            <p className="gx-text-primary gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3">
              <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/> Add New Wallet
            </p>
          </div>
        </Col>
      </Row>
    </Widget>
  );
};

export default Portfolio;
