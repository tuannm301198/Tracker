import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;

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

const EmployeeCreateForm = (props) => {
    
    const prefixSelector = (
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    );

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <Form {...formItemLayout} onFinish={handleSubmit}>
            <h4>Summary</h4>
            <Form.Item label="Name">
                <Input
                    placeholder="Name"
                />
            </Form.Item>
            <Form.Item label="Employee ID">
                <Input placeholder="Employee ID" />,
            </Form.Item>
            <Form.Item label="Tracker">
                <Select
                    style={{ width: 200 }}
                    placeholder="Select tracker"
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Department">
                <Select
                    style={{ width: 200 }}
                    placeholder="Select department"
                >
                    <Option value="jack">Sales Department</Option>
                    <Option value="lucy">Delivery Department</Option>
                    <Option value="tom">Services Department</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Hardware Key">
                <Input placeholder="Hardware Key" />
            </Form.Item>
            <Form.Item label="Tag">
                <Input placeholder="Tag" />
            </Form.Item>
            <p>Contact info</p>
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
            <p>Driver license</p>
            <Form.Item label="Driver license number">
                <Input
                    type="text"
                    placeholder="Driver license number"
                />
            </Form.Item>
            <Form.Item label="Driver license class">
                <Input
                    type="text"
                    placeholder="Driver license class"
                />
            </Form.Item>
            <Form.Item label="D/L expiration date">
                <DatePicker />
            </Form.Item>
            <p>Location</p>
            <Form.Item label="Address">
                <Input
                    type="text"
                    placeholder="Address"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="create-form-button">
                    Add Employee
                </Button>
            </Form.Item>
        </Form>
    );
}

export default EmployeeCreateForm;
