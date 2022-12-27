import React, {useEffect, useState, useMemo} from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchCompanies } from '../actions/companies';
import Company from '../components/Company';
import AddCompanyCard from '../components/AddCompanyCard';
import FilterPanel from '../components/filter-panel/FilterPanel';
import './MainPage.scss';


const MainPage = () => {
    const currentUser = localStorage.getItem('user');
    const { data: companies, isLoading, success } = useSelector((state) => state.companies, shallowEqual);
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState('');
    const [shouldFilterInactive, setShouldFilterInactive] = useState(false);
    const [shouldSortByScore, setShouldSortByScore] = useState(false);

    useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

    const filteredCompanies = useMemo(() => {
        let filtered = [...companies];
        if (userInput) {
            filtered = filtered.filter((item) => item.name.toLowerCase().includes(userInput.toLowerCase()));
        }
        if (shouldFilterInactive) {
            filtered = filtered.filter((item) => item.isRecruting);
        }

        if (shouldSortByScore) {
            filtered.sort((a, b) => b.score - a.score);
        }

        return filtered;
    }, [companies, userInput, shouldFilterInactive, shouldSortByScore]);

    if (isLoading) {
        return <CircularProgress />;
    }

    if (!success) {
        return <div />;
    }

    return (
        <div className="main-page">
            <FilterPanel 
                onUserInputChange={setUserInput} 
                onFilterInactiveChange={setShouldFilterInactive} 
                onSortByScoreChange={setShouldSortByScore} 
            />
            <div className="companies">
                <AddCompanyCard />
                {filteredCompanies.map(company => <Company key={company._id} {...company} currentUser={currentUser} />)}
            </div>
        </div>
    );
};

export default MainPage;