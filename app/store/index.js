import thunkMiddleWare from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store.js';

export default createStore(rootReducer, applyMiddleware(thunkMiddleWare));