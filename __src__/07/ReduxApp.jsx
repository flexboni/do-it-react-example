import React, { PureComponent } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state, action) => {
  const { type, payload } = action; // 구조 분해 할당
  switch (
    type // 액션 타입에 맞는 리듀서 실행
  ) {
    case 'SET_LOADING': {
      return {
        ...state,
        loading: payload,
      };
    }
    case 'RESET_LOADING': {
      return { ...state, loading: false }; // loading value 초기화
    }
    case 'SET_USER': {
      return {
        ...state,
        user: payload,
      };
    }
    default:
      return state;
  }
};

class ReduxApp extends PureComponent {
  store = createStore(
    reducer, // 리듀서 설정
    { loading: false, name: 'do it react' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  componentDidMount() {
    this.store.dispatch({
      type: 'SET_LOADING',
      payload: true,
    });
    this.store.dispatch({
      type: 'RESET_LOADING',
    });
    this.store.dispatch({
      type: 'SET_USER',
      payload: {
        // user 정보 추가
        name: 'Kim',
        age: 30,
      },
    });
  }

  render() {
    return <Provider store={this.store}>Redux Example</Provider>;
  }
}

export default ReduxApp;
