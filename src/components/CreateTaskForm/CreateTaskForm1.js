import { Form, Icon, Input, Button, Col, Select, DatePicker } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

const NormalCreateForm = (props) => {
    const { getFieldDecorator } = props.form;
    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
    })(
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>,
    );
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Col span={12}>
                <Form.Item>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your name!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" />}
                            placeholder="Name"
                        />,
                    )}
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item>
                    {getFieldDecorator('phone number', {
                        rules: [{ required: true, message: 'Please input your phone number' }],
                    })(
                        <Input addonBefore={prefixSelector}
                            type="number"
                            placeholder="Phone Number" />,
                    )}
                </Form.Item>
            </Col>
            <Form.Item style={{ display: 'inline-block' }}>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email' }],
                })(
                    <Input prefix={<Icon type="mail" />}
                        type="email"
                        placeholder="Email"
                    />
                )}
            </Form.Item>
            <Form.Item style={{ display: 'inline-block' }}>
                {getFieldDecorator('orderid', {
                    rules: [{ required: true, message: 'Please input your Order ID' }],
                })(
                    <Input prefix={<Icon type="mail" />}
                        type="text"
                        placeholder="Order ID"
                    />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('address', {
                    rules: [{ required: true, message: 'Please input your Address' }],
                })(
                    <Input prefix={<Icon type="environment" />}
                        type="text"
                        placeholder="Address"
                    />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('rangetime', {
                    rules: [{ required: true, message: 'Please input your Range Time' }],
                })(
                    <RangePicker prefix={<Icon type="calendar" />} />
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('description', {
                    rules: [{ required: true, message: 'Please input your Desciption' }],
                })(
                    <Input prefix={<Icon type="file-text" />}
                        type="text"
                        placeholder="Description"
                    />
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="create-form-button">
                    Create Task
                </Button>
            </Form.Item>
        </Form>
    );
}

const CreateTaskForm1 = Form.create({ name: 'normal_login' })(NormalCreateForm);

export default CreateTaskForm1;