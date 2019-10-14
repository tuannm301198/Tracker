import { Form, Input, Button, Col, Select, DatePicker } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

const NormalCreateForm = (props) => {
    const { getFieldDecorator } = props.form;
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
            <Form.Item label="Name">
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                })(
                    <Input
                        placeholder="Name"
                    />,
                )}
            </Form.Item>
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
            <Form.Item label="Order ID">
                {getFieldDecorator('orderid', {
                    rules: [{ required: true, message: 'Please input your Order ID' }],
                })(
                    <Input 
                        type="text"
                        placeholder="Order ID"
                    />
                )}
            </Form.Item>
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
            <Form.Item label="Range Time">
                {getFieldDecorator('rangetime', {
                    rules: [{ required: true, message: 'Please input your Range Time' }],
                })(
                    <RangePicker />
                )}
            </Form.Item>
            <Form.Item label="Description">
                {getFieldDecorator('description', {
                    rules: [{ required: true, message: 'Please input your Desciption' }],
                })(
                    <Input
                        type="text"
                        placeholder="Description"
                    />
                )}
            </Form.Item>
            <Col span={6} offset={18}>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="create-form-button">
                        Create Task
                </Button>
                </Form.Item>
            </Col>

        </Form>
    );
}

const CommonForm = Form.create({ name: 'common_form' })(NormalCreateForm);

export default CommonForm;