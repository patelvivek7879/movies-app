import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducers';
import rootSaga from './sagas';
import logger from 'redux-logger';



const store = createStore(reducer, applyMiddleware(rootSaga,logger));


export default store;


