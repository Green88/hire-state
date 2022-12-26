import { FETCH_COMPANIES, EDIT_COMPANY_SCORE, EDIT_COMPANY, getFailedType, getPendingType, getSuccessType } from '../actions/types';

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
        case getSuccessType(EDIT_COMPANY):
            const company = action.payload;
            const updatedCompanies = state.data.map((item) => {
                if (item._id === company._id) {
                    return {...item, ...company };
                }
                return item;
            });
            return {
                ...state,
                data: updatedCompanies,
                isLoading: false,
                success: true,
            };
        default:
            return state; 
     }
};

export default companies;