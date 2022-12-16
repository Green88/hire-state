import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../actions/companies';
import Company from '../components/Company';
import AddCompanyCard from '../components/AddCompanyCard';
import './MainPage.scss';


const MainPage = () => {
    const { data: companies, isLoading, success } = useSelector((state) => state.companies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

    console.log({companies, isLoading, success});

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!success) {
        return <div />;
    }

    return (
        <div className="main-page">
            <div className="companies">
                <AddCompanyCard />
                {companies.map(company => <Company key={company._id} {...company} />)}
            </div>
        </div>
    );
};

export default MainPage;