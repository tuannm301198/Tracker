import { Table, Tag } from 'antd';
import styles from './index.css';

const Task = () => {
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
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}

export default Task;
