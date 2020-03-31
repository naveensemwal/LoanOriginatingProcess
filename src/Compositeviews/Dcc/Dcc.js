import React from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import { Popover, Input, Form, Button, ButtonGroup, Icon } from 'antd';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import Clear from '@material-ui/icons/Clear';


const tableIcons = {
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
};


export default function Dcc() {
    const { TextArea } = Input;
    const negativeContent = (
        <div>
            <Form.Item label="Results :">
                <TextArea placeholder="Negative" autoSize />
            </Form.Item>
            <Form.Item label="Comments :">
                <TextArea
                    placeholder="Below Rules have not been successfully executed : 100% insurance mandatory if no coapplicants/guarantor in the application"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                />
            </Form.Item>
            <Button type="primary">Notify Customer
               <Icon type="mail" />
            </Button>
        </div>
    );

    const positiveContent = (
        <div>
            <Form.Item label="Results :">
                <TextArea placeholder="Positive" autoSize />
            </Form.Item>
            <Form.Item label="Comments :">
                <TextArea
                    placeholder="Document Verified - all related rules executed successfully"
                    autoSize={{ minRows: 2, maxRows: 6 }}
                />
            </Form.Item>
            <Button type="primary">Notify Customer
               <Icon type="mail" />
            </Button>
        </div>
    );

    const [state, setState] = React.useState({
        columns: [
            { title: 'Document Category', field: 'docCategory' },
            { title: 'Document Type', field: 'docType' },
            { title: 'File Name', field: 'fileName' },
            { title: 'Status', field: 'status' },
            { title: 'Received Date', field: 'receivedDate' },

        ],
        data: [
            { docCategory: 'Application Form', docType: 'Signed Application Form', fileName: 'ApplicationFormScan.PDF', status: 'Received', receivedDate: '28-01-2020', docStatus: true },
            { docCategory: 'ID Proof', docType: 'PAN Card', fileName: 'PANScan.PDF', status: 'Received', receivedDate: '28-01-2020', docStatus: false },
            { docCategory: 'Address Proof', docType: 'Passport', fileName: 'Passport.PDF', status: 'Received', receivedDate: '28-01-2020', docStatus: true },
            { docCategory: 'Income Documents', docType: 'Salary Slip', fileName: 'SalarySlip.PDF', status: 'Received', receivedDate: '28-01-2020', docStatus: true },
            { docCategory: 'Banking Documents', docType: 'Last 6 month statement', fileName: 'Statement.PDF', status: 'Received', receivedDate: '28-01-2020', docStatus: true },
            { docCategory: 'Property Documents', docType: 'Allotment-possession ', fileName: 'PropertyDoc.PDF', status: 'Received', receivedDate: '28-01-2020', docStatus: true },

        ],
        actions: [rowData => ({
            icon: rowData.docStatus ? ((props, ref) =>
                <Popover placement="right" content={positiveContent} title="Document Verification Status" trigger="click">
                    <CheckCircleIcon color="primary" fontSize="small" style={{ color: 'green' }} />
                </Popover>)
                :
                ((props, ref) =>
                    <Popover placement="right" content={negativeContent} title="Document Verification Status" trigger="click">
                        <ErrorIcon color="error" fontSize="small" />
                    </Popover>),
            tooltip: 'Delete User',
            disabled: rowData.birthYear < 2000
        })],
    });

    return (
        <MaterialTable
            icons={tableIcons}
            columns={state.columns}
            data={state.data}
            actions={state.actions}
            options={{

                search: false,
                padding: 'dense',
                showTitle: false,
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                }
            }}

        />
    );
}
