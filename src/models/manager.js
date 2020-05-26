import * as managerServices from '../services/manager';

const ManagerModel = {
  namespace: 'manager',
  state: {
    managerList: []
  },
  effects: {
    *getListManager(_, { call, put }) {
      const res = yield call(managerServices.getManager);

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
      return { ...state, managerList: action.payload };
    }
  }
};

export default ManagerModel;
