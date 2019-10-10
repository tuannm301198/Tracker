import { useState } from 'react';
import { Layout, Menu, Icon, DatePicker, Button, Select, Dropdown} from 'antd';
import ModalCreateTask from '../components/ModalCreateTask/ModalCreateTask'
import Link from 'umi/link';
import styles from './index.css';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

const BasicLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];


  const notification = (
    <div>
      <div style={{backgroundColor:"#eee", padding:7}}><span style={{marginLeft:10}}>Updates</span></div>
      <Menu>
      {
        data.map((item, i) => {
          return (
            <Menu.Item key={i}>
              <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                <Icon type="info-circle" style={{ color: '#1394ff', marginLeft:10 }} theme="filled" />
                <span>{item}</span>
              </a>
            </Menu.Item>
          )
        })
      }
    </Menu>
    </div>
  )


  return (
    <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
      <Header style={{ padding: 0, backgroundColor: '#000' }} >
        <Link to="/" style={{ marginLeft: '25px', float: 'left' }}>
          <div style={{ width: '140px', textAlign: 'center' }}><h1 style={{ color: '#fff' }}>Track360</h1></div>
        </Link>
        <div className={styles.topheader} >
          <ul className={styles.leftheader}>
            <li>
              <Button ghost style={{ borderRadius: 0 }}>
                <Link to="/">
                  <Icon type="google-plus" style={{ marginRight: 2 }} />
                  <span>Map</span>
                </Link>
              </Button>
              <Button style={{ borderRadius: 0 }}>
                <Link to="/report/">
                  <Icon type="unordered-list" style={{ marginRight: 2 }} />
                  <span>List</span>
                </Link>
              </Button>
            </li>
            <li>
              <DatePicker placeholder="Today" style={{ width: 120 }} />
            </li>
            <li>
              <Select defaultValue="allteam" style={{ width: 120 }} >
                <Option value="allteam" > All Team </Option>
                <Option value="lucy" > Lucy </Option>
                <Option value="Yiminghe" > yiminghe </Option>
              </Select >
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
                <Icon type="bell" theme="filled" style={{ fontSize: '25px', cursor: 'pointer' }} />
              </Dropdown>
            </li>
          </ul>
        </div>
      </Header>
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item style={{ marginTop: '0' }} key="1">
              <Link to="/">
                <Icon type="pie-chart" />
                <span>Tracking</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/report/">
                <Icon type="desktop" />
                <span>Report</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Field service</span>
                </span>
              }
            >
              <Menu.Item key="3"><Link to="/task/">Task</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/templates/">Templates</Link></Menu.Item>
              <Menu.Item key="5">Form</Menu.Item>
              <Menu.Item key="6"><Link to="/staff/">Staff</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Fleet management</span>
                </span>
              }
            >
              <Menu.Item key="7">Vehicles</Menu.Item>
              <Menu.Item key="8">Maintenance</Menu.Item>
              <Menu.Item key="9">Drives</Menu.Item>
            </SubMenu>
            <Menu.Item key="10">
              <Icon type="file" />
              <span>Devices and Settings</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ margin: '0', background: '#fff', minHeight: 'calc(100vh - 64px)' }}>
          <ModalCreateTask visible={visible} loading={loading} setVisible={setVisible} setLoading={setLoading} />
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;