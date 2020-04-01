import Splitter from 'm-react-splitters';
// import 'm-react-splitters/lib/splitters.css';
import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { Input, Table } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import PageviewIcon from '@material-ui/icons/Pageview';

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

// import FileViewer from 'react-file-viewer';

const file = 'http://localhost:8080/viewone/images/tomcat.gif'
const type = 'gif'

export default class Dms extends Component {
    state={viewURL:'',}
    render() {
        return (
          
            <SplitterLayout
    // position="horizontal"
    primaryPaneMaxHeight="100%"
    primaryPaneMinHeight={0}
     primaryPaneHeight="400px"
     style={{height:'500px'}}

>    
   
        <div> <Table responsive bordered size="sm" className="tblDesign2">
                <thead>
                  <tr className="tblTrDesign">
                    <th>Document Category</th>
                    <th>Document Name</th>
                    <th>Received Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tblTrDesign">
                    <td>ID Proof</td>
                    <td>Aadhar.jifif</td>
                    <td>28-01-2020</td>
                    <td>
                      <center>
                      <IconButton aria-label="delete" onClick={() => {                
                        this.setState({viewURL:'http://localhost:8080/viewone/Document/Aadhar.jfif'});    
                        }}>
                      <PageviewIcon />
                     </IconButton>
                      </center>
                    </td>
                  </tr>
                  <tr className="tblTrDesign">
                    <td>ID Proof</td>
                    <td>Photograph.jifif</td>
                    <td>28-01-2020</td>
                    <td>
                      <center>
                      <IconButton aria-label="delete" onClick={() => {                
                        this.setState({viewURL:'http://localhost:8080/viewone/Document/Photograph.jfif'});    
                        }}>
                      <PageviewIcon />
                     </IconButton>
                      </center>
                    </td>
                  </tr>
                  <tr className="tblTrDesign">
                    <td>Income Proof</td>
                    <td>Pay Slip.pdf</td>
                    <td>28-01-2020</td>
                    <td>
                      <center>
                      <IconButton aria-label="delete" onClick={() => {                
                        this.setState({viewURL:'http://localhost:8080/viewone/Document/Payslip.pdf'});    
                        }}>
                      <PageviewIcon />
                     </IconButton>
                      </center>
                    </td>
                  </tr>
                </tbody>
              </Table></div>
        <div>
        <Iframe url={this.state.viewURL}
       
        id="myId"
        className="myClassname"
        
      />
        </div>
   
   
</SplitterLayout>

        )
    }
}
