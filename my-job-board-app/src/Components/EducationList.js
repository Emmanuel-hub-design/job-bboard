import React, { useState } from 'react';
import axios from 'axios';

function EducationList() {
    const [educations, setEducations] = useState([]);
    const [formData, setFormData] = useState({
        degree: '',
        institution: '',
        graduation_year: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/educations', formData);
            setEducations([...educations, response.data.education]);
            setFormData({
                degree: '',
                institution: '',
                graduation_year: ''
            });
        } catch (error) {
            console.error('Error creating education:', error);
        }
    };

    return (
        <div>
            <h2>Education Details</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="degree" placeholder="Degree" value={formData.degree} onChange={handleInputChange} required />
                <input type="text" name="institution" placeholder="Institution" value={formData.institution} onChange={handleInputChange} required />
                <input type="text" name="graduation_year" placeholder="Graduation Year" value={formData.graduation_year} onChange={handleInputChange} required />
                <button type="submit">Add Education</button>
            </form>
            <ul> 
                {educations.map(education => (
                    <li key={education.id}>
                        <p>Degree: {education.degree}</p>
                        <p>Institution: {education.institution}</p>
                        <p>Graduation Year: {education.graduation_year}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EducationList;

