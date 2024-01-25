// src/App.js
import React from 'react';
import EducationList from './components/EducationList';
import ExperienceList from './components/ExperienceList';
import ProfileList from './components/ProfileList';
import ResumeList from './components/ResumeList';
import SkillsList from './components/SkillsList';
import UserList from './components/UserList';
import CoverLetterList from './components/CoverLetterList';

const App = () => {
  return (
    <div>
      <EducationList />
      <ExperienceList />
      <ProfileList />
      <ResumeList />
      <SkillsList />
      <UserList />
      <CoverLetterList />
      {/* Use other components */}
    </div>
  );
};

export default App;
