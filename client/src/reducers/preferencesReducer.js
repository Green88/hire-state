import { FETCH_PREFERENCES, getFailedType, getPendingType, getSuccessType } from '../actions/types';

const initialState = {
	data: [],
	isLoading: false,
	success: false,
};

const preferences = (state = initialState, action) => {
     switch(action.type) {
        case getSuccessType(FETCH_PREFERENCES):
            return {
                ...state,
				data: action.payload,
				isLoading: false,
				success: true,
            };
        case getPendingType(FETCH_PREFERENCES):
            return {
                ...state,
                isLoading: true,
                success: false,
            };
        case getFailedType(FETCH_PREFERENCES):
            return {
                ...state,
                isLoading: false,
                success: false,
            };
        default:
            return state; 
     }
};

export default preferences;