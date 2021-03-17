import React, { PureComponent } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

import { setCollection } from './actions/collectionActions';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'Kim', age: 30 },
        { id: 2, name: 'Park', age: 27 },
      ]),
    );
  }

  render() {
    return <Provider store={this.store}>Advanced Redux Example</Provider>;
  }
}

export default AdvReduxApp;
