import styles from './index.css';
import React from 'react';
import { Layout, Menu, Icon, DatePicker, Button, Select } from 'antd';
import Logo from '../assets/logo.png';
import Link from 'umi/link';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;


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
        let className = styles.sidebar;
        if(this.state.collapsedTask){
            className += "sidebarclose"
        }
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ padding: 0, backgroundColor: '#000' }} >
                    <a href="#" style={{ marginLeft: '25px', float: 'left' }}>
                        <img src={Logo} alt="" style={{ width: '150px' }} />
                    </a>
                    <div className={styles.topheader} >
                        <ul className={styles.leftheader}>
                            <li>
                                <a className={styles.mapbutton} href="#">
                                    <Icon type="google-plus" style={{ marginRight: 2 }} />
                                    <span>Map</span>
                                </a>
                            </li>
                            <li>
                                <DatePicker onChange={this.onChangeDate} placeholder="Today" style={{ width: 80 }} />
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
                                <Button>
                                    Create Task
                                </Button>
                            </li>
                            <li>
                                <a href="#" style={{ color: '#fff', fontSize: '25px' }}>
                                    <Icon type="bell" theme="filled" />
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
                    <div style={{ position: 'relative' }}>
                        <Button style={{ position: 'absolute', left: '100%' }} onClick={this.toggleTask}>+</Button>
                        {/* <Sider className={styles.toggletask} style={{minHeight:'100vh'}} theme="light" collapsed={this.state.collapsedTask}>
                            <div style={{ background: 'rgb(19, 148, 255)' }}>
                                ABC
                        </div>
                            <div>
                                XYZ
                        </div>
                        </Sider> */}
                        <div className={className}>
                            <div style={{ background: 'rgb(19, 148, 255)' }}>
                                ABC
                            </div>
                            <div>
                                XYZ
                            </div>
                        </div>
                    </div>
                    <Content style={{ margin: '0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: '100vh' }}>{this.props.children}</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;