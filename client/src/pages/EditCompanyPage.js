import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCompany, updateCompany } from '../api/companies';
import CompanyForm from '../components/form/CompanyForm';
import { serializeCompany, deserializeCompany } from '../utils/company';
import './AddCompanyPage.scss';


const EditCompanyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [company, setCompany] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getCompany = async () => {
            setIsLoading(true);
            const res = await fetchCompany(id);
            setCompany(deserializeCompany(res.data));
            setIsLoading(false);
        }
        getCompany();
    }, [id]);

    const sendUpdateCompanyRequest = async (serialized) => {
        try {
            await updateCompany(id, serialized);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };
    
    const onSubmit = (values) => {
        sendUpdateCompanyRequest(serializeCompany(values));
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!company) {
        return <div />;
    }

    return (
        <div className="company-form-wrapper">
            <CompanyForm initialValues={company} onSubmit={onSubmit} buttonText="UPDATE COMPANY" />
        </div>
    );
};

export default EditCompanyPage;
