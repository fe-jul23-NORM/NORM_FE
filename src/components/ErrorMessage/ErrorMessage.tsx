import React from 'react';
import './ErrorMessage.scss'

type Props = {
  text: string,
}

const ErrorMessage: React.FC<Props> = ({ text }) => {
  return (
    <div className='error-wrapper'>
      <span className='error-icon'/>
      <p className='error-text'>{text}</p>
    </div>
  );
};

export default ErrorMessage;
