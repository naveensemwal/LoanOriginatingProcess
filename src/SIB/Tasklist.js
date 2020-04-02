import { CircularProgress, Typography } from '@material-ui/core';
import Axios from 'axios';
import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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
        Axios.post(`/rest/bpm/wle/v1/service/SIBATMP%40Fetch%20Vendor%20Tasks?action=start&createTask=false&parts=all`, {
            auth: {
                username: 'p8admin',
                password: 'Password123'
            }
        })
            .then(res => {
                console.dir(res.data.data.data.taskList.items);
                this.setState({ data: res.data.data.data.taskList.items, isLoading: false, count: res.total });
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
                username: 'p8admin',
                password: 'Password123'
            }
        })
            .then(res => {
                this.getData();
            })
    }
    getMuiTheme = () => createMuiTheme({
        overrides: {
          MUIDataTableBodyCell: {
            root: {
              backgroundColor: "#FF0000"
            }
          }
        }
      })

    render() {
        const columns = [
        {
            name: "requestID",
            label: "Request ID",
            options: {
                filter: false,
                
               
            }
        },
        {
            name: "status",
            label: "Status",
            options: {
                filter: true,
            }
        },
        {
            name: "atmID",
            label: "ATM ID",
            options: {
                filter: false,
            }
        },
        {
            name: "issueCategory",
            label: "Issue Category",
            options: {
                filter: true,
            }
        },
        {
            name: "issueSubcategory",
            label: "Issue Sub-Category",
            options: {
                filter: false,
            }
        },
        ];
        const { data,isLoading } = this.state;
        const options = {
            filter: true,
            filterType: 'dropdown',
            // responsive: 'stacked',
            rowHover: true,
            selectableRows:'none',
            setTableProps: () => {
                return {                 
                        padding:'2px',
                        size:'small',
                };
              }
      };
        return (
            <div>
                <MUIDataTable title={<Typography variant="h6" component="h2" style={{color:'#7adafb'}}>ATM Complaints
                {isLoading && <CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }} />}
                </Typography>
                } data={data} columns={columns} options={options} />
            </div>
        )
    }
}
