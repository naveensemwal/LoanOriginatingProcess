import React from "react";
import { render } from "react-dom";
import { Col, Form, Input, InputNumber, Row, Select, DatePicker, Table, Tag  } from 'antd';




export default class Cust_Obligationss extends React.Component {
    state = {
        rows: [{}]
      };

      disbursementTypeChange = idx => e =>{
        console.log('hi', idx, e)
        const rows = [...this.state.rows];
        rows[idx] = {
          ['ConsiderForSurrogate']: e,
		  ['LoanType']:e,
		  ['Status']:e
        };
        this.setState({
          rows
        });
     
      }
      handleChange = idx => e => {
        const { name, value} = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
          [name]: value
        };
        this.setState({
          rows
        });
      };
      handleAddRow = () => {
        let count=1;
        count=count+1;
        console.log('lenth ===',this.state.rows.length); 
        console.log(count); 
               const item = {
          ckbox1:'',
          ConsiderForObligations: "",
          ConsiderForSurrogate: "",
          Financer:"",
          LoanType:"",
          LoanAmount:"",
          Tenure:"",
          NoOfEMIPaid:"",
          EMIPayingFromBank:"",
          EMIAmount:"",
          Status:"",
          reason:"",
          remove:"",
         };
         console.log(item);
        this.setState({
          rows: [...this.state.rows, item]
       });
       console.log(this.state.rows);
      };

      handleRemoveRow = () => {
        this.setState({
          rows: this.state.rows.slice(0, -1)
        });
      };
      handleRemoveSpecificRow = (idx) => () => {
        const rows = [...this.state.rows]
        rows.splice(idx, 1)
        this.setState({ rows })
      }
  
  render() {
    return (
    
      <div className="container-fluids">
        <div className="row clearfix">
        
          <div className="col-md-12 column">
            <table className="table table-bordered table-hover" id="tab_logic">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Consider for Obligations</th>
                  <th className="text-center">Consider for Surrogate</th>
                  <th className="text-center">Financer</th>
                  <th className="text-center">Loan Type</th>
                  <th className="text-center">Loan Amount (Rs.)</th>
                  <th className="text-center">Tenure (Months)</th>
                  <th className="text-center">No Of EMI Paid</th>
                  <th className="text-center">EMI Paying from Bank</th>
                  <th className="text-center">EMI Amount (Rs.)</th>
                  <th className="text-center">Status</th>
                  <th className="text-center">Reasons</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                  {this.state.rows.map((item,idx) => (  
                <tr key={idx}>
                  <td>
                    {/* {idx} */}
                     <input type="checkbox"  name="ckbox1"/>
                  </td>
                  {/* <td>
                  
                  <input
                          type="text"
                          name="ConsiderForObligations"
                          value={this.state.rows[idx].ConsiderForObligations}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                  </td> */}
                  <td>
				  <input
                          type="text"
                          name="ConsiderForObligations"
                          value={this.state.rows[idx].ConsiderForObligations}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                  
                  </td>
                  <td>
                  <Select defaultValue="Yes"  name='ConsiderForSurrogate' onChange={this.disbursementTypeChange(idx)} hidden='isSingle'>
                                <Select.Option selected value="Yes">Yes</Select.Option>
                                <Select.Option value="No">No</Select.Option>                             
                  </Select>
                  
                  </td>
                  <td>
                  <input
                          type="text"
                          name="Financer"
                          value={this.state.rows[idx].Financer}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />

                  </td>
                  <td>
				  <Select defaultValue="Homeloan"  name='LoanType' onChange={this.disbursementTypeChange(idx)} hidden='isSingle'>
                                <Select.Option selected value="Homeloan">Home loan</Select.Option>
                                <Select.Option value="Goldloan">Gold loan</Select.Option>                             
								<Select.Option value="TWloan">TW loan</Select.Option>                             
								<Select.Option value="Consumersloan">Consumers loan</Select.Option>                             
                  </Select>
                  
                  </td>
                  <td><input type='text' name='435' value={this.state.rows[idx].LoanAmount} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td><input type='text' name='435' value={this.state.rows[idx].Tenure} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td><input type='text' name='435' value={this.state.rows[idx].NoOfEMIPaid} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td><input type='text' name='435' value={this.state.rows[idx].EMIPayingFromBank} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td><input type='text' name='435' value={this.state.rows[idx].EMIAmount} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td>
				  <Select defaultValue="Running"  name='Status' onChange={this.disbursementTypeChange(idx)} hidden='isSingle'>
                                <Select.Option selected value="Running">Running</Select.Option>
                                <Select.Option value="Closing">Closing</Select.Option>                             
								<Select.Option value="Closing6">Closing in 6 months</Select.Option>                             
								<Select.Option value="Nottobeconsidered">Not to be considered</Select.Option>                             
                  </Select>
                  
                  </td>
                  <td><input type='text' name='reason' value={this.state.rows[idx].Reasons} onChange={this.handleChange(idx)} className='form-control'/></td>
              <td><button name='remove' className="btn btn-outline-danger btn-sm" onClick={this.handleRemoveSpecificRow(idx)}>Remove</button></td>
                </tr>
              
                ))}
              </tbody>
            </table>
           <a  className="btn btn-danger " onClick={this.handleAddRow}><i className="fa fa-plus"></i></a>
           <a
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right">
                Delete Last Row
              </a>
          </div>
        </div>
      </div>
    );
  }
}
