import { FETCH_COMPANIES, EDIT_COMPANY_SCORE, getFailedType, getPendingType, getSuccessType } from '../actions/types';

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
            case getSuccessType(EDIT_COMPANY_SCORE):
                const res = action.payload;
                const updatedData = state.data.map((item) => {
                    if (item._id === res._id) {
                        return {...item, score: res.score };
                    }
                    return item;
                });
                return {
                    ...state,
                    data: updatedData,
                    isLoading: false,
                    success: true,
                };
            case getPendingType(EDIT_COMPANY_SCORE):
                return {
                    ...state,
                    isLoading: true,
                    success: false,
                };
            case getFailedType(EDIT_COMPANY_SCORE):
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