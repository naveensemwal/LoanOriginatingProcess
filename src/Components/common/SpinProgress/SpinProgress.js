import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 30, marginLeft: 15, position: 'relative', top: 4 }} />;


const SpinProgress = <Spin indicator={antIcon} />

export default SpinProgress