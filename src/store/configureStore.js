import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import notificationEffects from '../middleware/notificationEffect';
import transactionEffect from '../middleware/transactionEffect';

export default initStates =>
  createStore(
    combineReducers(reducers),
    initStates,
    composeWithDevTools(
      applyMiddleware(thunk, reduxPackMiddleware, notificationEffects, transactionEffect),
    ),
  );
