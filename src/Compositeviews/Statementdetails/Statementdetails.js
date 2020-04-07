import React, { Component } from 'react';
import { Upload, message, Row, Col, Button,Card} from 'antd';

import {UploadOutlined ,InboxOutlined} from '@ant-design/icons';

const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

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

export default class Statementdetails extends Component {
    render() {
        return (
            <div>
                <Row gutter={[12, 12]}>
                    <Col span={12}>
                    <Card>
                    <Upload {...props2}>
                            <Button>
                                <UploadOutlined /> Upload
                          </Button>
                         </Upload>
                    </Card>
                    </Col>
                    <Col span={12}>
                    <Card>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined/>
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                            Requires upload of the banks statements in the system.
                            </p>
                            <p className="ant-upload-hint">
                             Fast eligibility calculation
                            </p>
                        </Dragger>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
