import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actionTypes/postsActionTypes';

import { IPostsStore } from '../types';
import { SET_POSTS } from '../actionTypes/postsActionTypes';

const initialState = {
    posts: [],
    favorites: [],
}

const postsReducer = (state: IPostsStore = initialState , action: any) => {
    switch (action.type) {
        case SET_POSTS: {
            const { posts } = action;
            return ({
                ...state,
                posts,
            })
        }
        case ADD_FAVORITE: {
            const {id} = action;
            return ({
                ...state,
                favorites: [...state.favorites, id],
            })
        }
        case REMOVE_FAVORITE: {
            const {id} = action;
            return ({
                ...state,
                favorites: state.favorites.filter((el) => el !== id),
            })
        }
        default: return state;
    }
}

export { postsReducer };