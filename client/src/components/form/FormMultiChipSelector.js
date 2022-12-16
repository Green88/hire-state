import React from 'react';
import { useField, useFormikContext } from 'formik';
import MultiChipSelector from './MultiChipSelector';

const FormMultiChipSelector = ({ name, id, options, ...otherProps }) => {
    const { setFieldValue } = useFormikContext();
    const componentName = name || id;
    const [field, meta] = useField(componentName);

    const handleChange = values => {
        setFieldValue(componentName, values);
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

    return (
        <MultiChipSelector id={id} options={options} {...configSelect} />
    );
};

export default FormMultiChipSelector;