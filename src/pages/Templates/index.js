import React, { useEffect } from 'react';
import { connect } from 'dva';

const Templates = props => {
  const { dispatch, agentList, customerList, managerList, taskList, teamList } = props;

  console.log('agentList', agentList)
  console.log('customerList', customerList)
  console.log('managerList', managerList)
  console.log('taskList', taskList)
  console.log('teamList', teamList)

  useEffect(() => {
    dispatch({
      type: 'agent/getListAgents'
    })
    dispatch({
      type: 'customer/getListCustomer'
    })
    dispatch({
      type: 'manager/getListManager'
    })
    dispatch({
      type: 'task/getListTask'
    })
    dispatch({
      type: 'team/getListTeam'
    })
  }, [])

  return (
    <div>
      <div />
      <h2 style={{textAlign:'center'}}>Welcome to Templates</h2>
    </div>
  );
}
export default connect(state => ({
  agentList: state.agent.agentList,
  customerList: state.customer.customerList,
  managerList: state.manager.managerList,
  taskList: state.task.taskList,
  teamList: state.team.teamList,
}))(Templates);
