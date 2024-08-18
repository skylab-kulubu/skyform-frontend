import React from 'react';

const FormResponses = ({ responses }) => {
    return (
        <div className="p-4">
            {responses.length === 0 ? (
                <p>No responses yet.</p>
            ) : (
                responses.map((response, index) => (
                    <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
                        {response.map((answer, i) => (
                            <div key={i} className="mb-2">
                                <strong className="font-bold">{answer.label}:</strong>
                                {answer.type === 'rating' ? (
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <span
                                                key={starIndex}
                                                className={`text-yellow-400 text-xl ${starIndex < answer.value ? 'text-yellow-500' : ''}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <span> {answer.value}</span>
                                )}
                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
};

export default FormResponses;
