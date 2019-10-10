import { useState } from 'react';
import { formatMessage } from 'umi-plugin-locale';
import { Layout, Icon, Tabs } from 'antd';
import Link from 'umi/link';

import styles from './index.css';

const { Content, Sider } = Layout;
const { TabPane } = Tabs;

const Pages = () => {
  const [collapsedTask,setToggleTask] = useState(false);
  const [collapsedAgent,setToggleAgent] = useState(false);
  const toggleTask = () => {
    setToggleTask(!collapsedTask);
  }
  const toggleAgent = () => {
    setToggleAgent(!collapsedAgent);
  }
  return (
    <Layout style={{ minHeight: 'calc(100vh - 64px)' }}>
      <Sider trigger={null} className={styles.collapse} collapsible collapsed={collapsedTask} collapsedWidth="0" width="330" theme="light">
        <span style={{ position: "absolute", left: "100%", background: '#717171', padding: 9.5, borderRadius: "0 0 4px", cursor: "pointer" }} onClick={toggleTask}>
          <Icon
            className="trigger"
            style={{color:'#fff'}}
            type={collapsedTask ? 'right' : 'left'}
          />
        </span>
        <div style={{ background: 'rgb(39, 169, 227)', padding: 5 }}>
          <Link style={{ color: '#fff', fontSize: 20, marginLeft: 5 }} to="">Task</Link>
        </div>
        <Tabs tabBarGutter={0} tabBarStyle={{ width: "400px" }}>
          <TabPane tab={
            <><span style={{ marginRight: 2 }}>0</span>
              <span>Unassigned</span></>
          } key="1">
            <p style={{textAlign:"center"}}>No task available for the day</p>
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
      <Sider trigger={null} className={styles.collapse} collapsible collapsed={collapsedAgent} collapsedWidth="0" width="300" theme="light">
        <span style={{ position: "absolute", right: "100%", background: '#717171', padding: 9.5, borderRadius: "0 0 0 4px", cursor: "pointer" }} onClick={toggleAgent}>
          <Icon
            style={{color:'#fff'}}
            className="trigger"
            type={collapsedAgent ? 'left' : 'right'}
          />
        </span>
        <div style={{ background: 'rgb(39, 169, 227)', padding: 5 }}>
          <Link style={{ color: '#fff', fontSize: 20, marginLeft: 5 }} to="">Agent</Link>
        </div>
        <Tabs tabBarGutter={0} tabBarStyle={{ width: "300px" }}>
          <TabPane tab={
            <><span style={{ marginRight: 2 }}>0</span>
              <span>FREE</span></>
          } key="1">
            <p style={{textAlign:"center"}}>No Agent available</p>
          </TabPane>
          <TabPane tab={
            <>
              <span style={{ marginRight: 2 }}>0</span>
              <span>BUSY</span>
            </>
          } key="2">
            xyz
          </TabPane>
          <TabPane tab={<><span style={{ marginRight: 2 }}>0</span>
            <span>INACTIVE</span></>} key="3">
            lmn
          </TabPane>
        </Tabs>
      </Sider>
    </Layout>
  );
}

export default Pages;