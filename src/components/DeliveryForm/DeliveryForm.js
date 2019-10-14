import { Form, Input, Button, Col, Select, DatePicker } from 'antd';

const { Option } = Select;

const DeliveryCreateForm = (props) => {
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
                    rules: [{ required: true, message: 'Please input your Pickup Address' }],
                })(
                    <Input
                        type="text"
                        placeholder="Deliver Address"
                    />
                )}
            </Form.Item>
            <Form.Item label="Deliver Before">
                {getFieldDecorator('deliverytime', {
                    rules: [{ required: true, message: 'Please input your Deliver time' }],
                })(
                    <DatePicker placeholder="Deliver Before" style={{width:'100%'}}/>
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

const DeliveryForm = Form.create({ name: 'delivery_form' })(DeliveryCreateForm);

export default DeliveryForm;