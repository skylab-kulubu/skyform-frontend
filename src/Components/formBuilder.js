import React, { useState } from 'react';
import { FaSquarePlus } from "react-icons/fa6";

const FormBuilder = ({ formFields, setFormFields }) => {
    const [selectedType, setSelectedType] = useState('');
  
    const addField = () => {
      setFormFields([...formFields, { type: selectedType, label: '', options: [], dividerTitle: '', required: false }]);
    };

    const handleLabelChange = (index, label) => {
        const updatedFields = formFields.map((field, i) =>
            i === index ? { ...field, label } : field
        );
        setFormFields(updatedFields);
    };

    const handleOptionChange = (index, optionIndex, optionValue) => {
        const updatedFields = formFields.map((field, i) => {
            if (i === index && field.options) {
                const updatedOptions = field.options.map((option, j) =>
                    j === optionIndex ? optionValue : option
                );
                return { ...field, options: updatedOptions };
            }
            return field;
        });
        setFormFields(updatedFields);
    };

    const addOption = (index) => {
        const updatedFields = formFields.map((field, i) => {
            if (i === index && field.options) {
                return { ...field, options: [...field.options, ''] };
            }
            return field;
        });
        setFormFields(updatedFields);
    };

    const handleDividerTitleChange = (index, title) => {
        const updatedFields = formFields.map((field, i) =>
            i === index ? { ...field, dividerTitle: title } : field
        );
        setFormFields(updatedFields);
    };

    const handleRequiredChange = (index) => {
        const updatedFields = formFields.map((field, i) =>
            i === index ? { ...field, required: !field.required } : field
        );
        setFormFields(updatedFields);
    };

    const removeField = (index) => {
        const updatedFields = formFields.filter((_, i) => i !== index);
        setFormFields(updatedFields);
    };

    return (
        <div className="p-4">
        <div className="flex gap-2 mb-4">
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className='px-4 rounded-lg'>
            <option value="">Soru tipini seçiniz.</option>
            <option value="text">Paragraf</option>
            <option value="date">Tarih</option>
            <option value="dropdown">Çoktan Seçmeli</option>
            <option value="rating">Puanlama</option>
            <option value="section">Bölme</option>
          </select>
          <button className="text-white m-2" onClick={addField}>
            <FaSquarePlus className='text-3xl'/>
          </button>
        </div>

            <div className="mt-4">
                {formFields.map((field, index) => (
                    <div key={index} className="mb-4 p-4 border rounded relative">
                        <button
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
                            onClick={() => removeField(index)}
                        >
                            &times;
                        </button>
                        {field.type !== 'section' && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Field Label"
                                    value={field.label}
                                    onChange={(e) => handleLabelChange(index, e.target.value)}
                                    className="border p-2 w-full mb-2"
                                />
                                {field.type === 'dropdown' && (
                                    <>
                                        {field.options.map((option, optionIndex) => (
                                            <input
                                                key={optionIndex}
                                                type="text"
                                                placeholder={`Option ${optionIndex + 1}`}
                                                value={option}
                                                onChange={(e) =>
                                                    handleOptionChange(index, optionIndex, e.target.value)
                                                }
                                                className="border p-2 w-full mb-2"
                                            />
                                        ))}
                                        <button
                                            className="bg-gray-500 text-white p-2"
                                            onClick={() => addOption(index)}
                                        >
                                            Add Option
                                        </button>
                                    </>
                                )}
                                {field.type === 'rating' && (
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400 text-xl">
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        checked={field.required}
                                        onChange={() => handleRequiredChange(index)}
                                        className="mr-2"
                                    />
                                    <label>Required</label>
                                </div>
                            </>
                        )}
                        {field.type === 'section' && (
                            <div className="text-center font-bold text-lg text-gray-600">
                                <input
                                    type="text"
                                    placeholder="Divider Title"
                                    value={field.dividerTitle}
                                    onChange={(e) => handleDividerTitleChange(index, e.target.value)}
                                    className="border p-2 w-full"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormBuilder;
