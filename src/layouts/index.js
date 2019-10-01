// import styles from './index.css';
import React from 'react';
import { Layout, Menu, Icon, DatePicker } from 'antd';
import Logo from '../assets/logo.png';
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
          <a href="#" style={{marginLeft:'25px', float:'left'}}>
                <img src={Logo} alt="" style={{ width: '150px' }} />
          </a>
          <div style={{ display: 'flex', justifyContent:'space-between' }} >
            <ul style={{ color: '#fff', listStyle: 'none', display:'flex' }}>
              <li>
                  <a href="#" style={{border:'1px solid #fff', color:'#000', backgroundColor:'#fff', padding:5}}>
                    <Icon type="google-plus" style={{paddingRight:2}}/>
                    <span style={{fontWeight:700}}>Map</span>
                  </a>
              </li>
              <li>
                  <DatePicker onChange={this.onChangeDate} placeholder="Today" style={{width:'50%', borderRadius:'0'}}/>
              </li>
            </ul>
            <ul style={{ color: '#fff', listStyle: 'none', display:'flex' }}>
              <li>
                  <a href="#" style={{color:'#fff', fontSize:'35px'}}>
                    <Icon type="bell" style={{}}/>
                  </a>
              </li>
            </ul>
          </div>
        </Header>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: '0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: '90vh' }}>{this.props.children}</div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
