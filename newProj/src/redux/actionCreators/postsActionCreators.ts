import { takeEvery, put } from 'redux-saga/effects'

import { LOAD_POSTS, SET_SEARCH_VALUE } from '../actionTypes/postsActionTypes';

import { ADD_FAVORITE, REMOVE_FAVORITE, SET_COUNT_TOTAL } from '../actionTypes/postsActionTypes';

import { SET_POSTS } from '../actionTypes/postsActionTypes';

import { IPost } from '../types';


function* fetchLoadPosts(action: any) {
    const { payload } = action;
    const { rowsPerPage, currentPage, searchValue } = payload;
    const response: Response = yield fetch(`https://studapi.teachmeskills.by/blog/posts?limit=${rowsPerPage}&offset=${(currentPage - 1) * rowsPerPage}&search=${searchValue}`);
    const data: {count: number, results: IPost[]} = yield response.json();
    const { results, count } = data;
    yield put(setPostsTotal(count));
    yield put(setPosts(results));
}

const loadPosts = (payload: {currentPage: number, rowsPerPage: number, searchValue: string}) => ({
    type: LOAD_POSTS,
    payload,
})

const setSearchValue = (value: string) => ({
    type: SET_SEARCH_VALUE,
    value,
})

const setPosts = (posts: IPost[]) => ({
    type: SET_POSTS,
    posts,
});

const setPostsTotal = (count: number) => ({
    type: SET_COUNT_TOTAL,
    count,
});

const addFavorite = (id: number) => ({
    type: ADD_FAVORITE,
    id,
});

const removeFavorite = (id: number) => ({
    type: REMOVE_FAVORITE,
    id,
});

function* watcherPosts() {
    yield takeEvery(LOAD_POSTS, fetchLoadPosts)
}

export {
    setPosts,
    loadPosts,
    addFavorite,
    removeFavorite,
    setPostsTotal,
    watcherPosts,
    setSearchValue,
}