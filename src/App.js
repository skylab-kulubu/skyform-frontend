import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/homePage';
import CreateForm from './Pages/createForm';
import ViewForm from './Pages/viewForm';
import ViewResponses from './Pages/viewResponses';
import FillForm from './Pages/fillForm'

const App = () => {
    return (
        <Router>
            <div className="min-h-screen ">
                <Routes>
                    <Route path="/"  element={<Home/>} />
                    <Route path="/create-form" element={<CreateForm/>} />
                    <Route path="/view-form/:formId" element={<ViewForm/>} />
                    <Route path="/view-responses" element={<ViewResponses/>} />
                    <Route path='/fill-form/:formId' element={<FillForm/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
