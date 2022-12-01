import { SET_ACTIVE_TAB } from '../actionTypes/settingsActionTypes';
import { TABS } from '../../constants';

const initial_state = {
    activeTab: TABS.all,
}

const settingsReducer = (state = initial_state, action: any) => {
    switch(action.type) {
        case SET_ACTIVE_TAB: {
            const { activeTab } = action;
            return ({
                ...state,
                activeTab,
            })
        }
        default: return state;
    }
}

export { settingsReducer }