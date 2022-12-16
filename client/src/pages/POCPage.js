import React from 'react';
import { Formik, Form } from 'formik';
import FormTextField from '../components/form/FormTextField';
import FormMultiChipSelector from '../components/form/FormMultiChipSelector';
import { Button } from '@mui/material';
import { TECHNOLOGIES } from '../constants';

const POCPage = () => {
    return (
        <div>
            <Formik
              initialValues={{
                company: '',
                technologies: [],
              }}
              onSubmit={values => {
                console.log(values);
              }}
            >
              <Form>
                <FormTextField id="company" name="company" />
                <FormMultiChipSelector options={TECHNOLOGIES} name="technologies" label="Technolohies" />
                <Button color="primary" variant="contained" fullWidth type="submit">
                    ADD COMPANY
                </Button>
              </Form>
            </Formik>
        </div>
    );
};

export default POCPage;
