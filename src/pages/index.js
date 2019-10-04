import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import React from 'react';
import { Layout, Menu, Icon, DatePicker, Button, Select, Tabs } from 'antd';
import Link from 'umi/link';
const { Content, Sider } = Layout;
const { TabPane } = Tabs;


class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    collapsedTask: false,
    collapsedAgent: false
  };
  onCollapseTask = collapsedTask => {
    console.log(collapsedTask);
    this.setState({ collapsedTask });
  };
  onCollapseAgent = collapsedAgent => {
    console.log(collapsedAgent);
    this.setState({ collapsedAgent });
  };


  render() {
    return (
      <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Sider className={styles.collapse} collapsible collapsed={this.state.collapsedTask} onCollapse={this.onCollapseTask} collapsedWidth="0" width="330" theme="light">
          <div style={{ background: 'rgb(39, 169, 227)', padding: 5 }}>
            <Link style={{ color: '#fff', fontSize: 20, marginLeft: 5 }} to="">Task</Link>
          </div>
          <div>
            <Tabs tabBarGutter="0" tabBarStyle={{ width: "400px" }}>
              <TabPane tab={
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
            </Tabs>
          </div>
        </Sider>
        <Content>
          <div className={styles.normal}>
            <div className={styles.welcome} />
            <ul className={styles.list}>
              <li className={styles.a}>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
              <li>
                <a href="https://umijs.org/guide/getting-started.html">
                  {formatMessage({ id: 'index.start' })}
                </a>
              </li>
            </ul>
          </div>
        </Content>
        <Sider className={styles.collapse} collapsible collapsed={this.state.collapsedAgent} onCollapse={this.onCollapseAgent} collapsedWidth="0" width="330" theme="light" reverseArrow>
          <div style={{ background: 'rgb(39, 169, 227)', padding: 5 }}>
            <Link style={{ color: '#fff', fontSize: 20, marginLeft: 5 }} to="">Task</Link>
          </div>
          <div>
            <Tabs tabBarGutter="0" tabBarStyle={{ width: "400px" }}>
              <TabPane tab={
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
            </Tabs>
          </div>
        </Sider>
      </Layout>
    );
  }
}

export default Index;