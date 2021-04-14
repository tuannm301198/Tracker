import { useState, useEffect } from 'react';
import { Layout, Menu, DatePicker, Button, Select, Dropdown, Row, Col } from 'antd';
import {
  EnvironmentOutlined,
  AuditOutlined,
  GooglePlusOutlined,
  UnorderedListOutlined,
  InfoCircleFilled,
  BellFilled,
  LogoutOutlined,
} from '@ant-design/icons';
import ModalCreateTask from '../components/Modal/ModalCreateTask/ModalCreateTask';
import { Link, router, Redirect } from 'umi';
import styles from './index.css';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

const data = [
  {
    noti: 'Racing car sprays burning fuel into crowd.',
    date: '24 Aug',
  },
  {
    noti: 'Japanese princess to wed commoner.',
    date: '22 Aug',
  },
  {
    noti: 'Australian walks 100km after outback crash.',
    date: '21 Aug',
  },
  {
    noti: 'Man charged over missing wedding girl.',
    date: '20 Aug',
  },
  {
    noti: 'Los Angeles battles huge wildfires.',
    date: '19 Aug',
  },
];

const BasicLayout = props => {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  // check login
  // useEffect(() => {
  const user = localStorage.getItem('user');
  if (!user) return <Redirect to="/auth/login" />;
  // }, [])

  const handleClickSignOut = () => {
    localStorage.removeItem('user');
    router.push('/auth/login');
  };

  const notification = (
    <div style={{ backgroundColor: '#fff' }}>
      <div style={{ backgroundColor: '#eee', padding: 7 }}>
        <span style={{ marginLeft: 10 }}>Updates</span>
      </div>
      {data.map((item, i) => {
        return (
          <Row key={i} style={{ padding: '10px 0px', borderBottom: '0.5px solid #d9d9d9' }}>
            <Col span={2} style={{ verticalAlign: 'middle' }}>
              <InfoCircleFilled
                style={{ color: '#1394ff', marginLeft: 10, verticalAlign: 'middle' }}
              />
            </Col>
            <Col span={21} offset={1}>
              <span style={{ display: 'block' }}>{item.noti}</span>
              <span style={{ display: 'block', color: '#d9d9d9', fontSize: '10px' }}>
                {item.date}
              </span>
            </Col>
          </Row>
        );
      })}
    </div>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ padding: 0, backgroundColor: '#000' }}>
        <Link to="/" style={{ marginLeft: '25px', float: 'left' }}>
          <div style={{ width: '140px', textAlign: 'center' }}>
            <h1 style={{ color: '#fff' }}>Track360</h1>
          </div>
        </Link>
        <div className={styles.topheader}>
          <ul className={styles.leftheader}>
            <li>
              <Button ghost style={{ borderRadius: 0 }}>
                <Link to="/">
                  <GooglePlusOutlined style={{ marginRight: 2 }} />
                  <span>Map</span>
                </Link>
              </Button>
              <Button style={{ borderRadius: 0 }}>
                <Link to="/task/">
                  <UnorderedListOutlined style={{ marginRight: 2 }} />
                  <span>List</span>
                </Link>
              </Button>
            </li>
            <li>
              <DatePicker placeholder="Today" style={{ width: 120 }} />
            </li>
            <li>
              <Select defaultValue="allteam" style={{ width: 120 }}>
                <Option value="allteam"> All Team </Option>
                <Option value="lucy"> Lucy </Option>
                <Option value="Yiminghe"> yiminghe </Option>
              </Select>
            </li>
          </ul>
          <ul className={styles.rightheader}>
            <li>
              <Button ghost onClick={showModal}>
                Create Task
              </Button>
            </li>
            <li>
              <Dropdown overlay={notification} placement="bottomRight" trigger={['click']}>
                <BellFilled style={{ fontSize: '25px', cursor: 'pointer' }} />
              </Dropdown>
            </li>
          </ul>
        </div>
      </Header>
      <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item style={{ marginTop: '0' }} key="1">
              <Link to="/">
                <EnvironmentOutlined />
                <span>Tracking</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/report/">
                <AuditOutlined />
                <span>Report</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <AuditOutlined />
                  <span>Field service</span>
                </span>
              }
            >
              <Menu.Item key="3">
                <Link to="/task/">Task</Link>
              </Menu.Item>
              {/* <Menu.Item key="4"><Link to="/templates/">Templates</Link></Menu.Item> */}
              {/* <Menu.Item key="5">Form</Menu.Item> */}
              <Menu.Item key="6">
                <Link to="/staff/">Staff</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <AuditOutlined />
                  <span>Fleet management</span>
                </span>
              }
            >
              <Menu.Item key="7">
                <Link to="/fleet/vehicles">Vehicles</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/fleet/drivers">Drivers</Link>
              </Menu.Item>
              <Menu.Item key="9">Maintenance</Menu.Item>
            </SubMenu>
            <Menu.Item key="10">
              <AuditOutlined />
              <span>Devices and Settings</span>
            </Menu.Item>
            <Menu.Item key="11" onClick={handleClickSignOut}>
              <LogoutOutlined />
              <span>Sign out</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: '0', background: '#fff' }}>
          <ModalCreateTask visible={visible} setVisible={setVisible} />
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
