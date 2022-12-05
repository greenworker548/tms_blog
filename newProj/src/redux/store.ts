import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { postsReducer } from './reducers/postsReducer';
import { settingsReducer } from './reducers/settingsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingsReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk));