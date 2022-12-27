import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import SearchInput from './SearchInput';
import './FilterPanel.scss';

const FilterPanel = ({onUserInputChange, onFilterInactiveChange, onSortByScoreChange}) => {
    const handleInactiveChange = (evt) => {
        onFilterInactiveChange(evt.target.checked);
    };

    const handleSortByScoreChange = (evt) => {
        onSortByScoreChange(evt.target.checked);
    };

    return (
        <div className="filter-panel">
            <SearchInput onInputChange={onUserInputChange} />
            <FormControlLabel
                control={<Switch color="primary" onChange={handleInactiveChange} />}
                label="Hide inactive"
                labelPlacement="start"
            />
            <FormControlLabel
                control={<Switch color="primary" onChange={handleSortByScoreChange} />}
                label="Sort by score"
                labelPlacement="start"
            />
        </div>
    );
}

export default FilterPanel;