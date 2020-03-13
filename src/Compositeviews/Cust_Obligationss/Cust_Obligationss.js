import React from "react";
import { render } from "react-dom";



export default class Cust_Obligationss extends React.Component {
    state = {
        rows: [{}]
      };
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
        this.setState({
          rows: [...this.state.rows, item]
        });
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
                <tr id="addr0" key={idx}>
                  <td>
                    {/* {idx} */}
                     <input type="checkbox"  name="ckbox1"/>
                  </td>
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
                  
                  <input
                          type="text"
                          name="ConsiderForSurrogate"
                          value={this.state.rows[idx].ConsiderForSurrogate}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
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
                  <input
                          type="text"
                          name="LoanType"
                          value={this.state.rows[idx].LoanType}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                  </td>
                  <td><input type='text' name='435' value={this.state.rows[idx].LoanAmount} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td><input type='text' name='435' value={this.state.rows[idx].Tenure} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td><input type='text' name='435' value={this.state.rows[idx].NoOfEMIPaid} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td><input type='text' name='435' value={this.state.rows[idx].EMIPayingFromBank} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td><input type='text' name='435' value={this.state.rows[idx].EMIAmount} onChange={this.handleChange(idx)} className='form-control'/></td>
                  <td>
                  <input
                          type="text"
                          name="Status"
                          value={this.state.rows[idx].Status}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                  </td>
                  <td><input type='text' name='reason' value={this.state.rows[idx].Reasons} onChange={this.handleChange(idx)} className='form-control'/></td>
              <td><button name='remove' className="btn btn-outline-danger btn-sm" onClick={this.handleRemoveSpecificRow(idx)}>Remove</button></td>
                </tr>
              
                ))}
              </tbody>
            </table>
           <button onClick={this.handleAddRow} className="btn btn-primary btn-danger"><i className="fa fa-plus"></i></button>
           <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right">
                Delete Last Row
              </button>
          </div>
        </div>
      </div>
    );
  }
}
