import { createStore, applyMiddleware } from 'redux';
import { colorReducer } from './reducer';
import thunk from 'redux-thunk';

export const store = createStore(colorReducer, applyMiddleware(thunk));