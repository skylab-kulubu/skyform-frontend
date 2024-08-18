import React, { useState, useEffect } from 'react';
import FormService from '../Services/formService';

const ViewResponses = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const fetchForms = async () => {
            const data = await FormService.getAllForms();
            setForms(data);
        };

        fetchForms();
    }, []);

    const handleDelete = async (formId) => {
        await FormService.deleteForm(formId);
        setForms(forms.filter((form) => form._id !== formId));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl">Cevapları Görüntüle</h1>
            {forms.map((form) => (
                <div key={form._id} className="my-2 p-2 border rounded">
                    <h2 className="text-xl">{form.title}</h2>
                    <button
                        onClick={() => handleDelete(form._id)}
                        className="bg-red-500 text-white p-2 rounded ml-2"
                    >
                        Sil
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ViewResponses;
