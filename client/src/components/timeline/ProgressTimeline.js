import React from 'react';
import Timeline from '@mui/lab/Timeline';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TimelineItem from './TimelineItem';

import './ProgressTimeline.scss';

const ProgressTimeline = ({items, onAdTimelineItem}) => {
    return (
        <div className="progress-timeline">
            <Timeline>
                {items.map((item, index) => (
                    <TimelineItem key={`${item.id}-${index}`} item={item} />
                ))}
            </Timeline>
            {items.length ? (
                <IconButton onClick={onAdTimelineItem}>
                    <AddIcon />
                </IconButton>
            ) : (
                <Button variant="contained" size="small" onClick={onAdTimelineItem}>Start process</Button>
            )}
            
        </div>
    );
}

export default ProgressTimeline;
