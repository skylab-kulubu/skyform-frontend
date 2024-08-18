import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormFill from '../Components/formFill';
import FormService from '../Services/formService';

const FillForm = () => {
    const { formId } = useParams();
    const [formFields, setFormFields] = useState([]);

    useEffect(() => {
        const fetchForm = async () => {
            const form = await FormService.getFormById(formId);
            setFormFields(form.fields);
        };

        fetchForm();
    }, [formId]);

    const handleSubmit = async (formData) => {
        await FormService.submitForm(formId, formData);
        alert('Form başarıyla gönderildi!');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl">Formu Doldur</h1>
            <FormFill formFields={formFields} onSubmit={handleSubmit} />
        </div>
    );
};

export default FillForm;
