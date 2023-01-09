import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyForm from '../components/company-form/CompanyForm';
import { saveCompany } from '../api/companies';
import { serializeCompany } from '../utils/company';
import './FormPage.scss';

const initialValues = {
    name: '',
    link: '',
    industry: '',
    technologies: [],
    ceo: '',
    known_members: '',
    location: '',
    address: '',
    location_score: 0,
    size_min: 0,
    size_max: 0,
    hybridity: 0,
    status: '',
    series: '',
    funding: 0,
    salary: 0,
    title: '',
    glassdoor_score: 0,
    glassdoor_comment: '',
};

const AddCompanyPage = () => {
    const navigate = useNavigate();

    const createCompany = async (company) => {
        try {
            await saveCompany(company);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };
    const onSubmit = (values) => {
        createCompany(serializeCompany(values));
    };

    return (
        <div className="form-wrapper">
            <CompanyForm initialValues={initialValues} onSubmit={onSubmit} buttonText="ADD COMPANY" />
        </div>
    );

};

export default AddCompanyPage;