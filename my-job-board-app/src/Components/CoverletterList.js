// src/components/CoverLetterList.jsx
// src/components/CoverLetterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoverLetterList = () => {
  const [coverLetters, setCoverLetters] = useState([]);

  useEffect(() => {
    const fetchCoverLetters = async () => {
      try {
        const response = await axios.get('/coverletter');
        setCoverLetters(response.data.coverletters);
      } catch (error) {
        console.error('Error fetching cover letters:', error);
      }
    };

    fetchCoverLetters();
  }, []);

  return (
    <div>
      <h2>Cover Letters</h2>
      <ul>
        {coverLetters.map(coverLetter => (
          <li key={coverLetter.id}>{coverLetter.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoverLetterList;
