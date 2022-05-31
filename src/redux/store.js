import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// reducers
import landing from './reducers/landing';
import login from './reducers/login';
import registration from './reducers/registration';
import account from './reducers/account';
import listCommunity from './reducers/listCommunity';
import createCommunity from './reducers/createCom';
import createPost from './reducers/registration';
import search from './reducers/search user';

// rootReducer
const rootReducer = combineReducers({
  landing,
  login,
  registration,
  account,
  createPost,
  listCommunity,
  createCommunity,
  search,
});

// store (main storage)
const store = configureStore({
  reducer: rootReducer,
});
export default store;