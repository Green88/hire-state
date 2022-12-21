import { FETCH_PREFERENCES, getFailedType, getSuccessType, getPendingType } from './types';
import { fetchPrefs as fetchPreferencesApi} from '../api/preferences';

export const fetchPreferences = (username) => {
    return async (dispatch) => {
        dispatch({ type: getPendingType(FETCH_PREFERENCES)});
        try {
            const response = await fetchPreferencesApi(username);
            dispatch({
                type: getSuccessType(FETCH_PREFERENCES),
                payload: response.data.pref,
            });
        } catch (err) {
            console.error(err);
            dispatch({
                type: getFailedType(FETCH_PREFERENCES),
            });
        }
    }; 
};
