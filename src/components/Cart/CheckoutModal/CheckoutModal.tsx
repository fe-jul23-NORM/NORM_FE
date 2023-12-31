import React from 'react';
import './CheckoutModal.scss';
import { useAppDispatch, useAppSelector } from '../../../store';
import { createOrderByGuest, createOrderByUser } from '../../../store/cart/thunks';
import { selectUser } from '../../../store/auth/selectors';
import { errorManager } from '../../../utils/errorManager';
import { getNotification } from '../../../utils/notification';
import { NotificationEnum, NotificationTypeEnum } from '../../../types/notification.types';
import { Button } from '../../Button';
import { selectCartLoading } from '../../../store/cart/selectors';

type Props = {
  onClose: () => void;
  email: string,
}

export const CheckoutModal: React.FC<Props> = ({ onClose, email }) => {

  // need to check

  const isLoading = useAppSelector(selectCartLoading)
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleCheckout = () => {
    if (user) {
      dispatch(createOrderByUser())
        .unwrap()
        .then(() => {
          getNotification(NotificationEnum.OrderHasBeenCreated, NotificationTypeEnum.success)
        })
        .catch((e) => {
          errorManager(e);
        })
        .finally(() => {
          onClose()
        })
    } else {
      dispatch(createOrderByGuest(email))
        .unwrap()
        .then(() => {
          getNotification(NotificationEnum.OrderHasBeenCreated, NotificationTypeEnum.success)
        })
        .catch((e) => {
          errorManager(e);
        })
        .finally(() => {
          onClose()
        })
    }
  }

  return (
    <div className="checkout">
      <h3 className="checkout__title">Confirm your order</h3>
      <p className="checkout__text">Are you sure you want to confirm this order?</p>
      <div className="checkout__buttons">
        <Button
          text="Confirm"
          handleClick={handleCheckout}
          disabled={isLoading}
        />
        <Button
          text="Cancel"
          handleClick={onClose}
          isDanger
        />
      </div>
    </div>
  );
};
