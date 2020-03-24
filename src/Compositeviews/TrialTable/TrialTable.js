import React from 'react';
import { Table, Row, Col} from 'antd';
import 'antd/dist/antd.css';
const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Mobile',
        dataIndex: 'mobile',
        key: 'mobile',
    },
  ];

class TrialTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:[],
            loading:true
        };
    }
   
    componentDidMount(){
        fetch("http://localhost:4231/users.php").
            then(response => response.json()).
            then((responseJson)=> {
                console.log(responseJson);
                this.setState({
                    loading: true,
                    dataSource: responseJson
                })  
            })
            .catch(error=>console.log(error))
    }

    render(){
        if(this.state.loading){
         return( 
            <Row>
                <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <Table columns={columns} dataSource={this.state.dataSource}/>
                </Col>
            </Row>
        )}
    }
}
export default TrialTable;