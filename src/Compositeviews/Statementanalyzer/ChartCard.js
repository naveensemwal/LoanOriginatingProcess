import React from "react";

import Widget from "./index";

const ChartCard = ({prize, title, children, styleName, desc, icon}) => {
  return (
    <Widget styleName="gx-card-full">

      <div className="gx-actchart gx-px-3 gx-pt-3">
        <div className="ant-row-flex">
          <h2 className="gx-mb-0 gx-fs-xl gx-font-weight-medium" style={{padding:'5px'}}>
            {prize}
            {/* <span className={`gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-${styleName}`}>{title}% <i
              className="icon icon-menu-up gx-fs-sm"/>
            </span> */}

          </h2>
          <i className={`icon icon-${icon} gx-fs-xl gx-ml-auto gx-text-primary gx-fs-xxxl`}/>
        </div>
        <p className="gx-mb-0 gx-fs-m gx-text-grey" style={{padding:'5px'}}>{desc}</p>
      </div>
      {children}
    </Widget>
  );
};

export default ChartCard;
