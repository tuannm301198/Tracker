import * as agentServices from '../services/agent';

const AgentModel = {
  namespace: 'agent',
  state: {
    agentList: [],
    createAgent: {},
  },
  effects: {
    *getListAgents(_, { call, put }) {
      const res = yield call(agentServices.getAgent);

      if(res.success) {
        yield put({
          type: 'save',
          payload: res.data,
        })
      }
    }
  },
  reducers: {
    save: (state, action) => {
      return { ...state, agentList: action.payload };
    }
  }
};

export default AgentModel;
