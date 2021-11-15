import React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { AddressForm } from './AddressForm';

export const Billing: React.FC = () => {
    return (
        <Formik initialValues={{}} onSubmit={(value: any) => console.log(value)}>
            <Form>
                <AddressForm formName="billingAddress"></AddressForm>
            </Form>
        </Formik>
    );
};
