import initialState from 'store/initialState';
import injectReducer from 'store/injectReducer';

import {
  TEST_LOAD,
} from 'store/actionTypes';

const handlers = {
  [`${TEST_LOAD}_REQUEST`]: (state: any) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [`${TEST_LOAD}_SUCCESS`]: (state: any, action: any) => ({
    ...state,
    loading: false,
    error: null,
    data: action.payload,
  }),
  [`${TEST_LOAD}_FAILURE`]: (state: any, action: any) => ({
    ...state,
    loading: false,
    error: action.error,
  }),
};

export default injectReducer(initialState.testReducer, handlers);
