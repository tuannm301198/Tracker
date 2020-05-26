import { Form, Input, Button, Select, Col, Row } from 'antd';

const { Option } = Select;

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

const VehicleCreateForm = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
    };
    
    return (
        <Form {...formItemLayout} onFinish={handleSubmit}>
            <Row gutter={24}>
                <Col span={12}>
                    <h4>Summary</h4>
                    <Form.Item label="Label:">
                        <Input
                            placeholder="Label"
                        />
                    </Form.Item>
                    <Form.Item label="Tracker:">
                        <Select
                            style={{ width: 200 }}
                            placeholder="Select tracker"
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Garage:">
                        <Select
                            style={{ width: 200 }}
                            placeholder="Select garage"
                        >
                            <Option value="jack">Sales garage</Option>
                            <Option value="lucy">Delivery garage</Option>
                            <Option value="tom">Services garage</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Model:">
                        <Input
                            placeholder="Model" 
                        />
                    </Form.Item>
                    <Form.Item label="Type:">
                        <Select
                            style={{ width: 200 }}
                            placeholder="Select type"
                        >
                            <Option value="jack">Type1</Option>
                            <Option value="lucy">Type2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Vehicle License Plate:">
                        <Input
                            placeholder="Vehicle License Plate" />
                    </Form.Item>
                    <Form.Item label="VIN:">
                        <Input
                            placeholder="VIN" 
                        />
                    </Form.Item>
                    <Form.Item label="Chassis Number:">
                        <Input
                            placeholder="Chassis Number" 
                        />
                    </Form.Item>
                    <Form.Item label="Permitted Speed:">
                        <Input
                            type="number"
                            placeholder="Permitted Speed" 
                        />
                    </Form.Item>
                    <Form.Item label="Tag">
                        <Input placeholder="Tag" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <h4>Dimensions</h4>
                    <Form.Item label="Cargo capacity:">
                        <Input
                            type="number"
                            placeholder="Cargo capacity" 
                        />
                    </Form.Item>
                    <Form.Item label="Number of passengers:">
                        <Input
                            type="number"
                            placeholder="Number of passengers" 
                        />
                    </Form.Item>
                    <h4>Fuel</h4>
                    <Form.Item label="Fuel type:">
                        <Select
                            style={{ width: 200 }}
                            placeholder="Select type"
                        >
                            <Option value="jack">Type1</Option>
                            <Option value="lucy">Type2</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Fuel Grade:">
                        <Input placeholder="Fuel Grade" />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="create-form-button">
                    Add Vehicle
                </Button>
            </Form.Item>
        </Form>
    );
}

export default VehicleCreateForm;
