export const FETCH_COMPANIES = 'fetch_companies';
export const FETCH_COMPANY = 'fetch_company';
export const EDIT_COMPANY = 'edit_company';

export const EDIT_COMPANY_SCORE = 'edit_company_score';

export const FETCH_PREFERENCES = 'ferch_preferences';

export const getSuccessType = (type) => `${type}_SUCCESS`;
export const getPendingType = (type) => `${type}_PENDING`;
export const getFailedType = (type) => `${type}_FAILED`;