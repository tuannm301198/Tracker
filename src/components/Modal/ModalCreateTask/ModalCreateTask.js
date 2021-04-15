import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button, Select, Modal, Collapse, Form } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import CommonForm from '../../Form/CommonForm/CommonForm';
import PickupForm from '../../Form/PickupForm/PickupForm';
import DeliveryForm from '../../Form/DeliveryForm/DeliveryForm';
import firebase from 'firebase';

const { Option } = Select;
const { Panel } = Collapse;

const ModalCreateTask = props => {
  const [taskValue, setTaskValue] = useState('pickup&delivery');
  const [addPickup, setAddPickup] = useState(false);
  const [addDelivery, setAddDelivery] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [assign, setAssign] = useState(null);

  const { visible, setVisible, agentList, dispatch } = props;

  const [formDelivery] = Form.useForm();
  const [formPickup] = Form.useForm();
  const deliveryData = formDelivery.getFieldsValue();
  const pickupData = formPickup.getFieldsValue();

  useEffect(() => {
    dispatch({ type: 'agent/getListAgents' });
  }, [dispatch]);

  const handleCancel = () => {
    setVisible(false);
  };

  const createTaskPayload = {
    agent: assign,
    delivery: {
      latLng: new firebase.firestore.GeoPoint(21.004386, 105.789715),
      address: deliveryData.address,
      name: deliveryData.name,
      phone: deliveryData.phone,
      date: new firebase.firestore.Timestamp(moment(deliveryData.date).unix(), 0),
      order_id: deliveryData.order_id,
    },
    order_id: pickupData.order_id,
    pickup: {
      latLng: new firebase.firestore.GeoPoint(21.004386, 105.789715),
      address: pickupData.address,
      name: pickupData.name,
      phone: pickupData.phone,
      date: new firebase.firestore.Timestamp(moment(pickupData.date).unix(), 0),
      order_id: pickupData.order_id,
    },
    status: assign ? 'ASSIGNED' : 'UNASSIGNED',
  };

  const handleOk = () => {
    setLoadingModal(true);
    dispatch({
      type: 'task/createTask',
      payload: createTaskPayload,
    });
    setTimeout(() => {
      setVisible(false);
      setLoadingModal(false);
      formDelivery.resetFields();
      formPickup.resetFields();
    }, 2000);
  };

  const handleChangeAgent = e => {
    setAssign(e);
  };

  const handleAddPickup = () => {
    setAddPickup(true);
  };

  const handleAddDelivery = () => {
    setAddDelivery(true);
  };

  const pickUpDelivery = (
    <div>
      {!addPickup ? (
        <Button onClick={handleAddPickup} block icon={<PlusOutlined />}>
          Add Pickup
        </Button>
      ) : (
        <Collapse>
          <Panel header="Pickup" key="1">
            <PickupForm form={formPickup} />
          </Panel>
        </Collapse>
      )}
      {!addDelivery ? (
        <Button onClick={handleAddDelivery} block icon={<PlusOutlined />}>
          Add Delivery
        </Button>
      ) : (
        <Collapse>
          <Panel header="Delivery" key="2">
            <DeliveryForm form={formDelivery} />
          </Panel>
        </Collapse>
      )}
    </div>
  );

  const modalFooter = (
    <React.Fragment>
      <Select placeholder="Assign Agent" style={{ margin: '0 10px' }} onChange={handleChangeAgent}>
        {agentList &&
          agentList.map(item => (
            <Select.Option key={item.id} value={item.id}>
              {item.name}
            </Select.Option>
          ))}
      </Select>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button type="primary" onClick={handleOk} loading={loadingModal}>
        Create
      </Button>
    </React.Fragment>
  );

  const appointment = (
    <Collapse>
      <Panel header="Appointment" key="1">
        <CommonForm />
      </Panel>
    </Collapse>
  );

  const fieldWorkforce = (
    <Collapse>
      <Panel header="Field Workforce" key="1">
        <CommonForm />
      </Panel>
    </Collapse>
  );

  const onSelectTaskChange = value => {
    setTaskValue(value);
  };

  return (
    <Modal visible={visible} title="New Task" onCancel={handleCancel} footer={modalFooter}>
      <Select
        defaultValue="pickup&delivery"
        style={{ width: 240, marginBottom: 20 }}
        onChange={onSelectTaskChange}
      >
        <Option value="pickup&delivery"> Pickup & Delivery </Option>
        <Option value="appointment"> Appointment </Option>
        <Option value="fieldworkforce"> Field Workforce </Option>
      </Select>
      {taskValue === 'pickup&delivery' && pickUpDelivery}
      {taskValue === 'appointment' && appointment}
      {taskValue === 'fieldworkforce' && fieldWorkforce}
    </Modal>
  );
};

export default connect(state => ({
  agentList: state.agent.agentList,
}))(ModalCreateTask);
