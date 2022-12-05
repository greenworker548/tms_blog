import { ADD_FAVORITE, REMOVE_FAVORITE, SET_COUNT_TOTAL } from '../actionTypes/postsActionTypes';

import { SET_POSTS } from '../actionTypes/postsActionTypes';

import { IPost } from '../types';

const loadPosts = () => {
    return async (dispatch: any) => {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts?offset=10');
        const data = await response.json();
        const { results, count } = data;
        dispatch(setPostsTotal(count));
        dispatch(setPosts(results))
    }
}

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

export {
    setPosts,
    loadPosts,
    addFavorite,
    removeFavorite,
    setPostsTotal,
}