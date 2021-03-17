import React, { PureComponent } from 'react';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

import { setCollection, setAge } from './actions/collectionActions';

import PresentationComponent from './PresentationComponent';
import ContainerComponent from './containers/ContainerComponent';

class AdvReduxApp extends PureComponent {
  store = configureStore({ loading: false });

  componentDidMount() {
    this.store.dispatch(
      setCollection([
        { id: 1, name: 'Kim', age: 30 },
        { id: 2, name: 'Park', age: 27 },
      ]),
    );
    this.store.dispatch(setAge(2, 55));

    const { collection } = this.store.getState(); // getState() 함수 이용하면 스토어 전체 객체에 접근 가능
    const { ids, entities } = collection;
    const originalPayload = ids.map(id => entities[id]);
    console.log(originalPayload);
  }

  render() {
    return (
      <Provider store={this.store}>
        화면 컴포넌트 : <PresentationComponent userName="화면 컴포넌트" />
        <br />
        데이터 컴포넌트 : <ContainerComponent id={2} />
      </Provider>
    );
  }
}

export default AdvReduxApp;
