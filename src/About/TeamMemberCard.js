import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ isEnglish, isTurkish, nameEN, nameTR, titleEN, titleTR, image }) => {
  const name = isEnglish ? nameEN : nameTR;
  const title = isEnglish ? titleEN : titleTR;

  return (
    <div className="team-member-card">
      <img src={image} alt={name} className="team-member-image" />
      <div className="team-member-info">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
