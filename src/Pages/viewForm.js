import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormService from '../Services/formService';

const ViewForm = () => {
    const { formId } = useParams();
    const [form, setForm] = useState(null);

    useEffect(() => {
        const fetchForm = async () => {
            const form = await FormService.getFormById(formId);
            setForm(form);
        };

        fetchForm();
    }, [formId]);

    if (!form) return <div>Yükleniyor...</div>;

    return (
        <div className="p-4">
            <h1 className="text-2xl">{form.title}</h1>
            {form.fields.map((field, index) => (
                <div key={index} className="my-2 p-2 border rounded">
                    <label>{field.label}</label>
                    <input type={field.type} className="my-2 p-2 border rounded w-full" />
                </div>
            ))}
        </div>
    );
};

export default ViewForm;
