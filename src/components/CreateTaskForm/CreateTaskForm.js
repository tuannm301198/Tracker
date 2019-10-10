import { useState } from 'react';
import { Icon, DatePicker, Button, Select, Modal, Collapse, Form, Input } from 'antd';

const { Option } = Select;
const { Panel } = Collapse;
const { RangePicker } = DatePicker;

const CreateTaskForm = (props) => {
    const [taskValue, setTaskValue] = useState('fieldworkforce');
    const [addPickup, setAddPickup] = useState(false);
    const [addDelivery, setAddDelivery] = useState(false);
    const [addAppointment, setAddAppointment] = useState(false);
    const [addWorkforce, setAddWorkforce] = useState(false);
    const [nameWorkforce, setNameWorkforce] = useState(null);
    const [phoneWorkforce, setPhoneWorkforce] = useState(null);
    const [emailWorkforce, setEmailWorkforce] = useState(null);
    const [orderIdWorkforce, setOrderIdWorkforce] = useState(null);
    const [addressWorkforce, setAddressWorkforce] = useState(null);
    const [startWorkforce, setStartWorkforce] = useState(null);
    const [endWorkforce, setEndWorkforce] = useState(null);
    const [desWorkforce, setDesWorkforce] = useState(null);

    const { visible, setVisible, setLoading, loading } = props

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    }

    const handleAddPickup = () => {
        setAddPickup(true);
    }

    const handleAddDelivery = () => {
        setAddDelivery(true);
    }

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 18 },
        },
    };

    const prefixSelector = (
        <Select defaultValue="86" style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    )

    const pickUpDelivery = (
        <div>
            {!addPickup ? (<Button onClick={handleAddPickup} block icon="plus">Add Pickup</Button>) :
                (
                    <Collapse>
                        <Panel header="Pickup" key="1">
                            <Form {...formItemLayout}>
                                <Form.Item label="Name">
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Form.Item label="Phone">
                                    <Input addonBefore={prefixSelector}
                                        placeholder="Phone" />
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Form.Item label="Order ID">
                                    <Input placeholder="Order ID" />
                                </Form.Item>
                                <Form.Item label="Address">
                                    <Input placeholder="Address" />
                                </Form.Item>
                                <Form.Item label="RangeTime">
                                    <RangePicker />
                                </Form.Item>
                                <Form.Item label="Desciption">
                                    <Input placeholder="Desciption" />
                                </Form.Item>
                            </Form>
                        </Panel>
                    </Collapse>
                )}
            {!addDelivery ? (<Button onClick={handleAddDelivery} block icon="plus">Add Delivery</Button>)
                :
                (
                    <Collapse>
                        <Panel header="Delivery" key="2">
                            <Form {...formItemLayout}>
                                <Form.Item label="Name">
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Form.Item label="Phone">
                                    <Input addonBefore={prefixSelector}
                                        placeholder="Phone" />
                                </Form.Item>
                                <Form.Item label="Email">
                                    <Input placeholder="Email" />
                                </Form.Item>
                                <Form.Item label="Order ID">
                                    <Input placeholder="Order ID" />
                                </Form.Item>
                                <Form.Item label="Address">
                                    <Input placeholder="Address" />
                                </Form.Item>
                                <Form.Item label="RangeTime">
                                    <RangePicker />
                                </Form.Item>
                                <Form.Item label="Desciption">
                                    <Input placeholder="Desciption" />
                                </Form.Item>
                            </Form>
                        </Panel>
                    </Collapse >
                )}

        </div>
    )

    const appointment = (
        <Collapse>
            <Panel header="Appointment" key="1">
                <Form {...formItemLayout}>
                    <Form.Item label="Name">
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input addonBefore={prefixSelector}
                            placeholder="Phone" />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Order ID">
                        <Input placeholder="Order ID" />
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input placeholder="Address" />
                    </Form.Item>
                    <Form.Item label="RangeTime">
                        <RangePicker />
                    </Form.Item>
                    <Form.Item label="Desciption">
                        <Input placeholder="Desciption" />
                    </Form.Item>
                </Form>
            </Panel>
        </Collapse >
    )

    const fieldWorkforce = (
        <Collapse>
            <Panel header="Field Workforce" key="1">
                <Form {...formItemLayout}>
                    <Form.Item label="Name">
                        <Input placeholder="Name" onChange={e => setNameWorkforce(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input addonBefore={prefixSelector}
                            placeholder="Phone" onChange={e => setPhoneWorkforce(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input placeholder="Email" onChange={e => setEmailWorkforce(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Order ID">
                        <Input placeholder="Order ID" onChange={e => setOrderIdWorkforce(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input placeholder="Address" onChange={e => setAddressWorkforce(e.target.value)} />
                    </Form.Item>
                    <Form.Item label="RangeTime">
                        <RangePicker onChange={(dates, dateStrings) => { setStartWorkforce(dateStrings[0]); setEndWorkforce(dateStrings[1]); }} />
                    </Form.Item>
                    <Form.Item label="Desciption">
                        <Input placeholder="Desciption" onChange={e => setDesWorkforce(e.target.value)} />
                    </Form.Item>
                </Form>
            </Panel>
        </Collapse >
    )

    let renderSelectedTask;

    switch (taskValue) {
        case 'pickup&delivery':
            renderSelectedTask = pickUpDelivery;
            break;
        case 'appointment':
            renderSelectedTask = appointment;
            break;
        case 'fieldworkforce':
            renderSelectedTask = fieldWorkforce;
            break;
    }


    const onSelectTaskChange = (value) => {
        setTaskValue(value);
        console.log(taskValue);
    }

    return (
        <Modal
            visible={visible}
            title="New Task"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="assign">
                    <span>Assign Agents</span>
                    <Icon type="caret-up" />
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    Create Task
              </Button>
            ]}
        >
            <Select defaultValue="fieldworkforce" style={{ width: 240, marginBottom: 20 }} onChange={onSelectTaskChange}>
                <Option value="pickup&delivery" > Pickup & Delivery </Option>
                <Option value="appointment" > Appointment </Option>
                <Option value="fieldworkforce" > Field Workforce </Option>
            </Select>
            {renderSelectedTask}
        </Modal>
    )
}

export default CreateTaskForm;