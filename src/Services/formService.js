import axios from 'axios';

const API_URL = 'http://localhost:5000/api/forms'; // Backend API URL'i buraya ekleyin

// Form oluşturma
const createForm = async (formData) => {
    const response = await axios.post(`${API_URL}/create`, formData);
    return response.data;
};

// Formu ID'ye göre getirme
const getFormById = async (formId) => {
    const response = await axios.get(`${API_URL}/${formId}`);
    return response.data;
};

// Tüm formları getirme
const getAllForms = async () => {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
};

// Formu güncelleme
const updateForm = async (formId, updatedData) => {
    const response = await axios.put(`${API_URL}/update/${formId}`, updatedData);
    return response.data;
};

// Formu silme
const deleteForm = async (formId) => {
    const response = await axios.delete(`${API_URL}/delete/${formId}`);
    return response.data;
};

// Formu doldurma (cevap gönderme)
const submitForm = async (formId, formData) => {
    const response = await axios.post(`${API_URL}/submit/${formId}`, formData);
    return response.data;
};

const FormService = {
    createForm,
    getFormById,
    getAllForms,
    updateForm,
    deleteForm,
    submitForm,
};

export default FormService;
