import React, { useEffect } from 'react';
import './OrdersPage.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectUser } from '../../../store/auth/selectors';
import { User } from '../../../types/user.types';
import BackButton from '../../BackButton/BackButton';
import { getOrders } from '../../../store/cart/thunks';
import { selectOrders } from '../../../store/cart/selectors';

const OrdersPage: React.FC = () => {
  const user = useAppSelector(selectUser) as User;
  const orders = useAppSelector(selectOrders);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getOrders());
  }, [])
  
  return (
    <div className="orders">
      
      <BackButton/>
      
      <h1 className="orders__title">{`${user.firstName} ${user.lastName}`}</h1>
      
      <p className="orders__amount">
        {orders.length > 1
          ? `${orders.length} orders`
          : `${orders.length} order`}
      </p>
    </div>
  );
};

export default OrdersPage;
