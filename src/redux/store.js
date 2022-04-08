import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// reducers
import landing from './reducers/landing';
import login from './reducers/login';
import registration from './reducers/registration';
import home from './reducers/home';
import upload from './reducers/upload';
// rootReducer
const rootReducer = combineReducers({
  landing,
  login,
  home,
  upload,
  registration,
});
// store (main storage)
const store = configureStore({
  reducer: rootReducer,
});
export default store;