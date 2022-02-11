import {
  applyMiddleware, createStore, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewareList = [thunk, logger];

const reducer = combineReducers({
  // reducers
});

const store = createStore(
  reducer,
  applyMiddleware(...middlewareList),
);

export default store;
