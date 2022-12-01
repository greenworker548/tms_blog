import { SET_ACTIVE_TAB } from '../actionTypes/settingsActionTypes';

const setActiveTab = (activeTab: string) => ({
    type: SET_ACTIVE_TAB,
    activeTab,
});

export { setActiveTab }