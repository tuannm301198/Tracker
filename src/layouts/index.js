// import styles from './index.css';
import React from 'react';
import { Layout, Menu, Icon, DatePicker } from 'antd';
import Logo from '../assets/logo.png';
import Link from 'umi/link';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    collapsedTask: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  toggleTask = () => {
    this.setState({
      collapsedTask: !this.state.collapsedTask,
    });
  };

  onChangeDate = (date, dateString) => {
    console.log(date, dateString);
  }


  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ padding: 0, backgroundColor: '#000' }} >
          <a href="#" style={{ marginLeft: '25px', float: 'left' }}>
            <img src={Logo} alt="" style={{ width: '150px' }} />
          </a>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} >
            <ul style={{ color: '#fff', listStyle: 'none', display: 'flex' }}>
              <li style={{ paddingRight: 5 }}>
                <a href="#" style={{ border: '1px solid #fff', color: '#000', backgroundColor: '#fff', padding: '5px 10px', borderRadius: 4 }}>
                  <Icon type="google-plus" style={{ paddingRight: 2 }} />
                  <span style={{ fontWeight: 700 }}>Map</span>
                </a>
              </li>
              <li>
                <DatePicker onChange={this.onChangeDate} placeholder="Today" style={{ width: 80, borderRadius: '0' }} />
              </li>
            </ul>
            <ul style={{ color: '#fff', listStyle: 'none', display: 'flex', marginRight: 10 }}>
              <li>
                <a href="#" style={{ color: '#fff', fontSize: '35px' }}>
                  <Icon type="bell" style={{}} />
                </a>
              </li>
            </ul>
          </div>
        </Header>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item style={{ marginTop: '0' }} key="1">
                <Link to="/">
                  <Icon type="pie-chart" />
                  <span>Tracking</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/report">
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
                <Menu.Item key="3">Task</Menu.Item>
                <Menu.Item key="4">Templates</Menu.Item>
                <Menu.Item key="5">Form</Menu.Item>
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
                <Menu.Item key="6">Vehicles</Menu.Item>
                <Menu.Item key="7">Maintenance</Menu.Item>
                <Menu.Item key="8">Drives</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>Devices and Settings</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: '0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: '100vh' }}>{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
