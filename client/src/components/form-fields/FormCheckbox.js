import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useField, useFormikContext } from 'formik';


const FormCheckbox = ({name, id, label, value, ...otherProps}) => {
	const { setFieldValue } = useFormikContext();
	const componentName = name || id;
	const [field] = useField(componentName);

	const handleChange = evt => {
		const { checked } = evt.target;
		setFieldValue(componentName, checked);
	};

	const configCheckbox = {
		...field,
		...otherProps,
		checked: field.value,
		onChange: handleChange,
	};

    return (
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
    );
}

export default FormCheckbox;
