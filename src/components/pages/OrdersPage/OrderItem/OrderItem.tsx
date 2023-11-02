import React from 'react';
import './OrderItem.scss';
import { Order } from '../../../../types/product.types';
import { format } from 'date-fns'

type Props = {
  order: Order,
}

export const OrderItem: React.FC<Props> = ({ order }) => {

  const price = order.products.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0);

  return (
    <li className='order-item'>
      <div className="order-item__header">
        <p className='order-item__status'>{order.status}</p>
        <p>{format(new Date(order.createdAt), 'HH:mm dd.MM.yyyy')}</p>
      </div>
      <h3 className='order-item__title'>Products:</h3>
      <ol className='order-item__product-list'>
        {order.products.map((item) => {
          return (
            <li className='order-item__product-item' key={`product-order-${item.id}`}>
              <p className='order-item__product-name'>{item.product.name}</p>
              <p className='order-item__product-quantity'>{item.quantity}</p>
              <p className='order-item__product-price'>{`${item.quantity * item.product.price} $`}</p>
            </li>
          )
        })}
      </ol>
      <div className="order-item__total">
        <p>{`${price} $`}</p>
      </div>
    </li>
  );
};
