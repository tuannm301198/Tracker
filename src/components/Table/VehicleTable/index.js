import { useState } from 'react';
import {
  Input,
  Button,
  Col,
  Row,
  Divider,
  Table,
  Icon,
  Badge,
  Tooltip,
  Avatar,
  Modal,
  Typography,
  Form,
  Select,
  Tabs,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddVehicle from '../../Modal/ModalAddVehicle/ModalAddVehicle';
import ModalEditVehicle from '../../Modal/ModalEditVehicle/ModalEditVehicle';
const { Text, Title } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;
const VehicleTable = props => {
  const [visible, setVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { setVehicleData } = props;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModalVehicle = () => {
    setVisible(true);
  };
  const columnVehicles = [
    {
      title: 'Label',
      dataIndex: 'label',
      width: 100,
      fixed: 'left',
      key: 'label',
    },
    {
      title: 'Model',
      dataIndex: 'model',
      width: 200,
      fixed: 'left',
      key: 'model',
    },
    {
      title: 'Tracker',
      dataIndex: 'tracker',
      key: 'tracker',
    },
    {
      title: 'Reg.plate',
      key: 'regplate',
      dataIndex: 'regplate',
    },
    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
    },
    {
      title: 'Cargo capacity',
      key: 'cargocapacity',
      width: 150,
      dataIndex: 'cargocapacity',
    },
    {
      title: 'Fuel',
      key: 'fuel',
      dataIndex: 'fuel',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: () => (
        <>
          <Badge dot offset={[5, 0]} status="success"></Badge>
          <span style={{ fontSize: '12px' }}>Available</span>
        </>
      ),
    },
    // {
    //   title: 'Recent Event',
    //   key: 'event',
    //   width: 250,
    //   responsive: ['lg'],
    //   ellipsis: {
    //     showTitle: false,
    //   },
    //   dataIndex: 'event',
    //   render: event => (
    //     <Tooltip placement="topLeft" title={event}>
    //       {event}
    //     </Tooltip>
    //   ),
    // },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      width: 120,
      fixed: 'right',
      render: (text, record) => (
        <div>
          <a onClick={showModal}>Edit</a>
          <Divider type="vertical" />
          <a>Delete</a>
          <ModalEditVehicle
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
            handleOk={handleOk}
          />
        </div>
      ),
    },
  ];

  const dataVehicles = [
    {
      key: '1',
      label: 'Man truck',
      model: 'Man TGA 33.480',
      tracker: 'Man truck',
      regplate: 'D028N4',
      type: 'Truck',
      cargocapacity: '20000 kg',
      fuel: 'Diesel',
      event: 'Rahul Adenauer: task "Stall Shawarma - 49km MKAD" FAILED!   4 days ago',
    },
    {
      key: '2',
      label: 'Man truck',
      model: 'TBA 4.23',
      tracker: 'Man truck',
      regplate: 'I84B2',
      type: 'Truck',
      cargocapacity: '20000 kg',
      fuel: 'Diesel',
      event: 'Rahul Humar: task "Stall Shawarma - 49km MKAD" SUCCEED!   2 days ago',
    },
    {
      key: '3',
      label: 'Man truck',
      model: 'MBI 93.203',
      tracker: 'Man truck',
      regplate: 'D853A',
      type: 'Truck',
      cargocapacity: '25000 kg',
      fuel: 'Diesel',
      event: 'Paul Marker: task "Stall Shawarma - 49km MKAD" FAILED!   4 days ago',
    },
  ];

  const rowSelectionV = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeysV: ${selectedRowKeys}`, 'selectedRowsV: ', selectedRows);
    },
  };
  return (
    <div style={{ margin: 5 }}>
      <Row>
        <Col span={12}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            style={{ margin: '10px' }}
            onClick={showModalVehicle}
          >
            Add Vehicle
          </Button>
        </Col>
        <Col span={4} offset={7}>
          <Input
            style={{ margin: '10px' }}
            placeholder="Vehicle Search"
            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </Col>
      </Row>
      <Row>
        <Table
          style={{ width: '100%' }}
          onRow={record => {
            return {
              onClick: () => {
                setVehicleData(record);
              },
            };
          }}
          rowSelection={rowSelectionV}
          columns={columnVehicles}
          dataSource={dataVehicles}
          // scroll={{ x: 900, y: 300 }}
        />
      </Row>
      <ModalAddVehicle visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default VehicleTable;
