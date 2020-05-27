import React, { useState, useEffect } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Layout, Icon, Tabs } from 'antd';
import { Link } from 'umi';
import { connect } from 'dva';

// components
import AgentItem from './AgentItem';

// styles
import styles from './index.less';

const { Sider } = Layout;
const { TabPane } = Tabs;

const AgentSidebar = props => {
  const { agentList, dispatch } = props;
  const [collapsedAgent, setToggleAgent] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'agent/getListAgents'
    })
  }, [dispatch])

  const toggleAgent = () => {
    setToggleAgent(!collapsedAgent);
  }

  const renderTabPaneTitle = (quantity, title) => (
    <React.Fragment>
      <span style={{ marginRight: 2 }}>{quantity}</span>
      <span>{title}</span>
    </React.Fragment>
  );

  const renderAgentList = agentList.length && (
    <React.Fragment>
      {agentList.map(item => (
          <AgentItem item={item}/>
        )
      )}
    </React.Fragment>
  )

  return (
    <Sider 
      trigger={null} 
      className={styles.container} 
      collapsible 
      collapsed={collapsedAgent} 
      collapsedWidth="0"
      width="330" 
      theme="light"
    >
      <span className={styles.collapseIcon} onClick={toggleAgent}>
        {collapsedAgent ? 
          <LeftOutlined style={{ color: '#fff' }}/> : 
          <RightOutlined style={{ color: '#fff' }}/>
        }
      </span>
      <div style={{ background: 'rgb(39, 169, 227)', padding: 5 }}>
        <Link 
          style={{ color: '#fff', fontSize: 20, marginLeft: 5 }} 
          to=""
        >
          Agent
        </Link>
      </div>
      <Tabs tabBarGutter={25}>
        <TabPane tab={
          renderTabPaneTitle(0, 'FREE')
        } key="1">
          <p style={{ textAlign: "center" }}>No Agent available</p>
        </TabPane>
        <TabPane tab={
          renderTabPaneTitle(0, 'BUSY')
        } key="2">
          <p style={{ textAlign: "center" }}>No Agent available</p>
        </TabPane>
        <TabPane tab={renderTabPaneTitle(agentList.length, 'INACTIVE')} key="3">
          <div className={styles.scrollable}>
            {renderAgentList}
          </div>
        </TabPane>
      </Tabs>
    </Sider>
  )
}

export default connect(state => ({
  agentList: state.agent.agentList
}))(AgentSidebar);
