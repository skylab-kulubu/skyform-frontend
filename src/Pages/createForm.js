import React, { useState } from 'react';
import FormService from '../Services/formService';
import FormBuilder from '../Components/formBuilder';

const CreateForm = () => {
    const [formFields, setFormFields] = useState([]);
    const [title, setTitle] = useState('');

    const handleCreateForm = async () => {
        const formData = { title, fields: formFields };
        await FormService.createForm(formData);
        alert('Form başarıyla oluşturuldu!');
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl">Yeni Form Oluştur</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Form Başlığı"
                className="my-2 p-2 border rounded"
            />
            <FormBuilder formFields={formFields} setFormFields={setFormFields} />
            <button onClick={handleCreateForm} className="bg-green-500 text-white p-2 rounded ml-2">
                Formu Oluştur
            </button>
        </div>
    );
};

export default CreateForm;
