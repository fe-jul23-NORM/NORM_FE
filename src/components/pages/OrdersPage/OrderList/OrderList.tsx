import React from 'react';
import { useAppSelector } from '../../../../store';
import { selectOrders } from '../../../../store/cart/selectors';
import './OrderList.scss'
import { OrderItem } from '../OrderItem';

export const OrderList: React.FC = () => {
  const orders = useAppSelector(selectOrders);

  return (
    <ul className='order-list'>
      {orders.map((order) => <OrderItem key={`ORDER-${order.id}`} order={order} />)}
    </ul>
  );
};
