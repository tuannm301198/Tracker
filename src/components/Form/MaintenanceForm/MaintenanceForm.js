import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Col,
  Row,
  Typography,
  Checkbox,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
const { Option } = Select;
const { Text, Title } = Typography;
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

const MaintenanceForm = () => {
  const [dateCheckbox, setDateCheckbox] = useState(false);
  const [milesCheckbox, setMilesCheckbox] = useState(false);
  const onChangeDate = () => {
    setDateCheckbox(!dateCheckbox);
  };
  const onChangeMiles = () => {
    setMilesCheckbox(!milesCheckbox);
  };
  return (
    <Form colon={false}>
      <Row gutter={16}>
        <Col span={12}>
          <Title level={3}>Summary</Title>
          <Row style={{ marginBottom: '10px' }}>
            <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
              <Text type="secondary" style={{ marginBottom: '4px' }}>
                Name
              </Text>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
              <Text type="secondary" style={{ marginBottom: '4px' }}>
                Vehicle
              </Text>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
              <Text type="secondary" style={{ marginBottom: '4px' }}>
                Department
              </Text>
              <Input defaultValue="Service Department" />
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
              <Text type="secondary" style={{ marginBottom: '4px' }}>
                Description
              </Text>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
              <Text type="secondary" style={{ marginBottom: '4px' }}>
                Cost
              </Text>
              <Input />
            </Col>
          </Row>
          <Row style={{ marginBottom: '10px' }}>
            <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
              <Text type="secondary" style={{ marginBottom: '4px' }}>
                Contact number
              </Text>
              <Input />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Title level={3}>Service Interval</Title>
          <Checkbox checked={dateCheckbox} onChange={onChangeDate}>
            By date
          </Checkbox>

          {dateCheckbox ? (
            <>
              <Row style={{ marginBottom: '10px' }}>
                <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                  <Text type="secondary" style={{ marginBottom: '4px' }}>
                    Execute
                  </Text>
                  <DatePicker />
                </Col>
              </Row>
              <Row style={{ marginBottom: '10px' }}>
                <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                  <Text type="secondary" style={{ marginBottom: '4px' }}>
                    Remind before
                  </Text>
                  <Input suffix="days" />
                </Col>
              </Row>
            </>
          ) : null}
          <Checkbox checked={milesCheckbox} onChange={onChangeMiles}>
            By mileage
          </Checkbox>
          {milesCheckbox ? (
            <>
              <Row style={{ marginBottom: '10px' }}>
                <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                  <Text type="secondary" style={{ marginBottom: '4px' }}>
                    After
                  </Text>
                  <Input defaultValue="1000" suffix="km" />
                </Col>
              </Row>
              <Row style={{ marginBottom: '10px' }}>
                <Col style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
                  <Text type="secondary" style={{ marginBottom: '4px' }}>
                    Remind before
                  </Text>
                  <Input defaultValue="100" suffix="km" />
                </Col>
              </Row>
            </>
          ) : null}
          <Title level={3} style={{ marginTop: '30px' }}>
            Files
          </Title>
          <Form.Item
            name="upload"
            label="Upload"
            valuePropName="fileList"
            extra="Add files, for example, invoice or internal document for the service work. The file size limit - 16 MB"
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />}>Click to upload</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default MaintenanceForm;
