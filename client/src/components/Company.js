import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EditIcon from '@mui/icons-material/Edit';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Link } from 'react-router-dom'; 
import { updateCompanyScore } from '../actions/companies';
import './Company.scss';

const Company = ({_id, name, link, score, industry, title, location, technologies, currentUser}) => {
    const dispatch = useDispatch();
    const onCalculateClick = () => {
        dispatch(updateCompanyScore(_id, currentUser));
    };
    return (
        <Card className="company-card" sx={{ minWidth: 275, maxWidth: 400 }}>
            <CardContent>
                <section className="company-title">
                    <div className="left">
                        <a href={link} target="_blank" rel="noopener noreferrer"><span className="name">{name}</span></a>
                        <span><em>{industry}</em></span>
                        <span>{location}</span>
                    </div>
                    <span className="score">{score}</span>
                </section>
                <p className="job">{title}</p>
                <p>{technologies.join(', ')}</p>
                <Link to={`company/${_id}`}><EditIcon /></Link>
                {currentUser ? <CalculateIcon onClick={onCalculateClick} /> : null}
            </CardContent>
        </Card>
    );
}

export default Company;
