import axios from 'axios';

const COMPANIES_BASE_URL = '/api/companies';

export const fetchCompanies = () => axios.get(COMPANIES_BASE_URL);

export const fetchCompany = (id) => axios.get(`${COMPANIES_BASE_URL}/${id}`);

export const saveCompany = (company) => axios.post(COMPANIES_BASE_URL, company);

export const updateCompany = (id, company) => axios.put(`${COMPANIES_BASE_URL}/${id}`, company);