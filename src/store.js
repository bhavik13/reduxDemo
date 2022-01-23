import appReducer, { INITIAL_STATE } from './Reducers/Reducer';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]
// const rootReducer = combineReducers({ state: appReducer });

const configureStore = () => {
    // return createStore(appReducer, applyMiddleware(logger));
    return createStore(appReducer, INITIAL_STATE, applyMiddleware(...middleware, logger))
}

export default configureStore;
