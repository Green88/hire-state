import React from 'react';
import MuiTimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const dotColor = (item) => {
    if(item.pending) {
        return 'grey';
    }
    return item.passed ? 'success' : 'error';
}

const TimelineItem = ({item}) => {
    return (
        <MuiTimelineItem>
            <TimelineSeparator>
                <TimelineDot color={dotColor(item)} />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px'}}>
                <div><b>{item.title}</b></div>
                <div>{item.summary}</div>
            </TimelineContent>
        </MuiTimelineItem>
    );
}

export default TimelineItem;
