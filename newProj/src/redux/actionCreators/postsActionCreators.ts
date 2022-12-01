import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actionTypes/postsActionTypes';

import { SET_POSTS } from '../actionTypes/postsActionTypes';

import { IPost } from '../types';

const setPosts = (posts: IPost[]) => ({
    type: SET_POSTS,
    posts,
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
    addFavorite,
    removeFavorite,
}