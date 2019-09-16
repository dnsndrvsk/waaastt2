import axios from 'axios';

import config from 'config';

export default (store: any) => (next: any) => (action: any) => {
  if (action.url) {
    const { url, method, payload, ...rest } = action;
    // const state = store.getState();

    next({
      ...rest,
      type: `${rest.type}_REQUEST`,
      url,
      method,
      payload,
    });
    
    const headers = {
      'Content-Type': 'application/json'
    };

    axios({
      url: /^(https?:\/\/)/.test(url) ? url : `${config.apiUrl}${url}`,
      method: method || 'GET',
      data: payload,
      headers: {
        ...headers,
        ...action.headers,
      },
    }).then(response => {
      if (response.status >= 400) throw response.data;

      return next({
        ...rest,
        type: `${rest.type}_SUCCESS`,
        payload: response.data,
      });
    }).catch(error => {
      if (!process.env.production) console.log(error);
      return next({
        ...rest,
        type: `${rest.type}_FAILURE`,
        errorMessage: error.error,
        error,
      });
    });
  } else {
    return next(action);
  }
};
