import React from "react";
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import {Select} from "antd";

import Widget from "./index";

const data = [
  {name: '', balance: 754056.48},
  {name: 'OCT', balance: 754056.48},
  {name: 'NOV', balance: 1009103.7},
  {name: 'DEC', balance: 586577.49},
  {name: 'JAN', balance: 674156.54},
  {name: 'FEB', balance: 607524.09},
  {name: 'MAR', balance: 594365.18},
];

const Option = Select.Option;

const BalanceHistory = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Widget styleName="gx-card-full">

      {/* <div className="ant-row-flex gx-px-4 gx-pt-4">
        <h2 className="h4 gx-mb-3">Balance History</h2>
        <div className="gx-ml-auto">
          <Select className="gx-mb-2 gx-select-sm" defaultValue="10" onChange={handleChange}>
            <Option value="10">Last 10 days</Option>
            <Option value="20">Last 20 days</Option>
            <Option value="30">Last 30 days</Option>
          </Select>
        </div>
      </div> */}

      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data}
                   margin={{top: 0, right: 0, left: 0, bottom: 0}}>
          <Tooltip/>
          <XAxis dataKey="name"/>
          <defs>
            <linearGradient id="color15" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38AAE5" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#F5FCFD" stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <Area dataKey='balance' strokeWidth={2} stackId="2" stroke='#10316B' fill="url(#color15)"
                fillOpacity={1}/>
        </AreaChart>
      </ResponsiveContainer>
    </Widget>
  );
};

export default BalanceHistory;
