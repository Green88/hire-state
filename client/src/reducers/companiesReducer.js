import { FETCH_COMPANIES, getFailedType, getPendingType, getSuccessType } from '../actions/types';

const initialState = {
	data: [],
	isLoading: false,
	success: false,
};

const companies = (state = initialState, action) => {
     switch(action.type) {
        case getSuccessType(FETCH_COMPANIES):
            return {
                ...state,
				data: action.payload,
				isLoading: false,
				success: true,
            };
        case getPendingType(FETCH_COMPANIES):
            return {
                ...state,
                isLoading: true,
                success: false,
            };
        case getFailedType(FETCH_COMPANIES):
            return {
                ...state,
                isLoading: false,
                success: false,
            };
        default:
            return state; 
     }
};

export default companies;