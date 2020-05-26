import { Form, Input, Button, Col, Select, DatePicker } from 'antd';

const { Option } = Select;
const { RangePicker } = DatePicker;

const NormalCreateForm = props => {
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const prefixSelector = (
        <Select style={{ width: 70 }} defaultValue="86">
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    );

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <Form {...formItemLayout} onFinish={handleSubmit}>
            <Form.Item label="Name">
                <Input
                    placeholder="Name"
                />,
            </Form.Item>
            <Form.Item label="Phone">
                <Input 
                    addonBefore={prefixSelector}
                    type="number"
                    placeholder="Phone Number" 
                />
            </Form.Item>
            <Form.Item label="Email">
                <Input
                    type="email"
                    placeholder="Email"
                />
            </Form.Item>
            <Form.Item label="Order ID">
                <Input 
                    type="text"
                    placeholder="Order ID"
                />
            </Form.Item>
            <Form.Item label="Address">
                <Input
                    type="text"
                    placeholder="Address"
                />
            </Form.Item>
            <Form.Item label="Range Time">
                <RangePicker />
            </Form.Item>
            <Form.Item label="Description">
                <Input
                    type="text"
                    placeholder="Description"
                />
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


export default NormalCreateForm;
