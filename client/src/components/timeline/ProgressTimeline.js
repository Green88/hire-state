import React from 'react';
import Timeline from '@mui/lab/Timeline';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TimelineItem from './TimelineItem';

import './ProgressTimeline.scss';

const ProgressTimeline = ({items}) => {
    return (
        <div className="progress-timeline">
            <Timeline>
                {items.map((item, index) => (
                    <TimelineItem key={`${item.id}-${index}`} item={item} />
                ))}
            </Timeline>
            {items.length ? (
                <IconButton>
                    <AddIcon />
                </IconButton>
            ) : (
                <Button variant="contained" size="small">Start process</Button>
            )}
            
        </div>
    );
}

export default ProgressTimeline;
