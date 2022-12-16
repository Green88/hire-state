import React from 'react';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';

const FormTextField = ({
  name,
  id,
  ...otherProps
}) => {
  const [field, meta] = useField(name || id);

  const configTextfield = {
    ...field,
    ...otherProps,
    variant: 'standard'
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return (
    <TextField {...configTextfield} />
  );
};

export default FormTextField;