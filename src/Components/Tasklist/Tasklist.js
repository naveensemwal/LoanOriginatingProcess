import { CircularProgress, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/grid';
import Axios from 'axios';
import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Tasklist extends Component {

    state = {
        page: 0,
        count: 1,
        data: [["Loading your Tasks..."]],
        isLoading: false
    };

    componentDidMount() {
        this.getData();
    }

    // get data
    getData = () => {
        this.setState({ isLoading: true });
        Axios.get(`/rest/bpm/wle/v1/tasks?savedSearch=My_Task_List&interaction=claimed_and_available&filterByCurrentUser=false&calcStats=false`, {
            auth: {
                username: 'naveen',
                password: 'Password123'
            }
        })
            .then(res => {
                
                this.setState({ data: res.data.data.items, isLoading: false, count: res.total });
            })
    }

    completeTask = (taskId,currentStage) => {

        let params='';

        switch(currentStage) {
        case "Sales":
            params = '{"moveTo":"QDE"}';
          break;
        case "Data Entry":
            params = '{"applicationDetails":{"userAction":"ToUnderwriter"}}';
          break;
        case "Underwriter":
            params = '{"applicationDetails":{"userAction":"Completed"}}';
          break;
        default:
            params = "I have never heard of that fruit...";
      }
      let url =`/rest/bpm/wle/v1/task/`+taskId+'?action=complete&params='+params+'&parts=all';
        Axios.put(url, {
            auth: {
                username: 'naveen',
                password: 'Password123'
            }
        })
            .then(res => {
                this.getData();
            })
    }
   

    render() {
        const columns = [{
            name: "",
            Label:"",
            options: {
                filter: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    const { data } = this.state;
                    let rowData=data[tableMeta.rowIndex];
                    let owner = rowData.OWNER;                  
                    let sla= rowData.BDSLA_STATUS;
                    return (
                        <div style={{position:"absolute"}}>
                        <i className={owner !=null ? "fa fa-user fa-sm" :"fa fa-group fa-sm" } style={owner !=null    ? {color:'orange',margin: '4px',float:'left'} :{color:'green', margin: '4px',float:'left'}}></i>
                        <i className={(sla==='At Risk')?"fa fa-warning fa-sm": (sla==='Breach')?"fa fa-exclamation fa-sm":""} style={(sla==='At Risk')?{color:'orange',margin: '4px',float:'right'}: (sla==='Breach')?{color:'red', margin: '4px',float:'right'}:{}}></i>
                        </div>
                    );
                  }
            }
        },
        
        {
            name: "BDLOAN_TYPE",
            label: "Loan Type",
            options: {
                filter: true,
               
            }
        },
        {
            name: "BDSLA_STATUS",
            label: "Status",
            options: {
                filter: true,
            }
        },
        {
            name: "PI_CREATE",
            label: "Creation Date",
            options: {
                filter: false,
            }
        },
        {
            name: "BDLOAN_AMOUNT_L_A_P",
            label: "Ammount",
            options: {
                filter: false,
            }
        },
        {
            name: "TAD_DISPLAY_NAME",
            label: "Stage",
            options: {
                filter: true,
            }
        },
        {
            name: "BDLOAN_NUMBER",
            label: "Loan Number",
            options: {
                filter: false,
            }
        },
        {
            name: "BDDUE_DATE",
            label: "Due Date",
            options: {
                filter: false,
            }
        },
        {
            name: "BDCUSTOMER_NAME",
            label: "Customer  Name",
            options: {
                filter: false,
            }
        },
        {
            name: "Action",
            options: {
              filter: false,
              sort: false,
              empty: true,
              customBodyRender: (value, tableMeta, updateValue) => {
               const { data } = this.state;
               let rowData=data[tableMeta.rowIndex];
               let currentStage=rowData.TAD_DISPLAY_NAME;
               console.log("Current Stage" + currentStage);
               
                return (
                <Link to={currentStage==='Underwriter'?'/Workflow/DSA/Underwriter':'/Workflow/DSA/DDE'} className="fa fa-play"></Link>
                );
              }
            }
          },

        ];
        const { data,isLoading } = this.state;
        const options = {
            filter: true,
            filterType: 'dropdown',
            responsive: 'stacked',
            rowHover: true,
            setTableProps: () => {
                return {                 
                        padding:'2px',
                        size:'small',
                };
              }
      };
        return (
            <div>
                <MUIDataTable title={<Typography variant="title">
                {isLoading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
                </Typography>
                } data={data} columns={columns} options={options} />
            </div>
        )
    }
}