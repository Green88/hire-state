import React, {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		},
	},
};

function getStyles(item, chosenItem, theme) {
	return {
	fontWeight:
		chosenItem.indexOf(item) === -1
		? theme.typography.fontWeightRegular
		: theme.typography.fontWeightMedium,
	};
}

const MultiChipSelector = ({onChange, value, options, label = 'Chip', id }) => {
	const theme = useTheme();
	const [chosenItem, setChosenItem] = useState(value || []);

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		const newItem = typeof value === 'string' ? value.split(',') : value;
		// On autofill we get a stringified value.
		setChosenItem(newItem);
		onChange(newItem);
	};

	return (
		<div className="multi-chip-selector">
			<FormControl sx={{ width: '100%' }}>
			<InputLabel id="multiple-chip-label">{label}</InputLabel>
			<Select
				labelId="multiple-chip-label"
				id={`${id}-select`}
				multiple
				value={chosenItem}
				onChange={handleChange}
				input={<OutlinedInput id={id} label={label} />}
				renderValue={(selected) => (
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
					{selected.map((value) => (
					<Chip key={value} label={value} />
					))}
				</Box>
				)}
				MenuProps={MenuProps}
			>
				{options.map((item) => (
				<MenuItem
					key={item}
					value={item}
					style={getStyles(item, chosenItem, theme)}
				>
					{item}
				</MenuItem>
				))}
			</Select>
			</FormControl>
		</div>
	);
};

export default MultiChipSelector;
