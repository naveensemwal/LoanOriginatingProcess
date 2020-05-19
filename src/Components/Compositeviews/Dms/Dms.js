import React, { Component } from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import { UploadOutlined } from '@ant-design/icons';
import { Card, Button, message, Upload } from 'antd';
import './Dms.css';


const fileList = [
    {
      uid: '-1',
      name: 'Photo.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
  ];

const props2 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [...fileList],
  };

export default class Dms extends Component {
    render() {
        return (
            <div className='parent'>
                <SplitPane split="vertical" >
                    <SplitPane split="horizontal" minSize={50} defaultSize={100} >
                        <div className='child'>
                            
                        </div>
                        <div className='child'>
                     
                        <Upload {...props2}>
                                <Button>
                                    <UploadOutlined /> Upload
                              </Button>
                             </Upload>
                     
                        </div>
                    </SplitPane>
                    <div className='child'>

                    </div>
                </SplitPane>
            </div>
        );
    }
}
