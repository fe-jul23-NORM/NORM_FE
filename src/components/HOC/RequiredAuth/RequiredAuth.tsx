import { Outlet } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useAppSelector } from '../../../store';
import { selectUser } from '../../../store/auth/selectors';
import { useNavigate } from 'react-router';

export const RequiredAuth: React.FC = () => {
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user])

  return (
    user ? <Outlet /> : null
  );
}
