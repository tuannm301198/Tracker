import React, { useEffect } from 'react';
import { connect } from 'dva';

const Templates = props => {
  const { dispatch } = props;

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
