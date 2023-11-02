import React from 'react';
import './LogoutModal.scss';
import { logout } from '../../../../store/auth/thunks';
import { useAppDispatch } from '../../../../store';
import { Button } from '../../../Button';

type Props = {
  onClose: () => void;
}

export const LogoutModal: React.FC<Props> = ({onClose}) => {
  const dispatch = useAppDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  }
  
  return (
    <div className='logout'>
      <h3 className='logout__title'>Are you sure?</h3>
      <p className='logout__text'>Logging out of your account will terminate your current session</p>
      <div className="logout__buttons">
        <Button
          text='Confirm'
          isDanger
          handleClick={handleLogout}
        />
        <Button
          text='Cancel'
          handleClick={onClose}
        />
      </div>
    </div>
  );
};
