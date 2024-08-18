import React from 'react';

const FormFill = ({ formFields, onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // Convert FormData to a plain object
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Logic to gather form data
        onSubmit(data); // Send the data to backend
    };

    return (
        <form className="p-4" onSubmit={handleSubmit}>
            {formFields.map((field, index) => (
                <div key={index} className="mb-4">
                    {field.type === 'section' && (
                        <div className="text-center font-bold text-lg text-gray-600 my-4">
                            {field.dividerTitle || 'Section Divider'}
                        </div>
                    )}
                    {field.type !== 'section' && (
                        <>
                            <label htmlFor={`field-${index}`} className="block mb-2">
                                {field.label}
                            </label>
                            {field.type === 'text' && (
                                <input
                                    id={`field-${index}`}
                                    name={`field-${index}`}
                                    type="text"
                                    className="border p-2 w-full"
                                    required
                                />
                            )}
                            {field.type === 'date' && (
                                <input
                                    id={`field-${index}`}
                                    name={`field-${index}`}
                                    type="date"
                                    className="border p-2 w-full"
                                    required
                                />
                            )}
                            {field.type === 'dropdown' && (
                                <select
                                    id={`field-${index}`}
                                    name={`field-${index}`}
                                    className="border p-2 w-full"
                                    required
                                >
                                    {field.options.map((option, i) => (
                                        <option key={i} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
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
                        </>
                    )}
                </div>
            ))}
            <button className="bg-blue-500 text-white p-2 mt-4" type="submit">
                Submit
            </button>
        </form>
    );
};

export default FormFill;
