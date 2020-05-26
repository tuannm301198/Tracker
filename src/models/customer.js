import * as customerServices from '../services/customer';

const CustomerModel = {
  namespace: 'customer',
  state: {
    customerList: []
  },
  effects: {
    *getListCustomer(_, { call, put }) {
      const res = yield call(customerServices.getCustomer);

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
      return { ...state, customerList: action.payload };
    }
  }
};

export default CustomerModel;
