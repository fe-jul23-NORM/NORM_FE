import React from 'react';
import './OrdersPage.scss';
import { useAppSelector } from '../../../store';
import { selectUser } from '../../../store/auth/selectors';
import { User } from '../../../types/user.types';

const OrdersPage: React.FC = () => {
  const user = useAppSelector(selectUser) as User;
  
  return (
    <div className="orders">
      
      <h1 className="orders__title">{`${user.firstName} ${user.lastName}`}</h1>
    </div>
  );
};

export default OrdersPage;
