import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

class ReduxApp extends PureComponent {
  store = createStore(
    state => state,
    { loading: false, name: 'do it react' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  render() {
    return <Provider store={this.store}>Redux Example</Provider>;
  }
}

export default ReduxApp;
