import { Form, Input, Button, Select, Col, Row } from 'antd';

const { Option } = Select;

const VehicleCreateForm = (props) => {
    const { getFieldDecorator } = props.form;
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
            <Row gutter={24}>
                <Col span={12}>
                    <h4>Summary</h4>
                    <Form.Item label="Label:">
                        {getFieldDecorator('label', {
                            rules: [{ required: true, message: 'Please input your label!' }],
                        })(
                            <Input
                                placeholder="Label"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="Tracker:">
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
                    <Form.Item label="Garage:">
                        {getFieldDecorator('garage', {
                            rules: [{ required: true, message: 'Please select garage' }],
                        })(
                            <Select
                                style={{ width: 200 }}
                                placeholder="Select garage"
                            >
                                <Option value="jack">Sales garage</Option>
                                <Option value="lucy">Delivery garage</Option>
                                <Option value="tom">Services garage</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="Model:">
                        {getFieldDecorator('model', {
                            rules: [{ required: true, message: 'Please input your model' }],
                        })(
                            <Input
                                placeholder="Model" />,
                        )}
                    </Form.Item>
                    <Form.Item label="Type:">
                        {getFieldDecorator('type', {
                            rules: [{ required: true, message: 'Please select type' }],
                        })(
                            <Select
                                style={{ width: 200 }}
                                placeholder="Select type"
                            >
                                <Option value="jack">Type1</Option>
                                <Option value="lucy">Type2</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="Vehicle License Plate:">
                        {getFieldDecorator('vehicle license plate', {
                            rules: [{ required: true, message: 'Please input Vehicle License Plate' }],
                        })(
                            <Input
                                placeholder="Vehicle License Plate" />,
                        )}
                    </Form.Item>
                    <Form.Item label="VIN:">
                        {getFieldDecorator('vin', {
                            rules: [{ required: true, message: 'Please input VIN' }],
                        })(
                            <Input
                                placeholder="VIN" />,
                        )}
                    </Form.Item>
                    <Form.Item label="Chassis Number:">
                        {getFieldDecorator('chassis number', {
                            rules: [{ required: true, message: 'Please input Chassis Number' }],
                        })(
                            <Input
                                placeholder="Chassis Number" />,
                        )}
                    </Form.Item>
                    <Form.Item label="Permitted Speed:">
                        {getFieldDecorator('permitted speed', {
                            rules: [{ required: true, message: 'Please input your Permitted Speed' }],
                        })(
                            <Input
                                type="number"
                                placeholder="Permitted Speed" />,
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
                </Col>
                <Col span={12}>
                    <h4>Dimensions</h4>
                    <Form.Item label="Cargo capacity:">
                        {getFieldDecorator('Cargo capacity', {
                            rules: [{ required: true, message: 'Please input your Cargo capacity' }],
                        })(
                            <Input
                                type="number"
                                placeholder="Cargo capacity" />,
                        )}
                    </Form.Item>
                    <Form.Item label="Number of passengers:">
                        {getFieldDecorator('number of passengers', {
                            rules: [{ required: true, message: 'Please input your Number of passengers' }],
                        })(
                            <Input
                                type="number"
                                placeholder="Number of passengers" />,
                        )}
                    </Form.Item>
                    <h4>Fuel</h4>
                    <Form.Item label="Fuel type:">
                        {getFieldDecorator('fuel type', {
                            rules: [{ required: true, message: 'Please select Fuel type' }],
                        })(
                            <Select
                                style={{ width: 200 }}
                                placeholder="Select type"
                            >
                                <Option value="jack">Type1</Option>
                                <Option value="lucy">Type2</Option>
                            </Select>,
                        )}
                    </Form.Item>
                    <Form.Item label="Fuel Grade:">
                        {getFieldDecorator('fuel grade', {
                            rules: [{ required: true, message: 'Please input your Fuel Grade' }],
                        })(
                            <Input
                                placeholder="Fuel Grade" />,
                        )}
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

const VehicleForm = Form.create({ name: 'vehicle_form' })(VehicleCreateForm);

export default VehicleForm;