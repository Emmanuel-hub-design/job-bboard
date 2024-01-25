// src/services/api.js
import axios from 'axios';

// Create an instance of Axios with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000',  // Update the URL based on your Flask app's configuration
});

// Define your API functions

// Get educations
export const getEducations = async () => {
  try {
    const response = await api.get('/educations');
    return response.data.educations;
  } catch (error) {
    console.error('Error fetching educations:', error);
    throw error;
  }
};

// Get experiences
export const getExperiences = async () => {
  try {
    const response = await api.get('/experiences');
    return response.data.experiences;
  } catch (error) {
    console.error('Error fetching experiences:', error);
    throw error;
  }
};

// Get profiles
export const getProfiles = async () => {
  try {
    const response = await api.get('/profiles');
    return response.data.profiles;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    throw error;
  }
};

// Get resumes
export const getResumes = async () => {
  try {
    const response = await api.get('/resumes');
    return response.data.resumes;
  } catch (error) {
    console.error('Error fetching resumes:', error);
    throw error;
  }
};

// Get skills
export const getSkills = async () => {
  try {
    const response = await api.get('/skills');
    return response.data.skills;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

// Get users
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Add more API functions for other endpoints

// Export the api instance for custom configurations if needed
export default api;
