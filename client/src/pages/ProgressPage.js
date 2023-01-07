import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProgressTimeline from '../components/timeline/ProgressTimeline';

// const items = [
//   {
//     id: '001',
//     title: 'Hiring assistant interview',
//     content: '',
//     pending: false,
//     passed: true,
//     summary: 'Went well',
//   },
//   {
//     id: '002',
//     title: 'Team lead screening interview',
//     content: 'No need to prepare, not technical',
//     pending: false,
//     passed: true,
//     summary: 'Went very well, great guy, interesting job',
//   },
//   {
//     id: '003',
//     title: 'Team lead and CTO coding interview',
//     content: 'Some basic coding, prepare ongoing side project',
//     pending: true,
//     passed: false,
//     summary: ''
//   }
// ];

const ProgressPage = () => {
    const currentUser = localStorage.getItem('user');
    const { companyId } = useParams();
    const [searchParams] = useSearchParams();

    const progressItemsKey = `progress-${currentUser}-${companyId}`;
    const progressItemsString = localStorage.getItem(progressItemsKey);
    const progressItems = progressItemsString ? JSON.parse(progressItemsString) : [];
   
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>{`Interview process at ${searchParams.get('name')}`}</h3>
            <ProgressTimeline items={progressItems} />
        </div>
    );
};

export default ProgressPage;
