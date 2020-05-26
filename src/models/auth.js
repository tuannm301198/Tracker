import * as authServices from '../services/auth';

const AuthModel = {
  namespace: 'auth',
  state: {
    loginData: []
  },
  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(authServices.login, payload);

      if(res.success) {
        yield put({
          type: 'save',
          payload: res.data,
        });
        localStorage.setItem(
          'user', res.data[0].name,
        );
      }
    }
  },
  reducers: {
    save: (state, action) => {
      return { ...state, loginData: action.payload };
    }
  }
};

export default AuthModel;
