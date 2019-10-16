import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;

const EmployeeCreateForm = (props) => {
    const { getFieldDecorator } = props.form;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 10 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };

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
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            <h4>Summary</h4>
            <Form.Item label="Name">
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input
                        placeholder="Name"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Employee ID">
                {getFieldDecorator('employee id', {
                    rules: [{ required: true, message: 'Please input your Employee ID' }],
                })(
                    <Input
                        placeholder="Employee ID" />,
                )}
            </Form.Item>
            <Form.Item label="Tracker">
                {getFieldDecorator('tracker', {
                    rules: [{ required: true, message: 'Please select tracker' }],
                })(
                    <Select
                        style={{ width: 200 }}
                        placeholder="Select tracker"
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="Department">
                {getFieldDecorator('department', {
                    rules: [{ required: true, message: 'Please select department' }],
                })(
                    <Select
                        style={{ width: 200 }}
                        placeholder="Select department"
                    >
                        <Option value="jack">Sales Department</Option>
                        <Option value="lucy">Delivery Department</Option>
                        <Option value="tom">Services Department</Option>
                    </Select>,
                )}
            </Form.Item>
            <Form.Item label="Hardware Key">
                {getFieldDecorator('hardware key', {
                    rules: [{ required: true, message: 'Please input Hardware Key' }],
                })(
                    <Input
                        placeholder="Hardware Key" />,
                )}
            </Form.Item>
            <Form.Item label="Tag">
                {getFieldDecorator('tag', {
                    rules: [{ required: true, message: 'Please input Tag' }],
                })(
                    <Input
                        placeholder="Tag" />,
                )}
            </Form.Item>
            <p>Contact info</p>
            <Form.Item label="Phone">
                {getFieldDecorator('phone number', {
                    rules: [{ required: true, message: 'Please input your phone number' }],
                })(
                    <Input addonBefore={prefixSelector}
                        type="number"
                        placeholder="Phone Number" />,
                )}
            </Form.Item>
            <Form.Item label="Email">
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email' }],
                })(
                    <Input
                        type="email"
                        placeholder="Email"
                    />
                )}
            </Form.Item>
            <p>Driver license</p>
            <Form.Item label="Driver license number">
                {getFieldDecorator('driver license number', {
                    rules: [{ required: true, message: 'Please input your Driver license number' }],
                })(
                    <Input
                        type="text"
                        placeholder="Driver license number"
                    />
                )}
            </Form.Item>
            <Form.Item label="Driver license class">
                {getFieldDecorator('driver license class', {
                    rules: [{ required: true, message: 'Please input your Driver license class' }],
                })(
                    <Input
                        type="text"
                        placeholder="Driver license class"
                    />
                )}
            </Form.Item>
            <Form.Item label="D/L expiration date">
                {getFieldDecorator('dl expiration date', {
                    rules: [{ required: true, message: 'Please input your D/L expiration date' }],
                })(
                    <DatePicker />
                )}
            </Form.Item>
            <p>Location</p>
            <Form.Item label="Address">
                {getFieldDecorator('address', {
                    rules: [{ required: true, message: 'Please input your Address' }],
                })(
                    <Input
                        type="text"
                        placeholder="Address"
                    />
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="create-form-button">
                    Add Employee
                </Button>
            </Form.Item>
        </Form>
    );
}

const EmployeeForm = Form.create({ name: 'employee_form' })(EmployeeCreateForm);

export default EmployeeForm;