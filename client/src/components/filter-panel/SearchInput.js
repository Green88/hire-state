import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


const SearchInput = ({onInputChange}) => {
	const [userInput, setUserInput] = useState('');
	const onUserInputChange = (evt) => {
		const val = evt.target.value;
		setUserInput(val);
		onInputChange(val);
	};
	const onSearchButtonClick = () => {
		onInputChange(userInput);
	}
	return (
		<Paper
			component="form"
			sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
		>
			<InputBase
				value={userInput}
				sx={{ ml: 1, flex: 1 }}
				placeholder="Search Company"
				inputProps={{ 'aria-label': 'search company' }}
				onChange={onUserInputChange}
			/>
			<IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={onSearchButtonClick}>
				<SearchIcon />
			</IconButton>
    	</Paper>
  );
}

export default SearchInput;