import { SET_COUNT_TOTAL, SET_SEARCH_VALUE } from '../actionTypes/postsActionTypes';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actionTypes/postsActionTypes';

import { IPostsStore } from '../types';
import { SET_POSTS } from '../actionTypes/postsActionTypes';

const initialState = {
    posts: [],
    favorites: [],
    countTotal: 0,
    searchValue: '',
}

const postsReducer = (state: IPostsStore = initialState , action: any) => {
    switch (action.type) {
        case SET_COUNT_TOTAL: {
            const { count } = action;
            return ({
                ...state,
                countTotal: count,
            })
        }
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
        case SET_SEARCH_VALUE: {
            const { value } = action;
            return ({
                ...state,
                searchValue: value,
            })
        }
        default: return state;
    }
}

export { postsReducer };