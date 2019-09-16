import { createStore } from 'redux';

import rootReducer from 'reducers';
import middlewares from 'middlewares';

export default function configureStore() {
  const store = createStore(
    rootReducer,
    middlewares,
  );

  // if (module.hot) {
  //   module.hot.accept(() => {
  //     const nextRootReducer = require('../../reducers/index').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }

  return store;
}
