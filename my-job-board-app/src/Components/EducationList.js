// EducationList.js

import React, { useState, useEffect } from 'react';

function EducationList() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch('/educations') // Fetch education data from Flask backend
      .then(response => response.json())
      .then(data => {
        setEducations(data.educations); // Update state with education data
      })
      .catch(error => console.error('Error fetching educations:', error));
  }, []);

  return (
    <div>
      <h2>Education List</h2>
      <ul>
        {educations.map(education => (
          <li key={education.id}>
            <div>Degree: {education.degree}</div>
            <div>Institution: {education.institution}</div>
            <div>Graduation Year: {education.graduation_year}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EducationList;
