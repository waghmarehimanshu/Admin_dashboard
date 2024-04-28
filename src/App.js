// App.js

import React, { useState } from 'react';
import ProfileDisplay from './ProfileDisplay';
import InteractiveMap from './InteractiveMap';
import ProfileManagement from './ProfileManagement';
import './styles.css'; // Import CSS for styling

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', latitude: 51.505, longitude: -0.09, description: 'Software Engineer', location: 'London' },
    { id: 2, name: 'Jane Smith', latitude: 51.51, longitude: -0.1, description: 'Graphic Designer', location: 'New York' },
  ]);

  const handleCreateProfile = (formData) => {
    const newProfile = { id: profiles.length + 1, ...formData };
    setProfiles([...profiles, newProfile]);
  };

  const handleUpdateProfile = (updatedProfile) => {
    const updatedProfiles = profiles.map(profile =>
      profile.id === updatedProfile.id ? updatedProfile : profile
    );
    setProfiles(updatedProfiles);
  };

  const handleDeleteProfile = (profileId) => {
    const updatedProfiles = profiles.filter(profile => profile.id !== profileId);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <a href="#profiles">Profiles</a>
        <a href="#map">Map</a>
        <a href="#management">Admin Panel</a>
      </nav>
      <ProfileDisplay profiles={profiles} />
      <InteractiveMap profiles={profiles} />
      <ProfileManagement
        profiles={profiles}
        onCreate={handleCreateProfile}
        onUpdate={handleUpdateProfile}
        onDelete={handleDeleteProfile}
      />
    </div>
  );
};

export default App;

