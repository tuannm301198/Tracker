import * as teamServices from '../services/team';

const TeamModel = {
  namespace: 'team',
  state: {
    teamList: []
  },
  effects: {
    *getListTeam(_, { call, put }) {
      const res = yield call(teamServices.getTeam);

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
      return { ...state, teamList: action.payload };
    }
  }
};

export default TeamModel;
