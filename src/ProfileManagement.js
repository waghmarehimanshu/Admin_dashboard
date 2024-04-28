import React, { useState } from 'react';
import ProfileForm from './ProfileForm';

const ProfileManagement = ({ profiles, onCreate, onUpdate, onDelete }) => {
  const [editingProfile, setEditingProfile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [error, setError] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    profile.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  const handleEdit = (profile) => {
    setEditingProfile(profile);
  };

  const handleDelete = (profileId) => {
    try {
      onDelete(profileId);
    } catch (error) {
      setError('Error deleting profile. Please try again later.');
    }
  };

  const handleFormSubmit = (formData) => {
    if (editingProfile) {
      onUpdate({ ...editingProfile, ...formData });
      setEditingProfile(null);
    } else {
      onCreate(formData);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div>
        <h3>Add/Edit Profile</h3>
        <ProfileForm profile={editingProfile} onSubmit={handleFormSubmit} />
      </div>
      <div>
        <h3>Search and Filter</h3>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by location..."
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        />
      </div>
      {error && <div className="error">{error}</div>}
      <div>
        <h3>Profiles</h3>
        <ul>
          {filteredProfiles.map(profile => (
            <li key={profile.id}>
              <span>{profile.name}</span>
              <span>{profile.location}</span>
              <button onClick={() => handleEdit(profile)}>Edit</button>
              <button onClick={() => handleDelete(profile.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileManagement;
