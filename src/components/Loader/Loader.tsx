import './Loader.scss';
import React from 'react';

export const Loader: React.FC = () => (
  <div className="loader__container">
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
);