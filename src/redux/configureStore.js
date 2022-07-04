import { legacy_createStore as createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reduceData, { fetchData } from './Continents/Api';

const reducer = combineReducers({
  reduceData,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fetchData());

export default store;
