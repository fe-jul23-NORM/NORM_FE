import React from 'react';
import './Heart.scss';

type Props = {
  handleClick: (e: React.MouseEvent) => void,
  isFavourite: boolean;
};

const Heart: React.FC<Props> = ({ handleClick, isFavourite }) => {
  console.log(isFavourite);
  const iconClass = isFavourite ? 'icon-heartheart-filled' : 'icon-heart';
  return (
    <div className="icon__favourite" onClick={handleClick}>
      <span
        className={iconClass + ' icon-heart-button item-card-button'}
      />
    </div>
  )
};

export default Heart;
