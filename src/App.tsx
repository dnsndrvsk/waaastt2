import * as React from 'react';
import { Provider } from 'react-redux';

import Test from 'pages/Test';

import configureStore from 'store/configureStore';

const store = configureStore();

export default class App extends React.Component<any> {
  
  public render() {
    return (
      <Provider store={store}>
        <Test />
      </Provider>
    );
  }
}
