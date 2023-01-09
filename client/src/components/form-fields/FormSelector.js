import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useField, useFormikContext } from 'formik';

const Selector = ({options, label, value, id, onChange}) => {
    return (
        <div className="form-selector">
            <FormControl fullWidth>
                <InputLabel id={id}>{label}</InputLabel>
                <Select
                    labelId={`${id}-label`}
                    id={id}
                    value={value}
                    label={label}
                    onChange={onChange}
                >
                    {options.map((option, idx) => (<MenuItem key={`${option}-${idx}`} value={option}>{option}</MenuItem>))}
                </Select>
            </FormControl>
        </div>
    );
}

const FormSelector = ({name, id, options, ...otherProps}) => {
    const { setFieldValue } = useFormikContext();
    const componentName = name || id;
    const [field, meta] = useField(componentName);

    const handleChange = (event) => {
        const {target: { value }} = event;
        console.log(componentName, value);
        setFieldValue(componentName, value);
    };
    
    const configSelect = {
        ...field,
        ...otherProps,
        onChange: handleChange
    };

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }
    return <Selector id={id} options={options} {...configSelect} />;
};

export default FormSelector;
