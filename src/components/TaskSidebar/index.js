import React, { useState, useEffect } from 'react';
import { Layout, Tabs } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'umi';
import { connect } from 'dva';

// components
import TaskItem from './TaskItem';

// styles
import styles from './index.less';

const { Sider } = Layout;
const { TabPane } = Tabs;

const TaskSidebar = props => {
  const { taskList, dispatch } = props;
  const [collapsedTask, setToggleTask] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'task/getListTask'
    })
  }, [dispatch])

  const toggleTask = () => {
    setToggleTask(!collapsedTask);
  }

  const renderTabPaneTitle = (quantity, title) => (
    <React.Fragment>
      <span style={{ marginRight: 2 }}>{quantity}</span>
      <span>{title}</span>
    </React.Fragment>
  );

  const renderTaskList = taskList.length && (
    <React.Fragment>
      {taskList.map(item => (
          <TaskItem task={item}/>
        )
      )}
    </React.Fragment>
  )

  return (
    <Sider 
      trigger={null} 
      className={styles.container} 
      collapsible 
      collapsed={collapsedTask} 
      collapsedWidth="0" 
      width="330" 
      theme="light"
    >
      <span 
        className={styles.collapseIcon}
        onClick={toggleTask}>
          {collapsedTask ?
            <RightOutlined style={{ color: '#fff' }}/> :
            <LeftOutlined style={{ color: '#fff' }}/>
          }
      </span>
      <div style={{ background: 'rgb(39, 169, 227)', padding: 5 }}>
        <Link style={{ color: '#fff', fontSize: 20, marginLeft: 5 }} to="">Task</Link>
      </div>
      <Tabs tabBarGutter={20}>
        <TabPane tab={renderTabPaneTitle(0, "UNASSIGNED")} key="1">
          <p style={{ textAlign: "center" }}>No task available for the day</p>
        </TabPane>
        <TabPane tab={renderTabPaneTitle(taskList.length, "ASSIGNED")} key="2">
          <div className={styles.scrollable}>
            {renderTaskList}
          </div>
        </TabPane>
        <TabPane tab={renderTabPaneTitle(0, "COMPLETED")} key="3">
          <p style={{ textAlign: "center" }}>No task available for the day</p>
        </TabPane>
      </Tabs>
    </Sider>
  )
}

export default connect(state => ({
  taskList: state.task.taskList
}))(TaskSidebar);
