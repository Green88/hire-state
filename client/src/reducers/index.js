import { combineReducers } from 'redux';
import companiesReducer from './companiesReducer';
import preferencesReducer from './preferencesReducer';

export default combineReducers({
    companies: companiesReducer,
    preferences: preferencesReducer,
});