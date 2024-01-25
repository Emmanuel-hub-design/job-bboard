// src/App.js
import React from 'react';
import EducationList from './Components/EducationList';
import ExperienceList from './Components/ExperienceList';
import ProfileList from './Components/ProfileList';
import ResumeList from './Components/ResumeList';
import SkillsList from './Components/SkillsList';
import UserList from './Components/UserList';



const App = () => {
  return (
    <div>
      <EducationList />
      <ExperienceList />
      <ProfileList />
      <ResumeList />
      <SkillsList />
      <UserList />
  
      {/* Use other components */}
    </div>
  );
};

export default App;
