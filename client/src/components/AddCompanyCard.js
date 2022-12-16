import React from 'react';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import './AddCompanyCard.scss';

const AddCompanyCard = () => {
    return (
        <Card
            sx={{ minWidth: 275, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} 
            className="add-company-card"
        >
            <Link to="company/new">
                <AddIcon sx={{ fontSize: 36 }}/>
            </Link>
        </Card>
    );
};

export default AddCompanyCard;
