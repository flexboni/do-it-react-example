import React, { PureComponent } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(resetLoading());
    this.store.dispatch(
      setUser({
        type: 'SET_USER',
        payload: {
          name: 'Kim',
          age: 30,
        },
      }),
    );
  }

  render() {
    return <Provider store={this.store}>Advanced Redux Example</Provider>;
  }
}

export default AdvReduxApp;
