// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import React, { Component } from 'react';
import Axios from 'axios';
import { Bar, Doughnut, Line, Pie, Polar } from 'react-chartjs-2';
import { ButtonDropdown, ButtonGroup, Card, CardBody, CardHeader, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Progress, Row, Table } from 'reactstrap';
import UserContext from '../../UserContext';
import "./Dashboard.css"

const brandPrimary = "#007bff"
const brandInfo = "#17a2b8";

// Card Chart 1
const cardChartData1 = {
  labels: ['Mortgage Loan', 'Personal Loan', 'Auto Loan', 'Home Loan'],
  datasets: [
    {
      label: 'Pending Cases',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [100, 500, 230, 670],
    },
  ],
};

const pie = {
  labels: [
    'Within SLA',
    'At Risk',
    'SLA Breached',
  ],
  datasets: [
    {
      data: [35, 5, 10],
      backgroundColor: [
        '#36A2EB',
        '#FFCE56',
        '#FF6384',
      ],
      hoverBackgroundColor: [
        '#36A2EB',
        '#FFCE56',
        '#FF6384',
      ],
    }],
};

const polar = {
  datasets: [
    {
      data: [
        23,
        4,
        12,
        6,
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#36A2EB',
      ],
      label: 'My dataset' // for legend
    }],
  labels: [
    'T',
    'T+1',
    'T+3',
    '>T+3',
  ],
};

const options = {
  // tooltips: {
  //   enabled: false,
  //   custom: CustomTooltips
  // },
  maintainAspectRatio: false
}


const doughnut = {
  labels: [
    'Auto',
    'Personal',
    'Home',
    'Mortgage',
  ],
  datasets: [
    {
      data: [4, 23, 2, 6],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

const cardChartOpts1 = {
  // tooltips: {
  //   enabled: false,
  //   custom: CustomTooltips
  // },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['Auto Loan', 'Home Loan', 'Personal Loan', 'Mortgage Loan'],
  datasets: [
    {
      label: 'Summary',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [36, 14, 27, 23],
    },
  ],
};

const cardChartOpts2 = {
  // tooltips: {
  //   enabled: true,
  //   // custom: CustomTooltips
  // },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['Apruary', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "October", "Novemeber", "Marember"],
  datasets: [
    {
      label: 'Completed Cases',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [250, 275, 240, 260, 270, 230, 280, 230, 225, 250, 245, 290],
    },
  ],
};

const cardChartOpts3 = {
  // tooltips: {
  //   enabled: false,
  //   custom: CustomTooltips
  // },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['Apruary', 'February', 'March', 'April', 'May', 'June', 'July', "August", "September", "October", "Novemeber", "Marember"],
  datasets: [
    {
      label: 'Rejectedd Cases',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [10, 15, 12, 20, 8, 5, 12, 30, 15, 8, 40, 6],
    },
  ],
};

const cardChartOpts4 = {
  // tooltips: {
  //   enabled: false,
  //   custom: CustomTooltips
  // },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};





// sparkline charts



// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}



class Dashboard extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      taskList: [],
      userN: '',
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  //Get task list 

  componentDidMount() {
    const user = this.context;

    console.log(JSON.stringify(user));
    console.log(user);
    console.log(user.user.name);
    this.setData(user.user.name);
    Axios.get(`/rest/bpm/wle/v1/tasks?savedSearch=My_Task_List&interaction=claimed_and_available&filterByCurrentUser=false&calcStats=false`, {
      // Axios looks for the `auth` option, and, if it is set, formats a
      // basic auth header for you automatically.
      auth: {
        username: 'deadmin',
        password: 'Password123'
      }
    })
      .then(res => {
        console.log('My Task List Result')
        console.dir(res);
      })
  }

  setData = (e) => {

    this.setState({
      userN: e,
    })
    console.log("value of user state2 " + this.state.userN);
  }




  render() {

    return (
      <div className="container animate fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0 i-white" color="transparent">
                      <i className="fa fa-cog i-white"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Fetch Cases</DropdownItem>
                      <DropdownItem>Detail Summary</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">100</div>
                <div>Case Pending Documents</div>
              </CardBody>
              <div className="chart-wrapper mx-3 height-100" >
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle caret className="p-0 i-white" color="transparent">
                      <i className="fa fa-cog i-white"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Get Auto Loan Cases</DropdownItem>
                      <DropdownItem>Get Home Loan Cases</DropdownItem>
                      <DropdownItem>Get Persoanl Loan Cases</DropdownItem>
                      <DropdownItem>Get Mortgage Loan Cases</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">1554</div>
                <div>In Progress Cases</div>
              </CardBody>
              <div className="chart-wrapper mx-3 height-100" >
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs={12} sm={6} lg={3}>
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0 i-white" color="transparent">
                      <i className="fa fa-cog i-white"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Monthly Summary</DropdownItem>
                      <DropdownItem>Yearly Summary</DropdownItem>
                      <DropdownItem>Daily Summary</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">500</div>
                <div>Completed Cases</div>
              </CardBody>
              <div className="chart-wrapper height-100" >
                <Bar data={cardChartData3} options={cardChartOpts3} height={100} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0 i-white" color="transparent">
                      <i className="fa fa-cog i-white"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Monthly Summary</DropdownItem>
                      <DropdownItem>Yearly Summary</DropdownItem>
                      <DropdownItem>Daily Summary</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">186</div>
                <div>Rejected Cases</div>
              </CardBody>
              <div className="chart-wrapper mx-3 height-100" >
                <Bar data={cardChartData4} options={cardChartOpts4} height={100} />
              </div>
            </Card>
          </Col>
        </Row>

        {this.state.userN == 'Sales_1' ? (<Row>
          <Col >
            <Card>
              <CardHeader>
                My Logged In Cases
              </CardHeader>
              <CardBody>
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                    <tr>
                      <th>Last Actioned By</th>
                      <th className="text-center">Product</th>
                      <th>Progress</th>
                      <th className="text-center">Due Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>Dev</div>
                        <div className="small text-muted">
                          Initiated : Mar 1, 2019
                      </div>
                      </td>
                      <td className="text-center">
                        Home Loan
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>20%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Mar 1, 2019 - Mar 5, 2019</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="danger" value="20" />
                      </td>
                      <td className="text-center">
                        <small className="text-muted">Mar 20, 2019</small>
                      </td>
                      <td>
                        <div className="small text-muted">Customer Insufficiency</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Anand</div>
                        <div className="small text-muted">
                          Initiated : Mar 1, 2019
                      </div>
                      </td>
                      <td className="text-center">
                        Car Loan
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>100%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Mar 1, 2019 - Mar 5, 2019</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="danger" value="100" />
                      </td>
                      <td className="text-center">
                        <small className="text-muted">Mar 15, 2019</small>
                      </td>
                      <td>
                        <div className="small text-muted">Rejected</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Ganesh</div>
                        <div className="small text-muted">
                          Initiated : Apr 1, 2020
                      </div>
                      </td>
                      <td className="text-center">
                        Home Loan
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Apr 1, 2020 - Apr 3, 2020</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="10" />
                      </td>
                      <td className="text-center">
                        <small className="text-muted">Apr 20, 2020</small>
                      </td>
                      <td>
                        <div className="small text-muted">Documents Pending</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Naveen</div>
                        <div className="small text-muted">
                          Initiated : Mar 25, 2020
                      </div>
                      </td>
                      <td className="text-center">
                        Home Loan
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>50%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Mar 25, 2020 - Apr 02, 2020</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="success" value="50" />
                      </td>
                      <td className="text-center">
                        <small className="text-muted">Apr 20, 2020</small>
                      </td>
                      <td>
                        <div className="small text-muted">Verification Pending</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>Ganesh</div>
                        <div className="small text-muted">
                          Initiated : Apr 2, 2020
                      </div>
                      </td>
                      <td className="text-center">
                        Home Loan
                      </td>
                      <td>
                        <div className="clearfix">
                          <div className="float-left">
                            <strong>10%</strong>
                          </div>
                          <div className="float-right">
                            <small className="text-muted">Apr 2, 2020 - Apr 3, 2020</small>
                          </div>
                        </div>
                        <Progress className="progress-xs" color="info" value="10" />
                      </td>
                      <td className="text-center">
                        <small className="text-muted">Apr 18, 2020</small>
                      </td>
                      <td>
                        <div className="small text-muted">Documents Pending</div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>) : (
            <Row>
            </Row>

          )}
        <Row className="top-buffer-d">
          <Col xs={6} sm={4}>
            <Card>
              <CardHeader>
                My SLA
            </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Pie data={pie} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={6} sm={4}>
            <Card>
              <CardHeader>
                Ageing
            </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Polar data={polar} options={options} />
                  {/* <Polar data={polar} /> */}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={6} sm={4}> <Card>
            <CardHeader>
              My Open Cases
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Doughnut data={doughnut} />
              </div>
            </CardBody>
          </Card></Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
