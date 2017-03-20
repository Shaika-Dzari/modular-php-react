import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

// Module Reducers
import bannerReducer from '../../model/banner.js';
import errorReducer from '../../model/error.js';

// Combine them
const appReducers = combineReducers({
    banner: bannerReducer,
    error: errorReducer
});


// Logger
const logger = store => next => action => {
    let actionType = action.type;
    let result = next(action);
    console.log(actionType, '>', store.getState());
    return result;
}

let preloadedState = {};

const store = createStore(
  appReducers,
  preloadedState,
  applyMiddleware (thunkMiddleware, logger)
);

export default store;