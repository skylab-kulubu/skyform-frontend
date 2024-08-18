import React from 'react';

const FormPreview = ({ formFields }) => {
    return (
        <div className="p-4">
            {formFields.map((field, index) => (
                <div key={index} className="mb-4">
                    {field.type === 'section' ? (
                        <div className="text-center font-bold text-lg text-gray-600 my-4">
                            {field.dividerTitle || 'Section Divider'}
                        </div>
                    ) : (
                        <>
                            <label className="block mb-2 font-bold">{field.label}</label>
                            {field.type === 'text' && (
                                <input
                                    type="text"
                                    className="border p-2 w-full bg-gray-100"
                                    readOnly
                                    placeholder="Text Field"
                                />
                            )}
                            {field.type === 'date' && (
                                <input
                                    type="date"
                                    className="border p-2 w-full bg-gray-100"
                                    readOnly
                                />
                            )}
                            {field.type === 'dropdown' && (
                                <select className="border p-2 w-full bg-gray-100" disabled>
                                    {field.options.map((option, i) => (
                                        <option key={i}>{option}</option>
                                    ))}
                                </select>
                            )}
                            {field.type === 'rating' && (
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-yellow-400 text-xl ${i < field.value ? 'text-yellow-500' : ''}`}>
                                            ★
                                        </span>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FormPreview;
