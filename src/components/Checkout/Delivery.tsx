import React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import { AddressForm } from './AddressForm';

export const Delivery: React.FC = () => {
    return (
        <Formik initialValues={{}} onSubmit={(value: any) => console.log(value)}>
            <Form>
                <AddressForm formName="deliveryAddress"></AddressForm>
            </Form>
        </Formik>
    );
};
