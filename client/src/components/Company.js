import React from 'react';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import EditIcon from '@mui/icons-material/Edit';
import ViewTimelineIcon from '@mui/icons-material/ViewTimeline';
import CalculateIcon from '@mui/icons-material/Calculate';
import BlockIcon from '@mui/icons-material/Block';
import { Link } from 'react-router-dom'; 
import { updateCompanyScore, updateCompany } from '../actions/companies';
import './Company.scss';

const Company = ({_id, name, link, score, industry, title, location, technologies, isRecruting, currentUser}) => {
    const dispatch = useDispatch();
    const onCalculateClick = () => {
        dispatch(updateCompanyScore(_id, currentUser));
    };
    const onToggleRecruting = () => {
        dispatch(updateCompany(_id, {isRecruting: !isRecruting}));
    };
    return (
        <Card className="company-card" sx={{ minWidth: 275, maxWidth: 400 }}>
            <CardContent className="card-content">
                <section className="company-data">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <span className="name">{name}</span>
                    </a>
                    <span><em>{industry}</em></span>
                    <span>{location}</span>
                    <Divider sx={{width: '100%'}} />
                    <span className="job">{title}</span>
                    <span>{technologies.join(', ')}</span>
                </section>
            </CardContent>
            <CardActions>
                <div className="left-icons">
                    <Link to={`company/${_id}`}><EditIcon /></Link>
                    {currentUser ? <CalculateIcon onClick={onCalculateClick} sx={{cursor: 'pointer'}} /> : null}
                    <BlockIcon onClick={onToggleRecruting} color={isRecruting ? 'auto' : 'disabled'} sx={{cursor: 'pointer'}} />
                    <Link to={`progress/${_id}?name=${name}`}><ViewTimelineIcon /></Link>
                </div>
                <div className="right-icons">
                    <span className="score">{score}</span>
                </div>
            </CardActions>
        </Card>
    );
}

export default Company;
