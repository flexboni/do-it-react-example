import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import ModalProvider from './ModalProvider';
import NotificationContainer from './containers/NotificationContainer';

import AppLayout from './components/AppLayout';
import MaingPage from './components/main/MainPage';

class App extends PureComponent {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <ModalProvider>
          <AppLayout>
            <MaingPage />
            <NotificationContainer />
          </AppLayout>
        </ModalProvider>
      </Provider>
    );
  }
}

export default App;
