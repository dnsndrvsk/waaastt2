import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import axios from './axios';

const middlewareList = [
  axios,
];

if (!process.env.production) {
  middlewareList.push(createLogger({ collapsed: true }));
}

export default applyMiddleware(...middlewareList, thunk);
