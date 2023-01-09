import React from 'react';
import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormMultiChipSelector from '../form-fields/FormMultiChipSelector';
import FormTextField from '../form-fields/FormTextField';
import { TECHNOLOGIES, INDUSTRIES, COMPANY_STATUS, LOCATIONS } from '../../constants';
import '../company-form/CompanyForm.scss';

const SettingsSchema = Yup.object().shape({
    industry: Yup.array()
        .required('Required'),
    technologies: Yup.array()
        .required('Required'),
    locations: Yup.array().required('Required'),
    size_min: Yup.number().min(0, 'Cannot be negative'),
    size_max: Yup.number().min(0, 'Cannot be negative'),
    hybridity: Yup.number()
        .min(0, 'Cannot be negative')
        .max(5, 'Max days is 5')
        .required('Required'),
    company_status: Yup.array(),
    salary: Yup.number(),
    title: Yup.string(),
});


const SettingsForm = ({initialValues, onSubmit, buttonText = 'SUBMIT'}) => {
    return (
        <Formik
                initialValues={initialValues}
                validationSchema={SettingsSchema}
                onSubmit={onSubmit}
            >
                <Form className="settings-form">
                    <FormMultiChipSelector id="industry" label="Industry" options={INDUSTRIES} />
                    <FormMultiChipSelector id="technologies" options={TECHNOLOGIES} label="Technology" />
                    <FormMultiChipSelector id="locations" label="Location" options={LOCATIONS.CENTER} />
                    <FormMultiChipSelector id="company_status" label="Company status" options={COMPANY_STATUS} />
                    <div className="range-input">
                        <FormTextField id="size_min" label="Size from" variant="standard" />
                        <FormTextField id="size_max" label="Size up to" variant="standard" />
                    </div>
                    <FormTextField id="hybridity" label="Days at home" variant="standard" />
                    <FormTextField id="salary" label="Salary" variant="standard" />
                    <FormTextField id="title" label="Title" variant="standard" />
                    <Button className="submit-button" color="primary" variant="contained" fullWidth type="submit">
                        {buttonText}
                    </Button>
                </Form>
            </Formik>
    );
};

export default SettingsForm;
