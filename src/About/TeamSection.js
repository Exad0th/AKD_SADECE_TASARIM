import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import XIcon from '@mui/icons-material/X';
import member1 from '../images/SevgiSitesi.jpg';
import member2 from '../images/KepenekVilla.jpg';
import member3 from '../images/akd1.jpg';
import member4 from '../images/akd2.jpg';
import './TeamSection.css';

const TeamSection = ({ isEnglish, isTurkish }) => {
  return (
    <div className="team-section">
      <h2>{isEnglish ? 'Gallery' : 'Galeri'}</h2>
      <div className="team-grid">
        <TeamMemberCard 
          isEnglish={isEnglish}
          isTurkish={isTurkish}
          nameEN="John Doe" 
          nameTR="Ahmet Yılmaz" 
          titleEN="Founder and CEO" 
          titleTR="Kurucu ve CEO" 
          image={member1} 
        />
        <TeamMemberCard 
          isEnglish={isEnglish}
          isTurkish={isTurkish}
          nameEN="Jane Smith" 
          nameTR="Ayşe Demir" 
          titleEN="Chief Operating Officer" 
          titleTR="Operasyon Müdürü" 
          image={member2} 
        />
        <TeamMemberCard 
          isEnglish={isEnglish}
          isTurkish={isTurkish}
          nameEN="Alice Johnson" 
          nameTR="Fatma Kaya" 
          titleEN="Head of Marketing" 
          titleTR="Pazarlama Müdürü" 
          image={member3} 
        />
        <TeamMemberCard 
          isEnglish={isEnglish}
          isTurkish={isTurkish}
          nameEN="Bob Brown" 
          nameTR="Mehmet Şahin" 
          titleEN="Chief Technology Officer" 
          titleTR="Teknoloji Müdürü" 
          image={member4} 
        />
      </div>
      
      
    </div>
  );
};

export default TeamSection;
