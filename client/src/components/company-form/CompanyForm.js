import React from 'react';
import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormMultiChipSelector from '../form-fields/FormMultiChipSelector';
import FormTextField from '../form-fields/FormTextField';
import FormSelector from '../form-fields/FormSelector';
import { TECHNOLOGIES, INDUSTRIES, LOCATIONS, COMPANY_STATUS } from '../../constants';
import './CompanyForm.scss';

const CompanySchema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        link: Yup.string()
            .required('Required'),
        industry: Yup.string()
            .required('Required'),
        technologies: Yup.array(),
        ceo: Yup.string(),
        known_members: Yup.string(),
        location: Yup.string().required('Required'),
        address: Yup.string(),
        location_score: Yup.number().min(0, 'Cannot be negative').max(5, 'Max score is 5'),
        size_min: Yup.number().min(0, 'Cannot be negative').required('Required'),
        size_max: Yup.number().min(0, 'Cannot be negative').required('Required'),
        hybridity: Yup.number().min(0, 'Cannot be negative').max(5, 'Max days is 5'),
        status: Yup.string(),
        series: Yup.string(),
        funding: Yup.number(),
        salary: Yup.number(),
        title: Yup.string(),
        glassdoor_score: Yup.number().min(0, 'Cannot be negative').max(5, 'Max score is 5'),
        glassdoor_comment: Yup.string()
  });

const CompanyForm = ({initialValues, onSubmit, buttonText='SUBMIT'}) => {
    return (
        <Formik
                initialValues={initialValues}
                validationSchema={CompanySchema}
                onSubmit={onSubmit}
            >
                <Form className="company-form">
                    <FormTextField id="name" label="Company name" variant="standard" />
                    <FormTextField id="link" label="Link" variant="standard" />
                    <FormSelector id="industry" label="Industry" options={INDUSTRIES} />
                    <FormMultiChipSelector id="technologies" options={TECHNOLOGIES} label="Technology" />
                    <FormTextField id="ceo" label="CEO" variant="standard" />
                    <FormTextField id="known_members" label="People I know" variant="standard" />
                    <FormSelector id="location" label="Location" options={LOCATIONS.CENTER} />
                    <FormTextField id="address" label="Address" variant="standard" />
                    <FormTextField id="location_score" label="Location score" variant="standard" />
                    <div className="range-input">
                        <FormTextField id="size_min" label="Size from" variant="standard" />
                        <FormTextField id="size_max" label="Size up to" variant="standard" />
                    </div>
                    <FormTextField id="hybridity" label="Days at home" variant="standard" />
                    <FormSelector id="status" label="Company status" options={COMPANY_STATUS} />
                    <FormTextField id="series" label="Series" variant="standard" />
                    <FormTextField id="funding" label="Funding" variant="standard" />
                    <FormTextField id="salary" label="Salary" variant="standard" />
                    <FormTextField id="title" label="Title" variant="standard" />
                    <FormTextField id="glassdoor_score" label="Glassdoor score" variant="standard" />
                    <FormTextField id="glassdoor_comment" label="Glassdoor comment" variant="standard" />
                    <Button className="submit-button" color="primary" variant="contained" fullWidth type="submit">
                        {buttonText}
                    </Button>
                </Form>
            </Formik>
    );
};

export default CompanyForm;
