import React from 'react';
import Button from '@mui/material/Button';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormTextField from '../form-fields/FormTextField';
import FormCheckbox from '../form-fields/FormCheckbox';
import './ProgressForm.scss';

const ProgressSchema = Yup.object().shape({
        title: Yup.string()
            .required('Required'),
        content: Yup.string(),
        summary: Yup.string(),
        sucess: Yup.boolean(),
        pending: Yup.boolean(),
  });

const ProgressForm = ({initialValues, onSubmit, buttonText='SUBMIT'}) => {
    return (
        <Formik
                initialValues={initialValues}
                validationSchema={ProgressSchema}
                onSubmit={onSubmit}
            >
                <Form className="progress-form">
                    <FormTextField id="title" label="Title" variant="standard" />
                    <FormTextField id="content" label="Content" variant="standard" />
                    <FormTextField id="summary" label="Summary" variant="standard" />
                    <FormCheckbox id="pending" label="Is this step still pending?" />
                    <FormCheckbox id="success" label="Did you pass this step?" />
                    <Button className="submit-button" color="primary" variant="contained" fullWidth type="submit">
                        {buttonText}
                    </Button>
                </Form>
            </Formik>
    );
};

export default ProgressForm;
