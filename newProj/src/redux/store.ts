import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects'

import { postsReducer } from './reducers/postsReducer';
import { settingsReducer } from './reducers/settingsReducer';
import { watcherPosts } from './actionCreators/postsActionCreators';
import { watcherUser } from './actionCreators/userActionCreators';

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga(){
    yield all([
        watcherPosts(),
        watcherUser(),
    ])
} 

const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingsReducer,
})

export default createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);