import React, { PureComponent } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

import PresentationComponent from './PresentationComponent';
import ContainerComponent from './containers/ContainerComponent';
import DispatchContainer from './containers/DispatchContainer';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트 : <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트 : <ContainerComponent id={2} />
        <br />
        최종 액션 데이터 컴포넌트 : <DispatchContainer />
      </Provider>
    );
  }
}

export default AdvReduxApp;
