import { useState } from 'react';
import {  Button, Select, Modal, Collapse } from 'antd';
import CreateTaskForm from './CreateTaskForm';
const { Option } = Select;
const { Panel } = Collapse;

const ModalCreateTask = (props) => {
    const [taskValue, setTaskValue] = useState('fieldworkforce');
    const [addPickup, setAddPickup] = useState(false);
    const [addDelivery, setAddDelivery] = useState(false);
    const [addAppointment, setAddAppointment] = useState(false);
    const [addWorkforce, setAddWorkforce] = useState(false);

    const { visible, setVisible } = props


    const handleCancel = () => {
        setVisible(false);
    }

    const handleAddPickup = () => {
        setAddPickup(true);
    }

    const handleAddDelivery = () => {
        setAddDelivery(true);
    }

    const pickUpDelivery = (
        <div>
            {!addPickup ? (<Button onClick={handleAddPickup} block icon="plus">Add Pickup</Button>) :
                (
                    <Collapse>
                        <Panel header="Pickup" key="1">
                            <CreateTaskForm />
                        </Panel>
                    </Collapse>
                )}
            {!addDelivery ? (<Button onClick={handleAddDelivery} block icon="plus">Add Delivery</Button>)
                :
                (
                    <Collapse>
                        <Panel header="Delivery" key="2">
                            <CreateTaskForm />
                        </Panel>
                    </Collapse >
                )}

        </div>
    )

    const appointment = (
        <Collapse>
            <Panel header="Appointment" key="1">
                <CreateTaskForm />
            </Panel>
        </Collapse >
    )

    const fieldWorkforce = (
        <Collapse>
            <Panel header="Field Workforce" key="1">
                <CreateTaskForm />
            </Panel>
        </Collapse >
    )


    const onSelectTaskChange = (value) => {
        setTaskValue(value);
    }

    return (
        <Modal
            visible={visible}
            title="New Task"
            onCancel={handleCancel}
            footer={null}
        >
            <Select defaultValue="fieldworkforce" style={{ width: 240, marginBottom: 20 }} onChange={onSelectTaskChange}>
                <Option value="pickup&delivery" > Pickup & Delivery </Option>
                <Option value="appointment" > Appointment </Option>
                <Option value="fieldworkforce" > Field Workforce </Option>
            </Select>
            {taskValue==="pickup&delivery"&&pickUpDelivery}
            {taskValue==="appointment"&&appointment}
            {taskValue==="fieldworkforce"&&fieldWorkforce}
        </Modal>
    )
}

export default ModalCreateTask;