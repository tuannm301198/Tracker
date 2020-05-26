import { Form, Input, Button, Col, Select, DatePicker } from 'antd';

const { Option } = Select;

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

const DeliveryCreateForm = ({ form }) => {

    const prefixSelector = (
        <Select style={{ width: 70 }} defaultValue="86">
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    );

    return (
        <Form {...formItemLayout} form={form}>
            <Form.Item label="Name" name="name">
                <Input
                    placeholder="Name"
                />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
                <Input 
                    addonBefore={prefixSelector}
                    type="number"
                    placeholder="Phone Number" 
                />
            </Form.Item>
            <Form.Item label="Order ID" name="order_id">
                <Input 
                    type="text"
                    placeholder="Order ID"
                />
            </Form.Item>
            <Form.Item label="Address" name="address">
                <Input
                    type="text"
                    placeholder="Deliver Address"
                />
            </Form.Item>
            <Form.Item label="Deliver Before" name="date">
                <DatePicker placeholder="Deliver Before" style={{width:'100%'}}/>
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input
                    type="text"
                    placeholder="Description"
                />
            </Form.Item>
        </Form>
    );
}

export default DeliveryCreateForm;
