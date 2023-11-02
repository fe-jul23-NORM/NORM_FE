import React, { useEffect, useState } from 'react';
import './OrdersPage.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectUser } from '../../../store/auth/selectors';
import { User } from '../../../types/user.types';
import { getOrders } from '../../../store/cart/thunks';
import { selectOrders } from '../../../store/cart/selectors';
import { Modal } from '../../Modal';
import { LogoutModal } from './LogoutModal';
import { BackButton } from '../../BackButton';
import { Button } from '../../Button';
import { OrderList } from './OrderList';

export const OrdersPage: React.FC = () => {
  const user = useAppSelector(selectUser) as User;
  const orders = useAppSelector(selectOrders);
  const [isLogoutOpen, setLogoutOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [])

  const handleLogoutModal = () => {
    setLogoutOpen(!isLogoutOpen);
  }

  return (
    <div className="orders">

      {isLogoutOpen && (
        <Modal
          outsideHandler={handleLogoutModal}
          closeFunc={handleLogoutModal}
          withCloseIcon
        >
          <LogoutModal onClose={handleLogoutModal} />
        </Modal>
      )}
      <BackButton />
      <div className='orders__title-wrapper'>
        <h1 className="orders__title">{`${user.firstName} ${user.lastName}`}</h1>
        <div className="orders__button">
          <Button handleClick={handleLogoutModal} text='Logout' />
        </div>
      </div>
      <p className="orders__amount">
        {orders.length > 1
          ? `${orders.length} orders`
          : `${orders.length} order`}
      </p>
      <OrderList />
    </div>
  );
};
