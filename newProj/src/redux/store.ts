import { createStore, combineReducers } from 'redux';

import { postsReducer } from './reducers/postsReducer';
import { settingsReducer } from './reducers/settingsReducer';

const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingsReducer,
})

export default createStore(rootReducer);