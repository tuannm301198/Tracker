import { Table, Tag, DatePicker, Input, Icon, Row, Col, Select, Button, Upload } from 'antd';
// import styles from './index.css';

const { RangePicker } = DatePicker;
const { Option } = Select;


const Task = () => {

  const headerOption = (
    <div>
      <Row>
        <h2>Task Management</h2>
      </Row>
      <Row>
        <Col span={6}>
          <RangePicker />
        </Col>
        <Col span={5} offset={1}>
          <Input
            placeholder="Employee"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Col>
        <Col span={5} offset={1}>
          <Select
            placeholder="Select status"
            style={{ width: '100%' }}
          >
            <Option value="unassigned">Unassigned</Option>
            <Option value="assigned">Assigned</Option>
            <Option value="arrived">Arrived</Option>
            <Option value="completed">Completed</Option>
            <Option value="failed">Failed</Option>
          </Select>
        </Col>
        <Col span={3} offset={1}>
          <Upload>
            <Button>
              <Icon type="upload" /> Import Task
              </Button>
          </Upload>
        </Col>
      </Row>
    </div>
  )

  const columns = [
    {
      title: 'Employee',
      dataIndex: 'employee',
      key: 'employee',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color = 'geekblue';
        if (status === 'Failed') {
          color = 'red'
        }
        if (status === 'Completed') {
          color = 'green'
        }
        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        )
      }
    },
    {
      title: 'Label',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: 'Start',
      key: 'start',
      dataIndex: 'start'
    },
    {
      title: 'Finish',
      key: 'finish',
      dataIndex: 'finish'
    },
    {
      title: 'Arrival',
      key: 'arrival',
      dataIndex: 'arrival'
    },
    {
      title: 'Form',
      key: 'form',
      dataIndex: 'form'
    },
  ];

  const data = [
    {
      key: '1',
      employee: 'John Brown',
      status: 'Assigned',
      label: 'New York No. 1 Lake Park',
      start: '09/05/2019',
      finish: '10/05/2019',
      arrival: 'Not Arrived',
      form: '-'
    },
    {
      key: '2',
      employee: 'Jim Green',
      status: 'Failed',
      label: 'New York No. 1 Lake Park',
      start: '09/05/2019',
      finish: '10/05/2019',
      arrival: 'Not Arrived',
      form: '-'
    },
    {
      key: '3',
      employee: 'Joe Black',
      status: 'Completed',
      label: 'New York No. 1 Lake Park',
      start: '09/05/2019',
      finish: '10/05/2019',
      arrival: 'Not Arrived',
      form: '-'
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };
  return (
    <div style={{ margin: '5px' }}>
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #f9f9f9', padding:'10px' }}>
        {headerOption}
      </div>
      <div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default Task;
