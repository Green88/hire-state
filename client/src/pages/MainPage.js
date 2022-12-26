import React, {useEffect} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchCompanies } from '../actions/companies';
import Company from '../components/Company';
import AddCompanyCard from '../components/AddCompanyCard';
import './MainPage.scss';


const MainPage = () => {
    const currentUser = localStorage.getItem('user');
    const { data: companies, isLoading, success } = useSelector((state) => state.companies, shallowEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

    if (isLoading) {
        return <CircularProgress />;
    }

    if (!success) {
        return <div />;
    }

    return (
        <div className="main-page">
            <div className="companies">
                <AddCompanyCard />
                {companies.map(company => <Company key={company._id} {...company} currentUser={currentUser} />)}
            </div>
        </div>
    );
};

export default MainPage;