import React from 'react';
import './BackButton.scss';
import { useNavigate } from 'react-router';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigateToBack = () => {
    navigate(-1);
  }

  return (
    <div className='back-button' onClick={handleNavigateToBack}>
      <span className='icon-left back-button__icon' />
      <span className='back-button__text'>Back</span>
    </div>
  );
};
