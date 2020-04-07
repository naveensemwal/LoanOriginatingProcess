import {
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
  Table,
  Tag
} from "antd";
import React, { Component } from "react";
import { render } from "react-dom";
import { nominalTypeHack } from "prop-types";
import MultipleDatePicker from "react-multiple-datepicker";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const disp_non = {
  display: "none"
};

const data = [
  {
    key: "1",
    InstallmentNumber: "12",
    DueDate: "2feb",
    OpeningPrincipalRs: "aa",
    InstallmentAmountRs: "120",
    PrincipalComponentofInstallmentRs: "hh",
    Interes: "aa"
  },
  {
    key: "2",
    InstallmentNumber: "12",
    DueDate: "2feb",
    OpeningPrincipalRs: "aa",
    InstallmentAmountRs: "120",
    PrincipalComponentofInstallmentRs: "hh",
    Interes: "aa"
  }
];
export default class DisbursementDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disbursementTableData: [],
      isLoaded: true,
      error: false,
      columnData: [],
      isSingle: false
    };
    //this.isSingle = true;
  }
  disbursementTypeChange = e => {
    //let value = e.target.value;
    console.log(e);
    let value = "";
    if (e == "homeLoan") {
      this.setState({
        isSingle: false
      });
    } else {
      this.setState({ isSingle: true });
    }
  };
  componentDidMount() {
    const columns = [
      {
        title: "Installment Number",
        dataIndex: "InstallmentNumber",
        key: "InstallmentNumber"
        //render : text => <a>{text}</a>
      },
      {
        title: "Due Date",
        dataIndex: "DueDate",
        key: "DueDate"
      },
      {
        title: "Opening Principal (Rs.)",
        dataIndex: "OpeningPrincipalRs",
        key: "OpeningPrincipalRs"
      },
      {
        title: "Installment Amount (Rs.)",
        dataIndex: "InstallmentAmountRs",
        key: "InstallmentAmountRs"
      },
      {
        title: "Principal Component of Installment (Rs.)",
        dataIndex: "PrincipalComponentofInstallmentRs",
        key: "PrincipalComponentofInstallmentRs"
      },
      {
        title: "Interest Component of Installment(Rs.)",
        dataIndex: "Interes",
        key: "Interes"
      },
      {
        title: "Closing Principal (Rs.)",
        dataIndex: "ClosingPrincipalRs",
        key: "ClosingPrincipalRs"
      },
      {
        title: "Rate Of interest p.a.",
        dataIndex: "RateOfInterestPA",
        key: "RateOfInterestPA"
      }

    ];
    const data = 
    [{
        "key": "1",
        "InstallmentNumber": "12",
        "DueDate": "12/5/2020",
        "OpeningPrincipalRs": "23,90,221",
        "InstallmentAmountRs": "23,793",
        "PrincipalComponentofInstallmentRs": "1,584",
        "Interes": "22,209",
        "ClosingPrincipalRs":"23,88,667",
        "RateOfInterestPA":"11.50%"
    }, 
    {
        "key": "2",
        "InstallmentNumber": "2",
        "DueDate": "13/5/2020",
        "OpeningPrincipalRs": "23,88,637",
        "InstallmentAmountRs": "23,793",
        "PrincipalComponentofInstallmentRs": "902",
        "Interes": "22,891",
        "ClosingPrincipalRs":"23,87,735",
        "RateOfInterestPA":"11.50%"
    }, {
        "key": "3",
        "InstallmentNumber": "3",
        "DueDate": "12/5/2020",
        "OpeningPrincipalRs": "23,87,735",
        "InstallmentAmountRs": "23,793",
        "PrincipalComponentofInstallmentRs": "911",
        "Interes": "22,882",
        "ClosingPrincipalRs":"23,86,824",
        "RateOfInterestPA":"11.50%"
    }, {
        "key": "4",
        "InstallmentNumber": "4",
        "DueDate": "12/4/2020",
        "OpeningPrincipalRs": "23,86,824",
        "InstallmentAmountRs": "23,793",
        "PrincipalComponentofInstallmentRs": "919",
        "Interes": "22,874",
        "ClosingPrincipalRs":"23,85,905",
        "RateOfInterestPA":"11.50%"
    }, {
        "key": "5",
        "InstallmentNumber": "5",
        "DueDate": "12/5/2020",
        "OpeningPrincipalRs": "23,85,905",
        "InstallmentAmountRs": "23,793",
        "PrincipalComponentofInstallmentRs": "928",
        "Interes": "22,865",
        "ClosingPrincipalRs":"23,84,977",
        "RateOfInterestPA":"11.50%"
    }, {
        "key": "6",
        "InstallmentNumber": "6",
        "DueDate": "12/6/2020",
        "OpeningPrincipalRs": "23,84,977",
        "InstallmentAmountRs": "24,225",
        "PrincipalComponentofInstallmentRs": "375",
        "Interes": "23,850",
        "ClosingPrincipalRs":"23,84,602",
        "RateOfInterestPA":"12.50%"
    },
    {
      "key": "7",
      "InstallmentNumber": "7",
      "DueDate": "12/7/2020",
      "OpeningPrincipalRs": "23,84,602",
      "InstallmentAmountRs": "24,697",
      "PrincipalComponentofInstallmentRs": "354",
      "Interes": "24,343",
      "ClosingPrincipalRs":"23,84,248",
      "RateOfInterestPA":"12.25%"
  }];
    this.setState({
      isLoaded: true,
      disbursementTableData: data,
      columnData: columns
    });
    // fetch("http://localhost:4200/")
    // .then(response => response.json())
    //   .then(
    //     (result) => {
    //         setTimeout(
    //             function() {
    //                 this.setState({
    //                     isLoaded: true,
    //                     disbursementTableData: result,
    //                     columnData:columns
    //                   });
    //             }
    //             .bind(this),
    //             3000
    //         );

    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }
  render() {
    //this.setState.columData = columns;
    return (
      <div>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            <Form.Item label="Disbursement Type">
              <Select
                defaultValue="homeLoan"
                onChange={this.disbursementTypeChange}
                hidden="isSingle"
              >
                <Select.Option selected value="homeLoan">
                  Single
                </Select.Option>
                <Select.Option value="autoLoan">Multiple</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Final Documentation Status ">
              <Select hidden="isSingle">
                <Select.Option value="scheme1">
                  Documentation Complete
                </Select.Option>
                <Select.Option value="scheme2">
                  Customer’s Signature Pending
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            {this.state.isSingle ? (
              <Form.Item label="No of Tranches  :">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row gutter={[8, 8]}>
          <Col span={8}>
            {this.state.isSingle ? (
              <Form.Item label="Pre EMI ">
                <Input suffix="%" />
              </Form.Item>
            ) : (
              <Form.Item label="Expected Disbursement Date ">
              <DatePicker
                onchange={onChange}
                style={{ width: "100%" }}
              ></DatePicker>
            </Form.Item>
            )}
          </Col>
         
          <Col span={8}>
            <div className="multiple_date_field">
              {this.state.isSingle ? (
                <Form.Item label="Multiple Date">
                  <MultipleDatePicker
                    style={{ width: "100%" }}
                    onSubmit={dates => console.log("selected dates ", dates)}
                  />
                </Form.Item>
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
        <div></div>

        <Table
          columns={this.state.columnData}
          dataSource={this.state.disbursementTableData}
          bordered
        />
      </div>
    );
  }
}
