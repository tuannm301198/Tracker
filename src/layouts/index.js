import styles from './index.css';
import React from 'react';
import { Layout, Menu, Icon, DatePicker, Button, Select, Tabs } from 'antd';
import Logo from '../assets/logo.png';
import Link from 'umi/link';
const { TabPane } = Tabs;
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
        if (this.state.collapsedTask) {
            className = styles.sidebarclose;
        }
        return (
            <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
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
                    <section style={{ position: 'relative', background: '#fff' }}>
                        <Button style={{ position: 'absolute', left: '100%', borderRadius: '0', border: 'none', height: 40, background: '#b3b3b3' }} onClick={this.toggleTask}>
                            {this.state.collapsedTask ? (<Icon style={{ color: '#fff' }} type="right" />) : (<Icon style={{ color: '#fff' }} type="left" />)}
                        </Button>
                        <div className={className}>
                            <div style={{ background: 'rgb(39, 169, 227)', padding: 5}}>
                                <Link style={{ color: '#fff', fontSize: 20, marginLeft:5 }} to="">Task</Link>
                            </div>
                            <div>
                                <Tabs>
                                    <TabPane  tab={
                                        <><span style={{ marginRight: 2 }}>0</span>
                                        <span>Unassigned</span></>
                                        } key="1">
                                        abc
                                    </TabPane>
                                    <TabPane tab={<><span style={{ marginRight: 2 }}>0</span>
                                        <span>Assigned</span></>} key="2">
                                        xyz
                                    </TabPane>
                                    <TabPane tab={<><span style={{ marginRight: 2 }}>0</span>
                                        <span>Completed</span></>} key="3">
                                        lmn
                                    </TabPane>
                                </Tabs>,
                                {/* <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: 0, margin: 0 }}>
                                    <li>
                                        <a href="#">
                                            <span style={{ marginRight: 2 }}>0</span>
                                            <span>Unassigned</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span style={{ marginRight: 2 }}>0</span>
                                            <span>Assigned</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span style={{ marginRight: 2 }}>0</span>
                                            <span>Completed</span>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                            <div>

                            </div>
                        </div>
                    </section>
                    <Content style={{ margin: '0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 64px)' }}>{this.props.children}</div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default BasicLayout;