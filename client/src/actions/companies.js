import { FETCH_COMPANIES, EDIT_COMPANY_SCORE, EDIT_COMPANY, getFailedType, getSuccessType, getPendingType } from './types';
import { 
    fetchCompanies as fetchCompaniesApi, 
    updateCompanyScore as updateCompanyScoreApi, 
    updateCompany as updateCompanyApi,
} from '../api/companies';

export const fetchCompanies = () => {
    return async (dispatch) => {
        dispatch({ type: getPendingType(FETCH_COMPANIES)});
        try {
            const response = await fetchCompaniesApi();
            dispatch({
                type: getSuccessType(FETCH_COMPANIES),
                payload: response.data,
            });
        } catch (err) {
            console.error(err);
            dispatch({
                type: getFailedType(FETCH_COMPANIES),
            });
        }
    }; 
};

export const updateCompany = (companyId, data) => {
    return async (dispatch) => {
        try {
            const response = await updateCompanyApi(companyId, data);
            dispatch({
                type: getSuccessType(EDIT_COMPANY),
                payload: response.data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};

export const updateCompanyScore = (companyId, username) => {
    return async (dispatch) => {
        try {
            const response = await updateCompanyScoreApi(companyId, username);
            dispatch({
                type: getSuccessType(EDIT_COMPANY_SCORE),
                payload: response.data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};



