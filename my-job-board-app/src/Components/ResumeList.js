import React, { useState } from 'react';
import axios from 'axios';

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);
  const [content, setContent] = useState('');

  const fetchResumes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/resumes');
      setResumes(response.data);
    } catch (error) {
      console.error('Error fetching resumes:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/resumes', { content });
      fetchResumes();
      setContent('');
    } catch (error) {
      console.error('Error creating resume:', error);
    }
  };

  return (
    <div>
      <h2>Resumes</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Resume Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Resume</button>
      </form>
      <ul>
        {resumes.map(resume => (
          <li key={resume.id}>{resume.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeList;


