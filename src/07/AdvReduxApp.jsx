import React, { PureComponent } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

class AdvReduxApp extends PureComponent {
  store = configureStore({});

  render() {
    return <Provider store={this.store}>Advanced Redux Example</Provider>;
  }
}

export default AdvReduxApp;
