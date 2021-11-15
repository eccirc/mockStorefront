import React from 'react';
import { Field, FormikErrors, FormikTouched } from 'formik';
import { AddressFormValues } from './AddressFormValues.interface';

export interface AddressFormProps {
    formName: string;
    errors?: FormikErrors<AddressFormValues>;
    touched?: FormikTouched<AddressFormValues>;
}

export const AddressForm: React.FC<AddressFormProps> = ({ formName = 'address', errors, touched }) => {
    const fields = [
        'First name',
        'Surname',
        'E-mail',
        'Phone',
        'House number & Street',
        'Town/ City',
        'Postcode',
        'Country',
        'County/ State',
    ];

    return (
        <div className="flex flex-col w-2/3">
            {/* {fields.map((field, index) => (
                <Field
                    className="border rounded-sm p-2 m-2"
                    label={field}
                    placeholder={field}
                    type="text"
                    name={field}
                    id={field}
                    key={index}
                />
            ))} */}
            <Field label="First Name" name={`${formName}.firstName`} variant="outlined" fullWidth />
            <Field label="Last Name" name={`${formName}.lasttName`} variant="outlined" fullWidth />
            <Field label="House Number/ Name" name={`${formName}.addressLine1`} variant="outlined" fullWidth />
            <Field label="Street" name={`${formName}.addressLine2`} variant="outlined" fullWidth />
            <Field label="City" name={`${formName}.city`} variant="outlined" fullWidth />
            <Field label="County" name={`${formName}.county`} variant="outlined" fullWidth />
            <Field label="Country" name={`${formName}.country`} variant="outlined" fullWidth />
            <Field label="Postal code" name={`${formName}.postalCode`} variant="outlined" fullWidth />
        </div>
    );
};
