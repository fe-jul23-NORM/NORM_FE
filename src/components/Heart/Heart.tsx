import React from 'react';
import './Heart.scss';

type Props = {
  handleClick: (e: React.MouseEvent) => void,
  isFavourite: boolean;
};

const Heart: React.FC<Props> = ({ handleClick, isFavourite }) => {
  const iconClass = isFavourite ? 'icon-heartheart-filled' : 'icon-heart';
  return (
    <div className="icon__favourite" >
      <span
        className={iconClass + ' icon-heart-button item-card-button'}
        onClick={handleClick}
      />
    </div>
  )
};

export default Heart;
