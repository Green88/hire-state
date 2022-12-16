import { FETCH_COMPANIES, getFailedType, getSuccessType, getPendingType } from './types';
import { fetchCompanies as fetchCompaniesApi} from '../api/companies';

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



