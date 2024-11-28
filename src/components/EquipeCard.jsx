import React from 'react';
import '../styles/EquipeCard.css';

function EquipeCard({ profilePhoto, name, jobTitle, description }) {
  return (
    <div className="card" role="region" aria-labelledby={`profile-${name.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className="image-container">
        <a>
          <img 
            src={profilePhoto} 
            alt={`Foto de perfil de ${name}`} 
            className="profile-photo" 
          />
        </a>
      </div>
      <div className="content">
        <h2 
          id={`profile-${name.replace(/\s+/g, '-').toLowerCase()}`} 
          className="profile-name"
        >
          {name}
        </h2>
        <p className="job-title">{jobTitle}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default EquipeCard;


