import React from 'react';

const ProfileDisplay = ({ profiles }) => {
  return (
    <div id="profiles" className="profile-display">
      <h1>Profiles</h1>
      <div className="profiles">
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <div className="profile-info">
              <h2>{profile.name}</h2>
              <p>{profile.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDisplay;
